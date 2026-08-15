import forge from 'node-forge';
import { PDFDocument, PDFName, PDFHexString, PDFString, PDFArray, PDFDict } from 'pdf-lib';

export interface SignOptions {
  pdfBytes: Uint8Array;
  p12Buffer: ArrayBuffer;
  passphrase?: string;
  visualOptions?: {
    page: number;
    x: number;
    y: number;
    width: number;
    height: number;
    signatureUrl?: string;
  };
}

export interface CertInfo {
  subject: string;
  issuer: string;
  validFrom: Date;
  validTo: Date;
}

export function parseCertificate(p12Buffer: ArrayBuffer, passphrase = ''): {
  cert: any;
  privateKey: any;
  info: CertInfo;
} {
  try {
    const p12Der = forge.util.createBuffer(new Uint8Array(p12Buffer));
    const p12Asn1 = forge.asn1.fromDer(p12Der);
    const p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, passphrase);

    let privateKey: any = null;
    let cert: any = null;
    const oids = (forge as any).oids;
    for (const safeContent of p12.safeContents) {
      for (const safeBag of safeContent.safeBags) {
        if (safeBag.type === oids.keyBag || safeBag.type === oids.pkcs8ShroudedKeyBag) {
          privateKey = safeBag.key;
        } else if (safeBag.type === oids.certBag) {
          if (!cert) {
            cert = safeBag.cert;
          }
        }
      }
    }

    if (!privateKey || !cert) {
      throw new Error('PKCS12 file must contain both a private key and a certificate.');
    }

    const getCommonName = (attributes: any[]) => {
      const cnAttr = attributes.find((attr: any) => attr.name === 'commonName');
      return cnAttr ? cnAttr.value : 'Unknown';
    };

    const info: CertInfo = {
      subject: getCommonName(cert.subject.attributes),
      issuer: getCommonName(cert.issuer.attributes),
      validFrom: cert.validity.notBefore,
      validTo: cert.validity.notAfter,
    };

    return { cert, privateKey, info };
  } catch (err: any) {
    throw new Error(`Failed to decrypt or parse certificate: ${err.message || err}`);
  }
}

export async function signPdfWithCertificate({
  pdfBytes,
  p12Buffer,
  passphrase = '',
  visualOptions,
}: SignOptions): Promise<Uint8Array> {
  // 1. Decrypt certificate locally
  const { cert, privateKey } = parseCertificate(p12Buffer, passphrase);

  // 2. Load PDF document
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pages = pdfDoc.getPages();
  // Create AcroForm if not exists
  let acroForm = pdfDoc.catalog.get(PDFName.of('AcroForm')) as PDFDict | undefined;
  if (!acroForm) {
    acroForm = pdfDoc.context.obj({
      Fields: [],
      SigFlags: 3,
    });
    pdfDoc.catalog.set(PDFName.of('AcroForm'), acroForm);
  }

  // Create Signature Dict with placeholder Contents and ByteRange
  const sigDict = pdfDoc.context.obj({
    Type: 'Sig',
    Filter: 'Adobe.PPKLite',
    SubFilter: 'adbe.pkcs7.detached',
    Contents: PDFHexString.of('0'.repeat(8192)), // 4096 bytes reserved (8192 hex chars)
    ByteRange: [0, 1111111111, 1111111111, 1111111111], // 49 chars length placeholder
    M: PDFString.fromDate(new Date()),
  });
  const sigDictRef = pdfDoc.context.register(sigDict);

  let widgetRef;

  if (visualOptions) {
    const pageIndex = visualOptions.page - 1;
    if (pageIndex < 0 || pageIndex >= pages.length) {
      throw new Error('Invalid page number specified for signature placement.');
    }
    const page = pages[pageIndex];

    // Load the visual signature image if provided
    let embeddedImage;
    if (visualOptions.signatureUrl) {
      const response = await fetch(visualOptions.signatureUrl);
      const imgBytes = await response.arrayBuffer();
      embeddedImage = await pdfDoc.embedPng(imgBytes);
    }

    // Create signature widget annotation
    const widgetDict = pdfDoc.context.obj({
      Type: 'Annot',
      Subtype: 'Widget',
      FT: 'Sig',
      T: PDFString.of(`Signature-${Date.now()}`),
      F: 4, // Print flag
      Rect: [
        visualOptions.x,
        visualOptions.y,
        visualOptions.x + visualOptions.width,
        visualOptions.y + visualOptions.height,
      ],
      V: sigDictRef,
      P: page.ref,
    });

    // If a visual signature overlay image was supplied, use it as appearance
    if (embeddedImage) {
      const xobjectProperties = {
        Type: 'XObject',
        Subtype: 'Form',
        BBox: [0, 0, visualOptions.width, visualOptions.height],
        Resources: {
          XObject: {
            Image: embeddedImage.ref,
          },
        },
      };
      const streamContent = `
        q
        ${visualOptions.width} 0 0 ${visualOptions.height} 0 0 cm
        /Image Do
        Q
      `;
      const xobjectStream = pdfDoc.context.stream(streamContent, xobjectProperties);
      const xobjectRef = pdfDoc.context.register(xobjectStream);

      const apDict = pdfDoc.context.obj({
        N: xobjectRef,
      });
      widgetDict.set(PDFName.of('AP'), apDict);
    }

    widgetRef = pdfDoc.context.register(widgetDict);

    // Add widget annotation to page's /Annots
    let annots = page.node.get(PDFName.of('Annots')) as PDFArray | undefined;
    if (!annots) {
      annots = pdfDoc.context.obj([]) as PDFArray;
      page.node.set(PDFName.of('Annots'), annots);
    }
    annots.push(widgetRef);
  } else {
    // Invisible signature
    const widgetDict = pdfDoc.context.obj({
      Type: 'Annot',
      Subtype: 'Widget',
      FT: 'Sig',
      T: PDFString.of(`Signature-${Date.now()}`),
      F: 0,
      Rect: [0, 0, 0, 0],
      V: sigDictRef,
      P: pages[0].ref, // Associate with the first page
    });
    widgetRef = pdfDoc.context.register(widgetDict);
    
    // Add widget annotation to first page's /Annots
    let annots = pages[0].node.get(PDFName.of('Annots')) as PDFArray | undefined;
    if (!annots) {
      annots = pdfDoc.context.obj([]) as PDFArray;
      pages[0].node.set(PDFName.of('Annots'), annots);
    }
    annots.push(widgetRef);
  }

  // Add widget to AcroForm /Fields
  let fields = acroForm.get(PDFName.of('Fields')) as PDFArray | undefined;
  if (!fields) {
    fields = pdfDoc.context.obj([]) as PDFArray;
    acroForm.set(PDFName.of('Fields'), fields);
  }
  fields.push(widgetRef);

  // 3. Save PDF without compressed object streams to ensure readable hex placeholders
  const modifiedPdfBytes = await pdfDoc.save({ useObjectStreams: false });

  // 4. Find the offset of our Contents hex placeholder (<0000...0000>)
  const placeholderBytes = new Uint8Array(8194);
  placeholderBytes[0] = 0x3c; // '<'
  for (let i = 1; i <= 8192; i++) {
    placeholderBytes[i] = 0x30; // '0'
  }
  placeholderBytes[8193] = 0x3e; // '>'

  let placeholderIndex = -1;
  for (let i = 0; i < modifiedPdfBytes.length - placeholderBytes.length; i++) {
    let found = true;
    for (let j = 0; j < placeholderBytes.length; j++) {
      if (modifiedPdfBytes[i + j] !== placeholderBytes[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      placeholderIndex = i;
      break;
    }
  }

  if (placeholderIndex === -1) {
    throw new Error('Failed to locate signature placeholder inside serialized PDF document.');
  }

  // 5. Replace ByteRange placeholder with correct values
  // Actual byte ranges:
  // - Range 1: 0 to placeholderIndex
  // - Range 2: placeholderIndex + 8194 to end of file
  const byteRangeContent = `0 ${placeholderIndex} ${placeholderIndex + 8194} ${modifiedPdfBytes.length - (placeholderIndex + 8194)}`;
  const placeholderNumbers = '0 1111111111 1111111111 1111111111';
  
  if (byteRangeContent.length > placeholderNumbers.length) {
    throw new Error('ByteRange representation exceeds pre-allocated string length.');
  }

  const paddedNumbers = byteRangeContent.padEnd(placeholderNumbers.length, ' ');
  const actualByteRangeStr = `/ByteRange [ ${paddedNumbers} ]`;

  const byteRangePlaceholder = '/ByteRange [ 0 1111111111 1111111111 1111111111 ]';
  const byteRangePlaceholderBytes = new TextEncoder().encode(byteRangePlaceholder);

  let byteRangeIndex = -1;
  for (let i = 0; i < modifiedPdfBytes.length - byteRangePlaceholderBytes.length; i++) {
    let found = true;
    for (let j = 0; j < byteRangePlaceholderBytes.length; j++) {
      if (modifiedPdfBytes[i + j] !== byteRangePlaceholderBytes[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      byteRangeIndex = i;
      break;
    }
  }

  if (byteRangeIndex === -1) {
    throw new Error('Failed to locate ByteRange placeholder inside serialized PDF document.');
  }

  const actualByteRangeBytes = new TextEncoder().encode(actualByteRangeStr);
  modifiedPdfBytes.set(actualByteRangeBytes, byteRangeIndex);

  // 6. Calculate message digest over PDF byte ranges (excluding the signature block)
  const signedBytes = new Uint8Array(placeholderIndex + (modifiedPdfBytes.length - (placeholderIndex + 8194)));
  signedBytes.set(modifiedPdfBytes.subarray(0, placeholderIndex), 0);
  signedBytes.set(modifiedPdfBytes.subarray(placeholderIndex + 8194), placeholderIndex);

  // 7. Create PKCS#7 signed data block using node-forge
  const oids = (forge as any).oids;
  const p7 = forge.pkcs7.createSignedData();
  p7.content = forge.util.createBuffer(signedBytes);

  p7.addCertificate(cert);
  p7.addSigner({
    key: privateKey,
    certificate: cert,
    digestAlgorithm: oids.sha256,
    authenticatedAttributes: [
      {
        type: oids.contentType,
        value: oids.data,
      },
      {
        type: oids.messageDigest,
      },
      {
        type: oids.signingTime,
        value: new Date(),
      },
    ],
  });

  // Sign detached (the signed data is not embedded inside the PKCS#7 container itself)
  p7.sign({ detached: true });

  // Convert PKCS#7 ASN.1 structure to DER format
  const asn1 = p7.toAsn1();
  const derBytes = forge.asn1.toDer(asn1).getBytes();
  const hexSignature = forge.util.bytesToHex(derBytes);

  if (hexSignature.length > 8192) {
    throw new Error(`PKCS#7 signature length (${hexSignature.length}) exceeds pre-allocated space (8192 hex characters).`);
  }

  // 8. Inject PKCS#7 signature hex string into the PDF placeholder
  const paddedHexSignature = hexSignature.padEnd(8192, '0');
  const signatureBytes = new TextEncoder().encode(paddedHexSignature);
  modifiedPdfBytes.set(signatureBytes, placeholderIndex + 1); // skip the '<' character

  return modifiedPdfBytes;
}

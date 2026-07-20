import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import styles from './post.module.css';

// Pre-render all blog posts as static HTML at build time
// This moves them from ƒ (Dynamic) to ○ (Static) — Google gets full HTML
export async function generateStaticParams() {
  return [
    { slug: 'free-digital-signature-certificate' },
    { slug: 'create-digital-signature-online-free' },
    { slug: 'are-electronic-signatures-legally-binding' },
    { slug: 'ultimate-guide-signing-pdf-securely' },
    { slug: 'how-to-sign-a-document-online-free-pdf-editor' },
    { slug: 'how-to-sign-pdf-on-iphone-android-free' },
    { slug: 'how-to-sign-nda-online-free' },
  ];
}

interface Post {
  title: string;
  date: string;
  lastModified: string;
  author: string;
  keywords: string[];
  content: string;
}

// This would normally come from a CMS or markdown files
const getPostData = (slug: string): Post | null => {
  const posts: Record<string, Post> = {
    'how-to-sign-a-document-online-free-pdf-editor': {
      title: 'How to Edit and Sign PDF Online & Sign a Document Online Free (2026)',
      date: 'July 6, 2026',
      lastModified: 'July 18, 2026',
      author: 'MyDigitSign Editorial',
      keywords: ['edit and sign pdf', 'sign a document online', 'pdf editor signature', 'pdf editor free signature', 'sign on document online', 'sign document for free'],
      content: `
        <p>If you've ever needed to <strong>edit and sign a PDF</strong> quickly without downloading bulky software or paying for a subscription, you're not alone. Millions of people search for a reliable way to <a href="/">sign a document online free</a> every single day. The good news? You don't need Adobe Acrobat, DocuSign, or any server-based platform. A modern, browser-based tool handles everything privately — right on your device.</p>

        <h2>Why Editing and Signing PDFs Online Has Changed Everything</h2>
        <p>Not long ago, the workflow for signing a document was painful: download the file, open it in Acrobat, add a signature field, print it, physically sign it, scan it back in, and email it. That process could take 20 minutes for a one-page contract.</p>
        <p>Today, browser-based tools let you upload a PDF, place your signature visually, and download the signed version — all in under two minutes. No printing, no scanning, no emailing. Just a clean, signed PDF ready to go.</p>
        <p>What's even better is that modern tools like <strong>MyDigitSign</strong> operate entirely client-side. Your document never gets uploaded to a server, which means your sensitive contracts, NDAs, and financial documents stay completely private on your device.</p>

        <h2>What Does "Edit and Sign PDF" Actually Mean?</h2>
        <p>When people search for an <strong>online PDF editor signature</strong> tool, they usually want to do one or more of these things:</p>
        <ul>
          <li>Place a visual signature on a specific field or line in the PDF</li>
          <li>Resize and reposition the signature so it looks natural</li>
          <li>Navigate multi-page PDFs to find the right signing page</li>
          <li>Download the finished document without visible watermarks or paywalls</li>
        </ul>
        <p>MyDigitSign covers all of these. You get a drag-and-drop signature overlay that you can place anywhere on any page, resize with a drag handle, and download immediately — completely free.</p>

        <h2>3 Ways to Create Your Signature Before Signing</h2>
        <p>Before you can <strong>sign on document online</strong>, you need to create your signature. MyDigitSign gives you three natural options:</p>

        <h3>Option 1: Draw Your Signature</h3>
        <p>Use your mouse, trackpad, or touchscreen finger to draw your signature freehand on a digital canvas. This feels the most natural and produces a unique, personal signature. Choose from black, blue, or red pen colors. <a href="/tools/draw-signature-online">Try the draw signature tool →</a></p>

        <h3>Option 2: Type Your Name in Cursive</h3>
        <p>Don't want to draw with a mouse? Simply type your name and choose from beautiful cursive font styles. The result looks like a genuine handwritten signature, consistent every time. <a href="/tools/type-signature-online">Try the type signature tool →</a></p>

        <h3>Option 3: Upload a Signature Image</h3>
        <p>Have a photo or scan of your handwritten signature? Upload it as a PNG or JPG and use it directly on your documents. <a href="/tools/sign-image-online">Try the sign image tool →</a></p>

        <h2>Step-by-Step: How to Sign a Document Online for Free</h2>
        <ol>
          <li>
            <strong>Open MyDigitSign in your browser:</strong> Navigate to <a href="/">mydigitsign.com</a>. No account, no registration, no credit card required.
          </li>
          <li>
            <strong>Create your signature:</strong> Pick the draw, type, or upload method from the signature panel.
          </li>
          <li>
            <strong>Upload your PDF or image document:</strong> Drag and drop your file into the document area, or click to browse. The file is read locally — nothing is ever sent to any server.
          </li>
          <li>
            <strong>Place and resize your signature:</strong> Your signature appears as a draggable overlay. Move it to the signing line. Use the drag handle to resize it to fit naturally.
          </li>
          <li>
            <strong>Navigate multiple pages if needed:</strong> Use the page controls to move to other signing pages and repeat placement.
          </li>
          <li>
            <strong>Download your signed document:</strong> Click the Download button. Your signed PDF saves directly to your device in seconds.
          </li>
        </ol>

        <h2>What File Formats Does It Support?</h2>
        <p>MyDigitSign works with the most common document and image formats:</p>
        <ul>
          <li><strong>PDF</strong> — Standard Adobe PDF files, most contracts, agreements, and forms</li>
          <li><strong>PNG</strong> — High-quality image files, often used for scanned documents</li>
          <li><strong>JPG / JPEG</strong> — Compressed image files from phone cameras or scanners</li>
        </ul>
        <p>All files up to 10MB are supported. Since processing happens in your browser, larger files may take a moment to load depending on your device's processing speed.</p>

        <h2>Is an Online PDF Editor Signature Tool Legally Binding?</h2>
        <p>For most business and personal use cases, yes. A visual e-signature placed on a PDF carries the same legal weight as a handwritten signature under:</p>
        <ul>
          <li><strong>ESIGN Act (USA, 2000):</strong> Electronic signatures are valid for most commercial and personal agreements.</li>
          <li><strong>UETA:</strong> Applies in 47 US states, governing electronic transactions broadly.</li>
          <li><strong>eIDAS (EU):</strong> The European framework for electronic signatures, accepted across all 27 EU member states.</li>
        </ul>
        <p>For a deeper look at legality, read: <a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding? →</a></p>

        <h2>When You Need More Than a Visual Signature</h2>
        <p>In some situations — government documents, certain financial transactions, or contracts requiring cryptographic tamper evidence — you may need a certificate-based digital signature. This uses a <code>.pfx</code> or <code>.p12</code> certificate file to mathematically seal the PDF.</p>
        <p>MyDigitSign supports this too. You can upload your own certificate and sign documents with cryptographic proof — all client-side, all private. Learn how to get one free: <a href="/blog/free-digital-signature-certificate">How to Get a Free Digital Signature Certificate →</a></p>

        <h2>MyDigitSign vs. Other PDF Signing Tools</h2>
        <table style="width:100%; border-collapse: collapse; margin: 16px 0;">
          <thead>
            <tr style="background: rgba(0,0,0,0.05);">
              <th style="padding: 10px; text-align: left; border: 1px solid rgba(0,0,0,0.1);">Feature</th>
              <th style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">MyDigitSign</th>
              <th style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">DocuSign</th>
              <th style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">SmallPDF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">Completely Free</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ Yes</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ Paid plans</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">⚠️ Limited free</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">No file uploads to server</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ 100% local</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ Cloud stored</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ Server upload</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">No account required</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ Yes</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ Required</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">⚠️ Optional</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">Watermark-free downloads</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ Always</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ Paid only</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ Free adds watermark</td>
            </tr>
          </tbody>
        </table>

        <h2>Frequently Asked Questions</h2>
        <h3>Can I sign a PDF on my phone?</h3>
        <p>Absolutely. MyDigitSign is fully responsive and works in any modern mobile browser. Open it on your iPhone or Android, draw your signature with your finger, upload the PDF, and sign it. Full mobile guide: <a href="/blog/how-to-sign-pdf-on-iphone-android-free">How to Sign a PDF on iPhone & Android Free →</a></p>

        <h3>Does MyDigitSign add a watermark to signed PDFs?</h3>
        <p>No. MyDigitSign is completely free with zero watermarks, no ads on downloaded documents, and no subscription required, ever.</p>

        <h3>What happens to my PDF after I upload it?</h3>
        <p>Nothing — because it never leaves your device. MyDigitSign processes everything in your browser memory. When you close the tab, even that local processing clears instantly. No data retention, no server logs of your documents.</p>

        <h3>Can I sign multiple pages in one PDF?</h3>
        <p>Yes. After placing a signature on one page, navigate to the next page using the page controls and place additional signatures. Download once you're done with all pages.</p>

        <h3>Is there a file size limit?</h3>
        <p>MyDigitSign supports files up to 10MB. For larger PDFs, consider compressing your file first using a free PDF compressor tool, then sign it here.</p>

        <hr />
        <h2>Related Articles</h2>
        <ul>
          <li><a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding & Acceptable?</a></li>
          <li><a href="/blog/free-digital-signature-certificate">How to Get a Free Digital Signature Certificate in 2026</a></li>
          <li><a href="/blog/how-to-sign-pdf-on-iphone-android-free">How to Sign a PDF on iPhone, iPad & Android for Free</a></li>
          <li><a href="/blog/ultimate-guide-signing-pdf-securely">The Ultimate Guide to Signing PDFs Securely</a></li>
          <li><a href="/blog/create-digital-signature-online-free">How to Create a Digital Signature Online for Free</a></li>
        </ul>
      `
    },
    'free-digital-signature-certificate': {
      title: 'How to Get a Free Digital Signature Certificate in 2026',
      date: 'July 4, 2026',
      lastModified: 'July 18, 2026',
      author: 'MyDigitSign Team',
      keywords: ['free signing certificate', 'create a digital signature certificate', 'where to get digital signature certificate', 'how can i get digital signature certificate', 'digital signature certificate', 'digit sign'],
      content: `
        <p>If you need to cryptographically sign a PDF document to verify its integrity, you'll need a <strong>digital signature certificate</strong> — typically a file with a <code>.pfx</code> or <code>.p12</code> extension containing a private key and public key certificate. While commercial Certificate Authorities charge substantial yearly fees, you can easily create and obtain a <strong>free signing certificate</strong> for personal, testing, or internal business workflows.</p>

        <h2>What is a Digital Signature Certificate?</h2>
        <p>A digital signature certificate acts as a cryptographic credential that authenticates the identity of the signer. When you place a cryptographic <strong>digit sign</strong> on a PDF, a mathematical hash of the document is encrypted using your certificate's private key. If the document is tampered with after signing, the signature breaks immediately — providing a secure, tamper-evident signing mechanism recognized by law globally.</p>
        <p>This is different from a visual e-signature (an image of your signature). A certificate-based digital signature provides <em>proof</em> that the document hasn't changed since signing, while a visual signature provides intent to agree.</p>

        <h2>Self-Signed vs. Publicly Trusted Certificates</h2>
        <p>Before you <strong>create a digital signature certificate</strong>, understand the two main categories:</p>
        <ul>
          <li><strong>Self-Signed Certificates (Free):</strong> Created by you on your own device. Perfect for internal agreements, developers, testing, and private transactions where the parties trust each other. Adobe Acrobat might show a "Signature Not Verified" warning unless you manually trust the certificate.</li>
          <li><strong>Publicly Trusted Certificates (Paid):</strong> Issued by a certified Certificate Authority (CA) whose roots are pre-trusted by Adobe, Microsoft, and Apple. Necessary for official public transactions, government bids, and enterprise contracts — but they require identity verification and cost money.</li>
        </ul>
        <p>For most freelancers, small business owners, and developers, a self-signed certificate is completely sufficient.</p>

        <h2>Where to Get a Digital Signature Certificate Free (3 Methods)</h2>
        <p>Here are three simple, free methods to generate your own <strong>free signing certificate</strong> depending on your operating system:</p>

        <h3>Method 1: Windows — PowerShell (2 Minutes)</h3>
        <p>Windows has built-in utilities to generate self-signed certificates instantly:</p>
        <ol>
          <li>Open <strong>PowerShell</strong> as an Administrator.</li>
          <li>Run this command (replace <code>"Your Name"</code> with your name or business name):
            <pre style="background: rgba(0,0,0,0.05); padding: 12px; border-radius: 6px; overflow-x: auto; font-family: monospace; font-size: 0.9em; margin: 10px 0;">$cert = New-SelfSignedCertificate -Type DocumentEncryptionCert -Subject "CN=Your Name" -KeyUsage DigitalSignature -KeyAlgorithm RSA -KeyLength 2048 -CertStoreLocation Cert:\\CurrentUser\\My</pre>
          </li>
          <li>Export it as a password-protected <code>.pfx</code> file:
            <pre style="background: rgba(0,0,0,0.05); padding: 12px; border-radius: 6px; overflow-x: auto; font-family: monospace; font-size: 0.9em; margin: 10px 0;">$pwd = ConvertTo-SecureString -String "YourPasswordHere" -Force -AsPlainText
Export-PfxCertificate -Cert $cert -FilePath "$env:USERPROFILE\\Desktop\\MySignatureCert.pfx" -Password $pwd</pre>
          </li>
          <li>Your new certificate is now on your Desktop, ready to use!</li>
        </ol>

        <h3>Method 2: macOS — Keychain Access (No Terminal Needed)</h3>
        <p>Mac users can generate certificates using Apple's default Keychain application:</p>
        <ol>
          <li>Open the <strong>Keychain Access</strong> app on your Mac.</li>
          <li>In the menu bar, go to <strong>Keychain Access → Certificate Assistant → Create a Certificate</strong>.</li>
          <li>Enter a Name (e.g., "John Doe Signer"), set <strong>Identity Type</strong> to <em>Self Signed Root</em>, and <strong>Certificate Type</strong> to <em>Signature</em>. Click <strong>Create</strong>.</li>
          <li>Find the certificate in your "login" keychain, right-click it, and select <strong>Export</strong>.</li>
          <li>Save as a Personal Information Exchange (<code>.p12</code>) format and assign a secure passphrase.</li>
        </ol>

        <h3>Method 3: OpenSSL — Cross-Platform (Works on Windows, Mac, Linux)</h3>
        <p>If you have OpenSSL installed, you can generate a signing key and package it into a <code>.p12</code> file with one command block:</p>
        <pre style="background: rgba(0,0,0,0.05); padding: 12px; border-radius: 6px; overflow-x: auto; font-family: monospace; font-size: 0.9em; margin: 10px 0;"># 1. Generate a private key and a self-signed certificate
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -subj "/CN=Your Name"

# 2. Package them into a password-protected PKCS#12 (.p12) file
openssl pkcs12 -export -out signature_cert.p12 -inkey key.pem -in cert.pem</pre>

        <h2>How Long is a Self-Signed Certificate Valid?</h2>
        <p>By default, the OpenSSL command above creates a certificate valid for 365 days. The PowerShell method creates one valid for one year as well. You can extend this by changing the <code>-days</code> parameter. For a 5-year certificate, use <code>-days 1825</code>.</p>

        <h2>How to Sign Your PDFs with a Digital Certificate in MyDigitSign</h2>
        <p>Once you have your <code>.pfx</code> or <code>.p12</code> certificate file, use it directly in <strong>MyDigitSign</strong> to place a secure cryptographic signature:</p>
        <ol>
          <li>Navigate to <a href="/">mydigitsign.com</a>.</li>
          <li>Load the PDF document you wish to sign.</li>
          <li>Under the signature tools, find the <strong>Digital Certificate (.pfx / .p12)</strong> uploader.</li>
          <li>Upload your certificate file and enter the passphrase you created.</li>
          <li>Place your visual signature on the document and click <strong>Download Signed</strong>. The tool will cryptographically seal the document completely inside your browser. No files are uploaded to any server.</li>
        </ol>

        <h2>Is a Self-Signed Certificate Legally Valid?</h2>
        <p>Yes, for most business and personal agreements. Under the ESIGN Act and eIDAS, what matters legally is that there was clear <em>intent to sign</em> and a way to identify who signed. A self-signed certificate provides that identity layer. However, for government contracts or situations requiring a nationally recognized Certification Authority (CA), you may need a paid publicly-trusted certificate from providers like GlobalSign, DigiCert, or Sectigo.</p>
        <p>Read more: <a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding & Acceptable? →</a></p>

        <h2>Where to Get a Paid Digital Signature Certificate</h2>
        <p>If you need a publicly-trusted certificate (recognized without warnings in Adobe), here are some reputable Certificate Authorities:</p>
        <ul>
          <li><strong>GlobalSign:</strong> Widely trusted, competitive pricing, good support</li>
          <li><strong>DigiCert:</strong> Enterprise-grade, higher cost but excellent trust chain</li>
          <li><strong>Sectigo (formerly Comodo):</strong> Affordable options for individuals and small businesses</li>
          <li><strong>Certum (Poland):</strong> Good for EU eIDAS-compliant certificates</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <h3>Can I use a free certificate for signing contracts?</h3>
        <p>Yes. For contracts between parties who trust each other (clients, employers, co-founders), a self-signed certificate is perfectly valid and legally enforceable. The signature proves who signed the document and that it hasn't been altered.</p>

        <h3>What's the difference between a .pfx and a .p12 file?</h3>
        <p>There's no technical difference — they are the same PKCS#12 format. The <code>.pfx</code> extension is traditionally used on Windows, while <code>.p12</code> is common on macOS and Linux. Both work identically.</p>

        <h3>Can I use the same certificate on multiple devices?</h3>
        <p>Yes. Once you have the <code>.pfx</code> or <code>.p12</code> file, you can copy it to any device and import it. Keep it backed up securely — if you lose the file and the password, you cannot recover it.</p>

        <hr />
        <h2>Related Articles</h2>
        <ul>
          <li><a href="/blog/create-digital-signature-online-free">How to Create a Digital Signature Online for Free</a></li>
          <li><a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding & Acceptable?</a></li>
          <li><a href="/blog/ultimate-guide-signing-pdf-securely">The Ultimate Guide to Signing PDFs Securely</a></li>
          <li><a href="/blog/how-to-sign-a-document-online-free-pdf-editor">How to Edit and Sign PDF Online for Free</a></li>
        </ul>
      `
    },
    'create-digital-signature-online-free': {
      title: 'How to Create a Digital Signature Online for Free in 2026',
      date: 'June 25, 2026',
      lastModified: 'July 18, 2026',
      author: 'MyDigitSign Team',
      keywords: ['create a digital signature certificate', 'e signature pdf online', 'sign document for free', 'create digital signature online free', 'free electronic signature pdf', 'sign pdf online free'],
      content: `
        <p>In today's fast-paced digital world, printing, signing, and scanning documents is a thing of the past. If you're wondering <strong>how to create a digital signature online for free</strong>, you've come to the right place. Whether you're closing a freelance deal, signing a lease, or approving an NDA, you can handle all of it inside your browser — no software installation, no subscription fees, and absolutely no uploading your sensitive files to a third-party server.</p>

        <h2>What is a Digital Signature, Exactly?</h2>
        <p>A digital signature is an electronic form of your handwritten signature. When you sign a document digitally, you're attaching a unique identifier that confirms you agreed to its contents. Depending on the method, this can range from a simple drawn signature image (visual e-signature) to a cryptographically-secure certificate-based signature that proves the document hasn't been altered.</p>
        <p>For most personal and business use cases — freelance contracts, employment agreements, lease documents, and consent forms — a visual e-signature created with a free tool like <a href="/">MyDigitSign</a> is completely valid and legally binding under the ESIGN Act (USA) and eIDAS (EU).</p>

        <h2>Why Use an Online Digital Signature?</h2>
        <p>Electronic signatures save time, money, and paper. Here's why millions of people are switching from print-and-scan workflows:</p>
        <ul>
          <li><strong>Speed:</strong> Sign a document in under 60 seconds, from anywhere in the world, on any device.</li>
          <li><strong>Cost:</strong> Free tools like MyDigitSign eliminate the subscription fees charged by DocuSign, Adobe Sign, or HelloSign — which can cost $10–$60/month.</li>
          <li><strong>Security:</strong> Client-side tools process your signature in the browser — your files never touch a server, so there's zero risk of a data breach.</li>
          <li><strong>Convenience:</strong> Works on any device — desktop, tablet, or phone — without installing any app.</li>
          <li><strong>Legality:</strong> Legally recognized in over 180 countries for most commercial and personal agreements.</li>
        </ul>

        <h2>3 Ways to Create Your Free Digital Signature</h2>
        <p>MyDigitSign offers three natural methods to <strong>create a digital signature online free</strong>, depending on your preference and equipment:</p>

        <h3>Method 1: Draw Your Signature (Most Natural)</h3>
        <p>Use your mouse, trackpad, or finger on a touchscreen to draw your actual handwritten signature on a digital canvas. This feels the most natural and produces a unique, personal result. You can choose from black, blue, or red pen colors, and clear the canvas if you want to try again.</p>
        <p>→ <a href="/tools/draw-signature-online">Try the Free Draw Signature Tool</a></p>

        <h3>Method 2: Type Your Name in Cursive (Quick & Consistent)</h3>
        <p>Don't like drawing with a mouse? Type your name and our tool renders it in a beautiful cursive font that looks exactly like a handwritten signature. This is perfect for professional documents where you need a clean, consistent signature every single time — no variation, no shaky lines.</p>
        <p>→ <a href="/tools/type-signature-online">Try the Free Type Signature Tool</a></p>

        <h3>Method 3: Upload a Photo of Your Signature (Use Your Real Handwriting)</h3>
        <p>Already have a physical signature you love? Sign a piece of white paper with a dark pen, photograph or scan it, and upload the PNG or JPG to MyDigitSign. We'll use it as an overlay on your documents, preserving the exact character of your real handwriting.</p>
        <p>→ <a href="/tools/sign-image-online">Try the Sign Image Tool</a></p>

        <h2>Step-by-Step: How to Create and Apply Your Signature</h2>
        <ol>
          <li><strong>Open MyDigitSign:</strong> Go to <a href="/">mydigitsign.com</a> in your browser. No account needed, no signup wall.</li>
          <li><strong>Create your signature:</strong> Choose one of the three methods above — draw, type, or upload.</li>
          <li><strong>Upload your document:</strong> Drag and drop your PDF, PNG, or JPG file into the document panel. Your file is read locally — nothing is ever sent to any server.</li>
          <li><strong>Place the signature:</strong> Drag your signature overlay to the correct signing line on the document. Use the drag handle to resize it naturally.</li>
          <li><strong>Download the signed file:</strong> Click "Download" to instantly save the signed document to your device. Done — in under 2 minutes.</li>
        </ol>

        <h2>Is a Free Online Digital Signature Legally Valid?</h2>
        <p>Yes, for the vast majority of business transactions. Under the <strong>ESIGN Act</strong> of 2000 in the United States and <strong>eIDAS</strong> in the European Union, electronic signatures carry the same legal weight as pen-and-ink signatures for most agreements — contracts, NDAs, lease agreements, freelance invoices, and consent forms.</p>
        <p>What makes an electronic signature legally valid?</p>
        <ul>
          <li><strong>Intent to sign:</strong> The signer demonstrated clear intent — by drawing, typing, or uploading their signature.</li>
          <li><strong>Consent to do business electronically:</strong> Both parties agreed to transact digitally.</li>
          <li><strong>Association with the record:</strong> The signature is tied to the specific document.</li>
        </ul>
        <p>For a full breakdown: <a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding? →</a></p>

        <h2>When Do You Need a Certificate-Based Digital Signature?</h2>
        <p>For most everyday documents, a visual e-signature is sufficient. But for highly sensitive legal documents, government contracts, or situations requiring cryptographic proof of identity, you'll need a certificate-based digital signature (a <code>.pfx</code> or <code>.p12</code> file).</p>
        <p>MyDigitSign supports certificate-based signing too — all inside your browser. Learn how to get one for free: <a href="/blog/free-digital-signature-certificate">How to Get a Free Digital Signature Certificate →</a></p>

        <h2>Can I Create a Digital Signature on My Phone?</h2>
        <p>Yes, absolutely. MyDigitSign works perfectly on mobile browsers. Open <a href="/">mydigitsign.com</a> on your iPhone, iPad, or Android phone and draw your signature using your finger on the touchscreen. The entire interface is optimized for mobile, so placing your signature on a document and downloading it is just as smooth as on a desktop.</p>
        <p>Full mobile guide: <a href="/blog/how-to-sign-pdf-on-iphone-android-free">How to Sign a PDF on iPhone & Android for Free →</a></p>

        <h2>Privacy and Security: Is It Safe?</h2>
        <p>With MyDigitSign, your privacy is fully protected. Our tool is 100% client-side — meaning all processing happens inside your web browser memory. Your documents are never uploaded to our servers or any third-party service. When you close the browser tab, the data is cleared. There are no server logs, no storage, and no data retention of any kind.</p>
        <p>This makes MyDigitSign one of the most private options available — compare this to DocuSign, SmallPDF, or ILovePDF, all of which upload your documents to their cloud servers. For sensitive contracts, NDAs, or financial documents, the difference matters significantly.</p>

        <h2>Frequently Asked Questions</h2>
        <h3>Does it cost anything to create a digital signature with MyDigitSign?</h3>
        <p>Not a single cent. MyDigitSign is completely free — no signup, no paywall, no subscription, no credit card required.</p>

        <h3>Can I save my signature for later use?</h3>
        <p>Currently, signatures are session-based for maximum privacy. Each time you visit, you'll create or upload a new signature. This also ensures no signature data is stored on any server.</p>

        <h3>What's the difference between an e-signature and a digital signature certificate?</h3>
        <p>An e-signature is a visual representation of your signature placed on a document. A digital signature certificate is a cryptographic key that mathematically proves the document hasn't been altered. Both are legally valid for most purposes, but certificates provide a stronger technical guarantee of document integrity.</p>

        <h3>Can I use a digital signature for legal contracts?</h3>
        <p>Yes. Electronic signatures are legally binding for most contracts in the US, EU, UK, Canada, Australia, and 180+ other countries. Exceptions include wills, court orders, and certain government documents that still require wet-ink signatures.</p>

        <hr />
        <h2>Related Articles</h2>
        <ul>
          <li><a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding & Acceptable?</a></li>
          <li><a href="/blog/free-digital-signature-certificate">How to Get a Free Digital Signature Certificate in 2026</a></li>
          <li><a href="/blog/how-to-sign-a-document-online-free-pdf-editor">How to Edit and Sign PDF Online for Free</a></li>
          <li><a href="/blog/ultimate-guide-signing-pdf-securely">The Ultimate Guide to Signing PDFs Securely</a></li>
          <li><a href="/blog/how-to-sign-pdf-on-iphone-android-free">How to Sign a PDF on iPhone & Android for Free</a></li>
        </ul>
      `
    },
    'are-electronic-signatures-legally-binding': {
      title: 'Are Electronic Signatures Legally Binding & Acceptable in 2026?',
      date: 'June 20, 2026',
      lastModified: 'July 18, 2026',
      author: 'MyDigitSign Legal',
      keywords: ['electronic signature legal', 'are electronic signatures acceptable', 'electronic signatures legally binding', 'e signature pdf online', 'sign document for free', 'sign a document online'],
      content: `
        <p>One of the most common questions users ask when moving to online contracts is: <strong>are electronic signatures acceptable</strong> for official agreements, and is an <strong>electronic signature legal</strong>? The short answer is yes — in most countries and for most types of documents, electronic signatures carry the same legal weight as handwritten signatures. But the full picture is worth understanding.</p>

        <h2>The Legal Foundation: ESIGN Act and UETA (USA)</h2>
        <p>In the United States, two landmark laws establish the legality of electronic signatures:</p>
        <ul>
          <li><strong>ESIGN Act (2000):</strong> The Electronic Signatures in Global and National Commerce Act establishes that electronic records and signatures carry the same weight and legal effect as traditional paper documents and handwritten signatures for most commercial transactions.</li>
          <li><strong>UETA (Uniform Electronic Transactions Act):</strong> Adopted by 47 US states, UETA provides the legal framework for electronic transactions at the state level, covering contracts, agreements, and records.</li>
        </ul>
        <p>Together, these laws mean that if you <a href="/">sign a document online</a> using a tool like MyDigitSign, the resulting signature is fully legally enforceable in US courts for most business, financial, and personal agreements.</p>

        <h2>Are Electronic Signatures Acceptable Worldwide?</h2>
        <p>Yes. Across the globe, governments have established frameworks to validate digital contracts:</p>
        <ul>
          <li><strong>EU — eIDAS Regulation:</strong> The Electronic IDentification, Authentication and trust Services regulation governs e-signatures across all 27 EU member states. It classifies signatures into Standard, Advanced, and Qualified Electronic Signatures (QES). Standard e-signatures created with tools like MyDigitSign are valid for most business agreements.</li>
          <li><strong>UK — Electronic Communications Act 2000:</strong> Post-Brexit, the UK maintains its own e-signature legislation, recognizing electronic signatures as legally valid.</li>
          <li><strong>Canada — PIPEDA:</strong> Canada's Personal Information Protection and Electronic Documents Act recognizes electronic signatures for most commercial transactions.</li>
          <li><strong>Australia — Electronic Transactions Act 1999:</strong> Australia broadly accepts e-signatures for commercial contracts.</li>
          <li><strong>India — IT Act 2000:</strong> India recognizes electronic signatures, including Aadhaar-based signatures.</li>
        </ul>
        <p>In total, over 180 countries have laws recognizing electronic signatures as legally binding for most transactions.</p>

        <h2>What Makes an E-Signature Valid in Court?</h2>
        <p>For an electronic signature to hold up in court, three core elements must be present:</p>
        <ul>
          <li><strong>Intent to sign:</strong> The signer must demonstrate clear intent to sign the agreement (e.g., clicking "Accept," drawing their signature, or typing their name).</li>
          <li><strong>Consent to do business electronically:</strong> All parties must agree to conduct the transaction electronically.</li>
          <li><strong>Association of signature with the record:</strong> The system used must keep an associated record showing that the signature was placed on the specific document.</li>
        </ul>
        <p>Using a secure, 100% browser-based tool like MyDigitSign to <a href="/tools/draw-signature-online">draw signature online</a> or <a href="/tools/type-signature-online">type signature online</a> ensures that your private files never touch a server, while keeping your <a href="/">electronic signature legal</a> and compliant with international standards.</p>

        <h2>3 Levels of Electronic Signatures Under eIDAS</h2>
        <p>The EU's eIDAS regulation defines three levels of electronic signatures, each with different legal weight:</p>
        <ol>
          <li><strong>Standard Electronic Signature (SES):</strong> A basic e-signature such as a drawn or typed signature. Valid for most everyday business contracts, lease agreements, NDAs, and freelance agreements. This is what MyDigitSign creates.</li>
          <li><strong>Advanced Electronic Signature (AES):</strong> Must be uniquely linked to the signer, capable of identifying them, and any subsequent change to the signed data must be detectable. Typically requires a certificate.</li>
          <li><strong>Qualified Electronic Signature (QES):</strong> The highest level. Created with a Qualified Electronic Signature Creation Device (QSCD) and must have a Qualified Certificate. Legally equivalent to a handwritten signature in all EU member states. Required for certain government and legal proceedings.</li>
        </ol>
        <p>For 95% of business transactions, a Standard Electronic Signature is fully sufficient and legally binding.</p>

        <h2>When is a Paper Signature Still Required?</h2>
        <p>While an <strong>electronic signature is legal</strong> for nearly all business, financial, and personal transactions, certain special documents still require physical wet-ink signatures or notarization:</p>
        <ul>
          <li>Wills, trusts, and codicils (in most jurisdictions)</li>
          <li>Adoption and custody agreements</li>
          <li>Real estate deeds (in some US states)</li>
          <li>Court orders and judicial documents</li>
          <li>Certain government-issued documents</li>
        </ul>
        <p>When in doubt about a specific document type, consult a qualified attorney in your jurisdiction.</p>

        <h2>Electronic Signatures for Common Use Cases</h2>
        <table style="width:100%; border-collapse: collapse; margin: 16px 0;">
          <thead>
            <tr style="background: rgba(0,0,0,0.05);">
              <th style="padding: 10px; text-align: left; border: 1px solid rgba(0,0,0,0.1);">Document Type</th>
              <th style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">E-Signature Valid?</th>
              <th style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">Level Needed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">Freelance contracts</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ Yes</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">Standard</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">Lease agreements</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ Yes</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">Standard</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">Employment NDAs</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ Yes</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">Standard</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">Sales agreements</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ Yes</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">Standard</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">Government contracts (EU)</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">⚠️ Depends</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">Advanced/QES</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">Wills and trusts</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ Mostly No</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">Wet ink required</td>
            </tr>
          </tbody>
        </table>

        <h2>Frequently Asked Questions</h2>
        <h3>Do e-signatures hold up in court?</h3>
        <p>Yes. Under the ESIGN Act, UETA, and eIDAS, electronic signatures are admissible as evidence in courts of law. Thousands of contract disputes have been resolved with e-signed documents as the primary evidence.</p>

        <h3>Is a typed name considered a legal signature?</h3>
        <p>Yes. A typed name, particularly when associated with a documented intent-to-sign action (like clicking a button or completing a form), is considered a valid electronic signature in most jurisdictions.</p>

        <h3>What if the other party disputes the e-signature?</h3>
        <p>Maintain evidence: email confirmations, timestamps, IP addresses, and audit trails. Tools like MyDigitSign process everything locally, so for additional audit trail security, send the signed document via dated email immediately after signing.</p>

        <hr />
        <h2>Related Articles</h2>
        <ul>
          <li><a href="/blog/create-digital-signature-online-free">How to Create a Digital Signature Online for Free</a></li>
          <li><a href="/blog/free-digital-signature-certificate">How to Get a Free Digital Signature Certificate in 2026</a></li>
          <li><a href="/blog/ultimate-guide-signing-pdf-securely">The Ultimate Guide to Signing PDFs Securely</a></li>
          <li><a href="/blog/how-to-sign-a-document-online-free-pdf-editor">How to Edit and Sign PDF Online for Free</a></li>
        </ul>
      `
    },
    'ultimate-guide-signing-pdf-securely': {
      title: 'The Ultimate Guide to Signing PDFs Securely in 2026',
      date: 'June 15, 2026',
      lastModified: 'July 18, 2026',
      author: 'MyDigitSign Security',
      keywords: ['sign a document online', 'e signature pdf online', 'pdf editor signature', 'edit and sign pdf', 'sign on document online', 'sign document for free'],
      content: `
        <p>PDFs are the standard format for document sharing across businesses, legal teams, and personal use. But when it comes to signing them, most people either use overly complex paid tools or risky free services that upload your files to unknown servers. This guide covers everything you need to know about signing PDFs securely, privately, and for free in 2026.</p>

        <h2>The #1 Risk Most People Don't Think About</h2>
        <p>Here's something most people don't consider: when you upload a PDF to a "free" online signing tool, that document travels over the internet to their servers. The service processes it, generates the signed version, and sends it back. Your sensitive file — whether it's a tax form, NDA, lease agreement, or medical document — now sits on a stranger's server.</p>
        <p>This creates real risks:</p>
        <ul>
          <li><strong>Data breaches:</strong> If the provider's servers are compromised, your confidential documents are exposed.</li>
          <li><strong>Data retention:</strong> Many "free" services store uploaded files for days, weeks, or even longer. Some use document data to train AI models.</li>
          <li><strong>GDPR & HIPAA:</strong> For EU residents or US healthcare documents, uploading to third-party servers may violate compliance requirements and create legal liability.</li>
          <li><strong>Targeted advertising:</strong> Some providers analyze document content to serve targeted ads.</li>
        </ul>
        <p>The solution is simpler than you think.</p>

        <h2>Client-Side Signing: The Only Truly Private Option</h2>
        <p>Client-side signing means your PDF never leaves your device. All processing — rendering, signature placement, and download — happens entirely inside your web browser using JavaScript. The document only exists in your browser's memory.</p>
        <p><strong>MyDigitSign</strong> is built 100% on this principle. Here's how it works technically:</p>
        <ul>
          <li><code>pdfjs-dist</code> reads the PDF binary and renders pages onto HTML canvas elements locally</li>
          <li>Your signature is drawn or generated as a canvas element</li>
          <li><code>pdf-lib</code> embeds the signature pixels into the actual PDF pages at the correct coordinates — entirely in browser memory</li>
          <li>The resulting signed PDF is written directly to your device's storage via the browser's download API</li>
        </ul>
        <p>Zero network requests for your document. Zero server logs. Zero data retention.</p>

        <h2>3 Types of PDF Signatures: Which One Do You Need?</h2>

        <h3>Type 1: Visual E-Signature (Most Common, Free)</h3>
        <p>This is an image of your signature placed on top of the PDF. It looks exactly like a handwritten signature and is legally valid under ESIGN and eIDAS for most business agreements. You can <a href="/tools/draw-signature-online">draw your signature online</a> or <a href="/tools/type-signature-online">type it in cursive</a> using MyDigitSign.</p>
        <p><strong>Best for:</strong> Freelance contracts, lease agreements, consent forms, business agreements, NDAs.</p>
        <p><strong>Legal validity:</strong> High — enforceable in 180+ countries for most commercial transactions.</p>

        <h3>Type 2: Certificate-Based Digital Signature</h3>
        <p>This uses a cryptographic key pair (a <code>.pfx</code> or <code>.p12</code> certificate file) to mathematically seal the document. Anyone opening the signed PDF can verify it hasn't been tampered with since signing. Adobe Acrobat shows a checkmark for trusted certificates.</p>
        <p><strong>Best for:</strong> Contracts requiring tamper evidence, government documents, financial transactions.</p>
        <p><strong>Learn more:</strong> <a href="/blog/free-digital-signature-certificate">How to Get a Free Digital Signature Certificate →</a></p>

        <h3>Type 3: Qualified Electronic Signature (QES)</h3>
        <p>The highest level of e-signature under eIDAS. Requires in-person identity verification with a trusted Certificate Authority. Required for specific government-level documents in the EU.</p>
        <p><strong>Best for:</strong> EU government contracts, advanced legal proceedings, real estate transactions in certain jurisdictions.</p>

        <h2>Choosing the Right PDF Signing Tool: A Security Comparison</h2>
        <table style="width:100%; border-collapse: collapse; margin: 16px 0;">
          <thead>
            <tr style="background: rgba(0,0,0,0.05);">
              <th style="padding: 10px; text-align: left; border: 1px solid rgba(0,0,0,0.1);">Tool</th>
              <th style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">Client-Side?</th>
              <th style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">Free?</th>
              <th style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">No Account?</th>
              <th style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">Server Storage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);"><strong>MyDigitSign</strong></td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ Yes</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ Always</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ Yes</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ None</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">DocuSign</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ No</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ Paid</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ Required</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ Cloud stored</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">SmallPDF</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ No</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">⚠️ Limited</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">⚠️ Optional</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">⚠️ 1 hour</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">Adobe Sign</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ No</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ Paid</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ Required</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ Cloud stored</td>
            </tr>
          </tbody>
        </table>

        <h2>5 Best Practices for Signing PDFs Securely</h2>

        <h3>1. Always Use a Client-Side Tool for Sensitive Documents</h3>
        <p>If your document contains personal identification, financial data, health information, or confidential business information — never upload it to a server you don't control. Use a browser-based, client-side tool like MyDigitSign.</p>

        <h3>2. Verify the Other Party's Identity</h3>
        <p>A legally valid e-signature also requires proof of who signed it. Keep records: email confirmation threads, video call recordings, or at minimum timestamps and IP address logs. For high-value contracts, use a witness or notary.</p>

        <h3>3. Always Use HTTPS</h3>
        <p>Only use signing tools hosted on HTTPS (the padlock icon in your browser's address bar). HTTP connections are vulnerable to man-in-the-middle attacks where a third party can intercept and modify data in transit.</p>

        <h3>4. Store Signed Copies Securely</h3>
        <p>Once you've signed a PDF, save a backup in a secure location — an encrypted cloud folder, a password-protected drive, or a secure document management system. Never overwrite the original signed file.</p>

        <h3>5. Send Via Secure Channel Immediately</h3>
        <p>After signing, send the document via encrypted email or a secure file transfer service. This creates a timestamp and delivery record that can be used as evidence if the signature is ever disputed.</p>

        <h2>How to Sign a PDF Securely with MyDigitSign (Complete Guide)</h2>
        <ol>
          <li>Open <a href="/">mydigitsign.com</a> in a modern browser (Chrome, Firefox, Safari, Edge).</li>
          <li>Create your signature using one of three methods: <a href="/tools/draw-signature-online">draw</a>, <a href="/tools/type-signature-online">type</a>, or upload.</li>
          <li>Upload your PDF or image file using the document panel. The file is read by your browser — not uploaded to any server.</li>
          <li>Drag your signature overlay to the correct field. Use the resize handle to scale it appropriately.</li>
          <li>Click Download to save the signed PDF directly to your device.</li>
          <li>Send the signed document via secure email with a date and time stamp for your records.</li>
        </ol>

        <h2>Mobile PDF Signing: Is It Secure?</h2>
        <p>Signing PDFs on your phone can be just as secure as on a desktop, as long as you use a client-side tool. MyDigitSign's interface is fully responsive — open it in your iPhone or Android browser, draw your signature with your finger, and sign the document privately.</p>
        <p>Full mobile guide: <a href="/blog/how-to-sign-pdf-on-iphone-android-free">How to Sign a PDF on iPhone & Android for Free →</a></p>

        <h2>Frequently Asked Questions</h2>
        <h3>What's the most secure way to sign a PDF online?</h3>
        <p>The most secure method is client-side signing — where the PDF never leaves your device. MyDigitSign processes everything in your browser using pdfjs-dist and pdf-lib libraries, ensuring zero server contact.</p>

        <h3>Can I sign a PDF without downloading any software?</h3>
        <p>Yes. MyDigitSign works entirely in your browser — no downloads, no plugins, no app installations required. Just open the website and start signing immediately.</p>

        <hr />
        <h2>Related Articles</h2>
        <ul>
          <li><a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding & Acceptable?</a></li>
          <li><a href="/blog/free-digital-signature-certificate">How to Get a Free Digital Signature Certificate in 2026</a></li>
          <li><a href="/blog/create-digital-signature-online-free">How to Create a Digital Signature Online for Free</a></li>
          <li><a href="/blog/how-to-sign-a-document-online-free-pdf-editor">How to Edit and Sign PDF Online for Free</a></li>
          <li><a href="/blog/how-to-sign-pdf-on-iphone-android-free">How to Sign a PDF on iPhone & Android for Free</a></li>
        </ul>
      `
    },
    'how-to-sign-pdf-on-iphone-android-free': {
      title: 'How to Sign a PDF on iPhone, iPad & Android for Free (2026)',
      date: 'July 10, 2026',
      lastModified: 'July 18, 2026',
      author: 'MyDigitSign Editorial',
      keywords: ['e signature pdf online', 'sign document for free', 'sign a document online', 'pdf editor signature', 'sign on document online', 'edit and sign pdf'],
      content: `
        <p>If you're out of the office and need to sign an urgent contract, agreement, or lease, you don't need a computer. You can easily complete an <strong>e signature pdf online</strong> or in-browser using your mobile device. In this guide, we show you exactly how to <strong>sign document for free</strong> on any iOS or Android phone or tablet — in under 2 minutes.</p>

        <h2>Method 1: iOS Built-in Markup Tool (iPhone & iPad)</h2>
        <p>If you have an iPhone or iPad, Apple's built-in Markup feature lets you add a handwritten signature to PDFs stored in your Files app or received via Mail. No third-party app needed:</p>
        <ol>
          <li>Open the PDF in the <strong>Files</strong> app or in <strong>Mail</strong>.</li>
          <li>Tap the <strong>Markup</strong> icon (the pen-in-circle icon) in the top-right corner.</li>
          <li>Tap the <strong>+</strong> button in the bottom toolbar and select <strong>Add Signature</strong>.</li>
          <li>Draw your signature with your finger or Apple Pencil on the signature canvas.</li>
          <li>Tap <strong>Done</strong>, then drag and resize the signature to position it on the signing line.</li>
          <li>Tap <strong>Done</strong> again to save the signed document.</li>
        </ol>
        <p><strong>Limitation:</strong> Markup is only available for files within the Files or Mail app. If your PDF arrives via a different channel, or if you're on Android, use Method 2 below.</p>

        <h2>Method 2: MyDigitSign — Works on All Mobile Browsers (iOS & Android)</h2>
        <p>For the most flexible and private mobile signing experience, MyDigitSign works in any modern mobile browser — Safari, Chrome, Firefox, Edge — on both iPhone and Android. Your document never leaves your device:</p>
        <ol>
          <li><strong>Open your mobile browser</strong> and navigate to <a href="/">mydigitsign.com</a>. No app download required.</li>
          <li>
            <strong>Create your signature:</strong>
            <ul>
              <li><strong>Draw tab:</strong> Use your finger to draw your signature directly on the touchscreen canvas — smooth, natural, and responsive. <a href="/tools/draw-signature-online">Try it here →</a></li>
              <li><strong>Type tab:</strong> Type your name and choose a cursive font — fastest option when in a hurry. <a href="/tools/type-signature-online">Try it here →</a></li>
              <li><strong>Upload tab:</strong> Upload a photo of your handwritten signature from your phone's camera roll.</li>
            </ul>
          </li>
          <li><strong>Upload your document:</strong> Tap the file upload area and select your PDF or image from your device storage, cloud drive (iCloud, Google Drive), or Downloads folder.</li>
          <li><strong>Position the signature:</strong> Drag the signature overlay to the correct signing line. Pinch to zoom if needed for precise placement on a small screen.</li>
          <li><strong>Download the signed file:</strong> Tap Download. The signed PDF saves directly to your device's Downloads folder or Files app. On iOS, you can also use the Share button to send it directly to Mail or WhatsApp.</li>
        </ol>

        <h2>Method 3: Adobe Acrobat Reader (Free App, Both Platforms)</h2>
        <p>Adobe Acrobat Reader is available for free on both iPhone and Android and supports basic PDF signing:</p>
        <ol>
          <li>Download Adobe Acrobat Reader from the App Store (iOS) or Google Play Store (Android).</li>
          <li>Open your PDF in the app.</li>
          <li>Tap the pencil/edit icon and select <strong>Fill & Sign</strong>.</li>
          <li>Tap the signature field or tap anywhere to add a signature overlay.</li>
          <li>Draw your signature in the canvas provided, then place it on the document.</li>
          <li>Save and share the signed PDF.</li>
        </ol>
        <p><strong>Note:</strong> The free Adobe Reader app requires account signup and uploads your document to Adobe's cloud servers for processing. For sensitive documents, the browser-based MyDigitSign option (Method 2) is more private.</p>

        <h2>Comparing Mobile PDF Signing Methods</h2>
        <table style="width:100%; border-collapse: collapse; margin: 16px 0;">
          <thead>
            <tr style="background: rgba(0,0,0,0.05);">
              <th style="padding: 10px; text-align: left; border: 1px solid rgba(0,0,0,0.1);">Method</th>
              <th style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">iOS</th>
              <th style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">Android</th>
              <th style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">App Download?</th>
              <th style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">Private?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">iOS Markup</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ Built-in</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ On-device</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);"><strong>MyDigitSign (Browser)</strong></td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ Just browser</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ 100% local</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid rgba(0,0,0,0.1);">Adobe Acrobat Reader</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">✅ Required</td>
              <td style="padding: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.1);">❌ Cloud upload</td>
            </tr>
          </tbody>
        </table>

        <h2>Tips for Signing PDFs on Small Screens</h2>
        <ul>
          <li><strong>Zoom in before signing:</strong> Pinch to zoom into the signature field area so you can place the signature precisely.</li>
          <li><strong>Use landscape mode:</strong> Rotating your phone to landscape orientation gives you more horizontal space for drawing your signature.</li>
          <li><strong>Use a stylus if available:</strong> A capacitive stylus gives you more control than a fingertip, especially for drawing signatures.</li>
          <li><strong>Use the Type tab if drawing is hard:</strong> On a small phone screen, typing your name and selecting a cursive font is often faster and more consistent than drawing freehand.</li>
        </ul>

        <h2>Is Signing a PDF on Your Phone Legally Valid?</h2>
        <p>Yes, absolutely. There's no legal distinction between signing a document on a phone versus a computer. What matters legally is the intent to sign and the association of the signature with the document — not the device used. Under the ESIGN Act (US) and eIDAS (EU), a signature created on a mobile browser is just as legally binding as one created on a desktop.</p>
        <p>Learn more: <a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding? →</a></p>

        <h2>Frequently Asked Questions</h2>
        <h3>Can I sign a PDF on Android without installing an app?</h3>
        <p>Yes. Open MyDigitSign in Chrome or any Android browser. No app installation required — the entire signing process runs in your mobile browser. Sign and download in under 2 minutes.</p>

        <h3>Does MyDigitSign work on Samsung Galaxy phones?</h3>
        <p>Yes. MyDigitSign works on all modern Android devices, including Samsung Galaxy phones. Open the site in Samsung Internet Browser or Chrome and sign documents with your finger.</p>

        <h3>Can I save the signed PDF to Google Drive or iCloud after signing?</h3>
        <p>Yes. After downloading the signed PDF to your device, use your phone's Files app to move it to Google Drive (Android/iOS) or iCloud Drive (iOS) for secure cloud backup.</p>

        <h3>Is my signature data stored anywhere after signing on my phone?</h3>
        <p>No. MyDigitSign processes everything in your mobile browser's memory. Your signature and document data are cleared the moment you close the browser tab. Nothing is stored on any server.</p>

        <hr />
        <h2>Related Articles</h2>
        <ul>
          <li><a href="/blog/create-digital-signature-online-free">How to Create a Digital Signature Online for Free</a></li>
          <li><a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding & Acceptable?</a></li>
          <li><a href="/blog/how-to-sign-a-document-online-free-pdf-editor">How to Edit and Sign PDF Online for Free</a></li>
          <li><a href="/blog/ultimate-guide-signing-pdf-securely">The Ultimate Guide to Signing PDFs Securely</a></li>
        </ul>
      `
    },
    'how-to-sign-nda-online-free': {
      title: 'How to Sign an NDA Online Free — No Account, No Uploads (2026)',
      date: 'July 21, 2026',
      lastModified: 'July 21, 2026',
      author: 'MyDigitSign Editorial',
      keywords: ['sign nda online free', 'sign document for free', 'e signature pdf online', 'sign a document online', 'electronic signature legal', 'edit and sign pdf'],
      content: `
        <p>Got an NDA sitting in your inbox and need to sign it right now? You don't need to print it, scan it, or pay for DocuSign. You can <strong>sign an NDA online free</strong> in under two minutes — and do it safely, without uploading your document to any third-party server.</p>

        <p>This guide walks you through the entire process step by step, explains what makes an e-signature on an NDA legally binding, and answers the most common questions people have before signing a non-disclosure agreement electronically.</p>

        <h2>Is It Legal to Sign an NDA Electronically?</h2>
        <p>Yes — this is the first thing people ask, and the answer is a clear yes. Electronic signatures are fully legal for NDAs in the United States, EU, UK, Canada, Australia, and over 180 other countries.</p>
        <p>Here's the legal foundation:</p>
        <ul>
          <li><strong>ESIGN Act (USA, 2000):</strong> Federal law explicitly states that an electronic signature has the same legal weight as a handwritten signature for most contracts and agreements, including non-disclosure agreements.</li>
          <li><strong>UETA:</strong> The Uniform Electronic Transactions Act, adopted in 47 US states, reinforces this at the state level.</li>
          <li><strong>eIDAS (EU):</strong> European regulation recognizes standard electronic signatures for the vast majority of business contracts, including NDAs.</li>
        </ul>
        <p>The key requirements are simple: both parties must intend to sign, and the signature must be associated with the document. A drawn or typed signature placed on an NDA PDF using a tool like <a href="/tools/sign-pdf-online">MyDigitSign</a> satisfies both requirements completely.</p>
        <p>For a full breakdown of e-signature legality: <a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding? →</a></p>

        <h2>What You Need Before You Start</h2>
        <p>Good news — you don't need much:</p>
        <ul>
          <li>The NDA as a <strong>PDF file</strong> (most NDAs come as PDF attachments in email)</li>
          <li>A modern web browser (Chrome, Firefox, Safari, or Edge)</li>
          <li>That's it — no account, no software, no credit card</li>
        </ul>
        <p>If your NDA was sent as a Word document (<code>.docx</code>), export it as PDF first using the built-in "Save as PDF" option in Word, Google Docs, or LibreOffice.</p>

        <h2>How to Sign an NDA Online Free — Step by Step</h2>
        <p>Here's the fastest way to sign your NDA without uploading anything to a third-party server:</p>
        <ol>
          <li>
            <strong>Open MyDigitSign in your browser:</strong> Go to <a href="/tools/sign-pdf-online">mydigitsign.com/tools/sign-pdf-online</a>. No account or registration required — the tool opens instantly.
          </li>
          <li>
            <strong>Create your signature:</strong> You have three options:
            <ul>
              <li><strong>Draw it</strong> — use your mouse, trackpad, or finger to sketch your signature on the canvas. <a href="/tools/draw-signature-online">Try the draw signature tool →</a></li>
              <li><strong>Type it</strong> — type your name and pick from professional cursive fonts. <a href="/tools/type-signature-online">Try the type signature tool →</a></li>
              <li><strong>Upload it</strong> — have a scanned signature image? Upload it directly. <a href="/tools/sign-image-online">Try the sign image tool →</a></li>
            </ul>
          </li>
          <li>
            <strong>Click Adopt:</strong> Once you're happy with your signature, click Adopt. This locks it in and moves you to the document upload step.
          </li>
          <li>
            <strong>Upload your NDA PDF:</strong> Click the upload area or drag and drop your NDA file into it. The file loads locally inside your browser — nothing is sent to any server.
          </li>
          <li>
            <strong>Navigate to the signature page:</strong> Use the page navigation to find the signature block in your NDA. Most NDAs have signature fields on the last page.
          </li>
          <li>
            <strong>Drag your signature to the correct line:</strong> Your signature appears as a draggable overlay. Position it directly on the signature field. Use the resize handle in the corner to scale it up or down until it fits naturally.
          </li>
          <li>
            <strong>Download the signed NDA:</strong> Click Download. Your signed NDA saves instantly as a PDF to your device. No email required, no watermarks, and no waiting.
          </li>
        </ol>
        <p>Total time: under 2 minutes.</p>

        <h2>What Is an NDA and Why Does It Need a Signature?</h2>
        <p>A Non-Disclosure Agreement (NDA) — also called a confidentiality agreement — is a legally binding contract between two or more parties. It establishes that certain information shared between them will remain confidential and cannot be disclosed to outside parties.</p>
        <p>NDAs are extremely common in:</p>
        <ul>
          <li><strong>Freelance work:</strong> Clients ask freelancers to sign NDAs before sharing proprietary business information, product plans, or customer data.</li>
          <li><strong>Employment:</strong> Employers routinely require NDAs as part of onboarding, especially for roles involving trade secrets or sensitive data.</li>
          <li><strong>Business partnerships:</strong> Before sharing financials, technology, or strategic plans with a potential partner or investor, NDAs protect all parties.</li>
          <li><strong>Product development:</strong> Developers, designers, and contractors often sign NDAs before seeing unreleased product specifications.</li>
        </ul>
        <p>The signature on an NDA is what makes it legally enforceable. Without a valid signature from both parties, the agreement is effectively unenforceable in court.</p>

        <h2>One-Way vs Mutual NDAs — Does It Change How You Sign?</h2>
        <p>NDAs come in two main types, but the signing process is identical for both:</p>
        <ul>
          <li><strong>One-way (unilateral) NDA:</strong> Only one party is disclosing confidential information — only that party's counterpart needs to sign. Common in employment situations.</li>
          <li><strong>Mutual (bilateral) NDA:</strong> Both parties share confidential information and both must sign. Common in business partnerships and joint ventures.</li>
        </ul>
        <p>In either case, <a href="/tools/sign-pdf-online">signing the NDA PDF online</a> works exactly the same way. If a mutual NDA requires two signatures from two separate people, each person signs their own copy using MyDigitSign and sends the PDF back to the other party.</p>

        <h2>Is My NDA Secure If I Sign It Online?</h2>
        <p>This is the most important question — and the answer depends entirely on which tool you use.</p>
        <p>Most "free" online signing tools work by <strong>uploading your document to their servers</strong>. Your NDA — which likely contains confidential business information, personal details, or trade secrets — travels over the internet to a third-party cloud server. That company stores it, processes it, and eventually sends it back. This creates real privacy and security risks.</p>
        <p>MyDigitSign works completely differently. Your NDA file is <strong>never uploaded anywhere</strong>. The entire process happens inside your browser:</p>
        <ul>
          <li>The PDF is read from your device into browser memory</li>
          <li>Your signature is placed on the document inside the browser</li>
          <li>The signed PDF is written directly to your downloads folder</li>
          <li>No data ever leaves your device</li>
        </ul>
        <p>This makes it the most private option available for signing sensitive agreements like NDAs.</p>

        <h2>Should You Keep a Copy of the Signed NDA?</h2>
        <p>Always. Here's what to do after signing:</p>
        <ul>
          <li><strong>Save the signed PDF</strong> to a secure folder — your hard drive, encrypted cloud storage, or a legal document management system.</li>
          <li><strong>Email the signed copy</strong> to the other party and ask them to confirm receipt. This creates a timestamp and evidence of delivery.</li>
          <li><strong>Request the countersigned copy</strong> once the other party has added their signature. Keep this final version — it's the enforceable document.</li>
          <li><strong>Note the date</strong> — NDA duration matters. Many NDAs expire after 1–5 years. Know your timeline.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <h3>Can I sign an NDA on my phone?</h3>
        <p>Yes. Open <a href="/tools/sign-pdf-online">mydigitsign.com/tools/sign-pdf-online</a> in your mobile browser (Safari on iPhone, Chrome on Android). Draw your signature with your finger, upload the NDA PDF, place the signature, and tap Download. No app required.</p>

        <h3>Does signing an NDA online hold up in court?</h3>
        <p>Yes. Under the ESIGN Act and eIDAS, an electronically signed NDA is legally enforceable in court. Thousands of contract disputes involving e-signed documents have been successfully resolved. The key is demonstrating clear intent to sign, which a drawn or typed signature clearly provides.</p>

        <h3>What if the NDA requires a "wet ink" signature?</h3>
        <p>Some parties — particularly older organizations or those in heavily regulated industries — may still require a physical wet-ink signature. In that case, print the NDA, sign it by hand, scan it, and send the PDF. However, this is increasingly rare. Most modern businesses and legal teams accept e-signatures without any issue.</p>

        <h3>Can I sign an NDA that was sent to me as a Word document?</h3>
        <p>Not directly. First convert it to PDF: open the .docx in Word or Google Docs, go to File → Save as PDF (Word) or File → Download → PDF Document (Google Docs). Then upload the PDF to MyDigitSign to sign it.</p>

        <h3>Is signing an NDA the same as agreeing to all its terms?</h3>
        <p>Yes — that is the legal effect of signing. Read the NDA carefully before signing, particularly the duration, scope of confidential information, and any penalties for breach. If you're unsure about any clause, consult a lawyer before signing.</p>

        <hr />
        <h2>Related Articles</h2>
        <ul>
          <li><a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding &amp; Acceptable?</a></li>
          <li><a href="/blog/create-digital-signature-online-free">How to Create a Digital Signature Online for Free</a></li>
          <li><a href="/blog/how-to-sign-a-document-online-free-pdf-editor">How to Edit and Sign PDF Online for Free</a></li>
          <li><a href="/blog/free-digital-signature-certificate">How to Get a Free Digital Signature Certificate</a></li>
          <li><a href="/blog/ultimate-guide-signing-pdf-securely">The Ultimate Guide to Signing PDFs Securely</a></li>
        </ul>
      `
    }
  };

  return posts[slug] || null;
};

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostData(resolvedParams.slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  const plainTextDescription = post.content
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 155) + '...';

  return {
    title: post.title,
    description: plainTextDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: post.title,
      description: plainTextDescription,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified,
      authors: [post.author],
      url: `https://mydigitsign.com/blog/${resolvedParams.slug}`,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: plainTextDescription,
      creator: '@mydigitsign',
      images: ['/og-image.png'],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = getPostData(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Schema.org JSON-LD for Articles — enhanced with full author identity for E-E-A-T
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.lastModified).toISOString(),
    "author": {
      "@type": "Person",
      "@id": "https://mydigitsign.com/about#founder",
      "name": "Ali Mirza",
      "url": "https://mydigitsign.com/about",
      "sameAs": [
        "https://github.com/sidAli1993",
        "https://x.com/alimirza00",
        "https://www.linkedin.com/in/mirza-munawer-baig-3a0b15105/"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://mydigitsign.com/#organization",
      "name": "MyDigitSign",
      "url": "https://mydigitsign.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mydigitsign.com/icon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mydigitsign.com/blog/${resolvedParams.slug}`
    }
  };

  // BreadcrumbList for this blog post
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://mydigitsign.com',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Blog',
        'item': 'https://mydigitsign.com/blog',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': post.title,
        'item': `https://mydigitsign.com/blog/${resolvedParams.slug}`,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className={styles.postContainer}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <h1 className={styles.articleTitle}>{post.title}</h1>
            <div className={styles.articleMeta}>
              <span>By <a href="/about" style={{ color: 'inherit', textDecoration: 'underline' }}>Ali Mirza</a> &middot; MyDigitSign Team</span>
              <span>&bull;</span>
              <time dateTime={new Date(post.date).toISOString()}>Published: {post.date}</time>
              {post.lastModified !== post.date && (
                <>
                  <span>&bull;</span>
                  <time dateTime={new Date(post.lastModified).toISOString()} style={{ color: 'var(--color-primary, #4f46e5)', fontWeight: 600 }}>
                    Updated: {post.lastModified}
                  </time>
                </>
              )}
            </div>
          </header>
          <div
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio — E-E-A-T trust signal for Google 2026 */}
          <footer style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(128,128,128,0.2)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>Written by Ali Mirza</p>
              <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.75 }}>
                Ali Mirza is the founder of MyDigitSign — a free, privacy-first document signing
                tool built for people who believe document signing should not require server
                uploads, accounts, or subscription fees.
              </p>
              <p style={{ margin: 0, fontSize: '0.875rem' }}>
                <a href="/about" style={{ color: 'var(--color-primary, #4f46e5)' }}>Read more about MyDigitSign →</a>
              </p>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}

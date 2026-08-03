const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

// Colors
const cPrimary = rgb(15/255, 23/255, 42/255);    // Slate 900
const cSecondary = rgb(71/255, 85/255, 105/255); // Slate 600
const cAccent = rgb(79/255, 70/255, 229/255);    // Indigo 600
const cText = rgb(51/255, 65/255, 85/255);       // Slate 700
const cLight = rgb(241/255, 245/255, 249/255);   // Slate 100
const cWhite = rgb(1, 1, 1);

// A4 dimensions: 595.28 x 841.89 points (1 point = 1/72 inch)
const width = 595.28;
const height = 841.89;

function wrapAndDrawText(page, text, x, y, options = {}) {
  const {
    font,
    size = 10,
    color = cText,
    maxWidth = 515,
    lineHeight = 14
  } = options;
  
  const words = text.split(/\s+/);
  let currentLine = '';
  let currentY = y;
  
  for (const word of words) {
    const testLine = currentLine ? currentLine + ' ' + word : word;
    const testWidth = font.widthOfTextAtSize(testLine, size);
    if (testWidth <= maxWidth) {
      currentLine = testLine;
    } else {
      page.drawText(currentLine, { x, y: currentY, size, font, color });
      currentY -= lineHeight;
      currentLine = word;
    }
  }
  if (currentLine) {
    page.drawText(currentLine, { x, y: currentY, size, font, color });
    currentY -= lineHeight;
  }
  return currentY;
}

function drawHeaderFooter(page, pageNum, font, fontItalic) {
  // Header Text
  page.drawText('MyDigitSign  |  The Ultimate E-Signature Guide', {
    x: 40,
    y: 800,
    size: 8,
    font: fontItalic,
    color: cSecondary
  });
  
  page.drawText('mydigitsign.com', {
    x: 500,
    y: 800,
    size: 8,
    font: fontItalic,
    color: cSecondary
  });
  
  // Separator line
  page.drawLine({
    start: { x: 40, y: 792 },
    end: { x: 555, y: 792 },
    thickness: 0.5,
    color: cLight
  });
  
  // Footer page number
  page.drawText(`Page ${pageNum}`, {
    x: width / 2 - 15,
    y: 30,
    size: 8,
    font: fontItalic,
    color: cSecondary
  });
}

function drawCallout(page, title, text, x, y, widthBox, fontBold, fontItalic, fontRegular) {
  // Calculate text height roughly
  const words = text.split(/\s+/);
  let currentLine = '';
  let lineCount = 1;
  const maxWidth = widthBox - 20;
  for (const word of words) {
    const testLine = currentLine ? currentLine + ' ' + word : word;
    const testWidth = fontRegular.widthOfTextAtSize(testLine, 9.5);
    if (testWidth <= maxWidth) {
      currentLine = testLine;
    } else {
      lineCount++;
      currentLine = word;
    }
  }
  
  const boxHeight = 10 + 15 + (lineCount * 13) + 10;
  
  // Draw background box
  page.drawRectangle({
    x: x,
    y: y - boxHeight,
    width: widthBox,
    height: boxHeight,
    color: cLight,
    borderColor: cAccent,
    borderWidth: 0.5
  });
  
  // Title
  page.drawText(`[!] ${title}`, {
    x: x + 10,
    y: y - 20,
    size: 10,
    font: fontBold,
    color: cAccent
  });
  
  // Body text
  wrapAndDrawText(page, text, x + 10, y - 35, {
    font: fontItalic,
    size: 9.5,
    color: cPrimary,
    maxWidth: maxWidth,
    lineHeight: 13
  });
  
  return y - boxHeight - 15;
}

async function run() {
  const pdfDoc = await PDFDocument.create();
  
  // Embed Fonts
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  
  // ---------------- PAGE 1: COVER PAGE ----------------
  const page1 = pdfDoc.addPage([width, height]);
  
  // Top Banner Graphic (Indigo thin accent strip)
  page1.drawRectangle({
    x: 0,
    y: height - 15,
    width: width,
    height: 15,
    color: cAccent
  });
  
  // Badge/Sub-brand
  page1.drawText("PRODUCTIVITY & SECURITY GUIDE", {
    x: width / 2 - fontBold.widthOfTextAtSize("PRODUCTIVITY & SECURITY GUIDE", 10) / 2,
    y: 670,
    size: 10,
    font: fontBold,
    color: cAccent
  });
  
  // Main Title
  const titleText1 = "The Ultimate Guide to Digital";
  const titleText2 = "& Electronic Signatures Online";
  page1.drawText(titleText1, {
    x: width / 2 - fontBold.widthOfTextAtSize(titleText1, 24) / 2,
    y: 610,
    size: 24,
    font: fontBold,
    color: cPrimary
  });
  page1.drawText(titleText2, {
    x: width / 2 - fontBold.widthOfTextAtSize(titleText2, 24) / 2,
    y: 575,
    size: 24,
    font: fontBold,
    color: cPrimary
  });
  
  // Subtitle
  const subtitle1 = "How to Edit, Sign, and Secure Your Documents";
  const subtitle2 = "for Free Without Uploading Files to Vulnerable Servers";
  page1.drawText(subtitle1, {
    x: width / 2 - fontRegular.widthOfTextAtSize(subtitle1, 12) / 2,
    y: 535,
    size: 12,
    font: fontRegular,
    color: cSecondary
  });
  page1.drawText(subtitle2, {
    x: width / 2 - fontRegular.widthOfTextAtSize(subtitle2, 12) / 2,
    y: 515,
    size: 12,
    font: fontRegular,
    color: cSecondary
  });
  
  // Accent divider line
  page1.drawLine({
    start: { x: width / 2 - 40, y: 485 },
    end: { x: width / 2 + 40, y: 485 },
    thickness: 1,
    color: cAccent
  });
  
  // Chapter list block background
  page1.drawRectangle({
    x: 80,
    y: 280,
    width: width - 160,
    height: 160,
    color: cLight
  });
  
  page1.drawText("What You Will Learn Inside:", {
    x: 100,
    y: 415,
    size: 11,
    font: fontBold,
    color: cPrimary
  });
  
  const chapters = [
    "1. Understanding the Concept of a Digit Sign",
    "2. How to Sign Document for Free Securely & Legally",
    "3. Digital Certificates vs. Simple Electronic Signatures",
    "4. Step-by-Step: How to Edit and Sign PDF Files Online",
    "5. Choosing the Best PDF Editor Free Signature Tools"
  ];
  
  chapters.forEach((chapter, index) => {
    page1.drawText(chapter, {
      x: 100,
      y: 385 - (index * 22),
      size: 10,
      font: fontRegular,
      color: cText
    });
  });
  
  // Publisher Footer
  page1.drawText("Brought to you by MyDigitSign", {
    x: width / 2 - fontBold.widthOfTextAtSize("Brought to you by MyDigitSign", 10) / 2,
    y: 120,
    size: 10,
    font: fontBold,
    color: cPrimary
  });
  
  page1.drawText("https://mydigitsign.com", {
    x: width / 2 - fontRegular.widthOfTextAtSize("https://mydigitsign.com", 9.5) / 2,
    y: 105,
    size: 9.5,
    font: fontRegular,
    color: cAccent
  });
  
  
  // ---------------- PAGE 2: CHAPTER 1 & 2 ----------------
  const page2 = pdfDoc.addPage([width, height]);
  drawHeaderFooter(page2, 2, fontRegular, fontItalic);
  
  let yPos = 750;
  
  // Chapter 1 Header
  page2.drawText("Chapter 1", { x: 40, y: yPos, size: 12, font: fontBold, color: cAccent });
  yPos -= 18;
  page2.drawText("What is a Digit Sign & How Does Online Signing Work?", { x: 40, y: yPos, size: 16, font: fontBold, color: cPrimary });
  yPos -= 25;
  
  // Chapter 1 Body
  const ch1Text1 = "In today's digital workflow, the ability to sign documents securely from anywhere is a necessity. " +
    "Historically, signing paper documents required printing, signing with wet ink, scanning, and emailing back. " +
    "Now, you can use a digit sign (digital signature) to complete this entire process in seconds. " +
    "With tools that let you e signature pdf online, you can sign document for free and avoid all manual paperwork.";
  yPos = wrapAndDrawText(page2, ch1Text1, 40, yPos, { font: fontRegular, size: 10, maxWidth: 515 }) - 10;
  
  const ch1Text2 = "When you need to sign a document online, you typically use a platform that lets you draw or type your " +
    "signature and overlays it onto the digital document. This electronic process ensures efficiency, " +
    "saves time, and reduces printing costs.";
  yPos = wrapAndDrawText(page2, ch1Text2, 40, yPos, { font: fontRegular, size: 10, maxWidth: 515 }) - 15;
  
  // Chapter 1 Callout
  yPos = drawCallout(
    page2, 
    "Why Client-Side Signing Matters", 
    "Many online platforms require you to upload your sensitive contracts to their servers. To edit and sign pdf files " +
    "securely, look for tools that perform all operations directly inside your browser so your files never leave your device.", 
    40, 
    yPos, 
    515, 
    fontBold, 
    fontItalic, 
    fontRegular
  );
  
  // Chapter 2 Header
  page2.drawText("Chapter 2", { x: 40, y: yPos, size: 12, font: fontBold, color: cAccent });
  yPos -= 18;
  page2.drawText("Legal Validity & Digital Certificates", { x: 40, y: yPos, size: 16, font: fontBold, color: cPrimary });
  yPos -= 25;
  
  // Chapter 2 Section 1
  page2.drawText("Are Electronic Signatures Acceptable in Court?", { x: 40, y: yPos, size: 11, font: fontBold, color: cPrimary });
  yPos -= 15;
  
  const ch2Text1 = "A common concern for business owners and individuals is whether online signatures hold legal weight. " +
    "The short answer is yes. In most jurisdictions worldwide, electronic signature legal frameworks are firmly established. " +
    "Under laws like the ESIGN Act and UETA in the United States, as well as the eIDAS regulation in the European Union, " +
    "electronic signatures carry the same legal standing as traditional handwritten ink signatures. They are highly acceptable.";
  yPos = wrapAndDrawText(page2, ch2Text1, 40, yPos, { font: fontRegular, size: 10, maxWidth: 515 }) - 10;
  
  
  // ---------------- PAGE 3: CHAPTER 2 CONTINUED & CHAPTER 3 ----------------
  const page3 = pdfDoc.addPage([width, height]);
  drawHeaderFooter(page3, 3, fontRegular, fontItalic);
  
  yPos = 750;
  
  // Chapter 2 Continued Section 2
  page3.drawText("Understanding Digital Signature Certificates", { x: 40, y: yPos, size: 11, font: fontBold, color: cPrimary });
  yPos -= 15;
  
  const ch2Text2 = "While a basic electronic signature is simply an image of your signature placed on a page, a digital signature " +
    "uses cryptographic keys to bind your identity to the document. To achieve this higher level of trust, " +
    "you can create a digital signature certificate. This certificate ensures that the document has not been " +
    "tampered with after it was signed.";
  yPos = wrapAndDrawText(page3, ch2Text2, 40, yPos, { font: fontRegular, size: 10, maxWidth: 515 }) - 10;
  
  const ch2Text3 = "You might wonder: where to get digital signature certificate options and how can i get digital signature certificate " +
    "credentials? You can acquire these from a Public Key Infrastructure (PKI) Certificate Authority (CA). " +
    "Alternatively, for basic workflows, you can sign up for a free signing certificate that allows you to encrypt " +
    "and authenticate your PDF files directly without paying premium fees.";
  yPos = wrapAndDrawText(page3, ch2Text3, 40, yPos, { font: fontRegular, size: 10, maxWidth: 515 }) - 25;
  
  // Chapter 3 Header
  page3.drawText("Chapter 3", { x: 40, y: yPos, size: 12, font: fontBold, color: cAccent });
  yPos -= 18;
  page3.drawText("How to Edit and Sign PDFs Online", { x: 40, y: yPos, size: 16, font: fontBold, color: cPrimary });
  yPos -= 25;
  
  // Chapter 3 Body
  const ch3Text1 = "To get started, you don't need expensive desktop software. You can edit and sign pdf documents easily " +
    "using modern web-based editors. Follow these simple steps to sign on document online for free:";
  yPos = wrapAndDrawText(page3, ch3Text1, 40, yPos, { font: fontRegular, size: 10, maxWidth: 515 }) - 15;
  
  // Steps List
  const steps = [
    { title: "Step 1: Choose a PDF Editor Free Signature Tool", desc: "Select a secure platform like MyDigitSign that values your privacy and runs completely client-side." },
    { title: "Step 2: Upload Your File", desc: "Drag and drop your file into the web editor. If using MyDigitSign, the file stays on your machine and is never sent to a server." },
    { title: "Step 3: Create and Place Your Signature", desc: "Draw your signature using a touchpad, type it in a cursive font, or upload an image of your signature." },
    { title: "Step 4: Save & Download", desc: "Place your signature on the correct line, adjust its size, and download the signed document instantly." }
  ];
  
  for (const step of steps) {
    page3.drawText(`* ${step.title}`, { x: 50, y: yPos, size: 10, font: fontBold, color: cPrimary });
    yPos -= 14;
    yPos = wrapAndDrawText(page3, step.desc, 60, yPos, { font: fontRegular, size: 9.5, maxWidth: 495, lineHeight: 13 }) - 8;
  }
  
  
  // ---------------- PAGE 4: CHAPTER 4 & CTA ----------------
  const page4 = pdfDoc.addPage([width, height]);
  drawHeaderFooter(page4, 4, fontRegular, fontItalic);
  
  yPos = 750;
  
  // Chapter 4 Header
  page4.drawText("Chapter 4", { x: 40, y: yPos, size: 12, font: fontBold, color: cAccent });
  yPos -= 18;
  page4.drawText("Best Practices for Document Signing & Security", { x: 40, y: yPos, size: 16, font: fontBold, color: cPrimary });
  yPos -= 25;
  
  // Chapter 4 Body
  const ch4Text1 = "When handling digital documents, security should always be your top priority. Here are the essential " +
    "best practices to follow when using a pdf editor signature utility:";
  yPos = wrapAndDrawText(page4, ch4Text1, 40, yPos, { font: fontRegular, size: 10, maxWidth: 515 }) - 15;
  
  const practices = [
    "1. Never Upload Sensitive Data: Make sure the tool does not store copies of your PDF on their databases.",
    "2. Keep a Backup: Always keep a copy of the original, unsigned document in case you need to re-verify details.",
    "3. Audit Trails: For commercial contracts, use tools that embed timestamp and metadata info into the document.",
    "4. Validate Certificates: When receiving a signed PDF, use a viewer that verifies the digital certificate validity."
  ];
  
  for (const practice of practices) {
    yPos = wrapAndDrawText(page4, practice, 50, yPos, { font: fontRegular, size: 10, maxWidth: 505, lineHeight: 15 }) - 5;
  }
  
  yPos -= 20;
  
  // CTA Box background
  page4.drawRectangle({
    x: 40,
    y: yPos - 130,
    width: 515,
    height: 130,
    color: cAccent
  });
  
  // CTA Box Text
  page4.drawText("Sign Your Documents Privately with MyDigitSign", {
    x: 60,
    y: yPos - 30,
    size: 14,
    font: fontBold,
    color: cWhite
  });
  
  const ctaDesc = "MyDigitSign is a 100% free online signature tool that lets you sign and edit PDFs securely. " +
    "Unlike other platforms, your files are processed entirely in your web browser. " +
    "No uploads, no database storage, 100% privacy.";
  wrapAndDrawText(page4, ctaDesc, 60, yPos - 50, {
    font: fontRegular,
    size: 10,
    color: rgb(240/255, 240/255, 255/255),
    maxWidth: 475,
    lineHeight: 14
  });
  
  page4.drawText("Try it now at: https://mydigitsign.com", {
    x: 60,
    y: yPos - 110,
    size: 10.5,
    font: fontBold,
    color: cWhite
  });
  
  // Save PDF
  const dirPath = path.join(__dirname, 'public', 'docs');
  fs.mkdirSync(dirPath, { recursive: true });
  
  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(dirPath, 'ultimate-digital-signature-guide.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  
  console.log(`Successfully generated PDF at: ${filePath}`);
}

run().catch(console.error);

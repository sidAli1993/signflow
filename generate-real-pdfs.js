const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createPDF(title, filename, contentLines) {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const boldFont = await doc.embedFont(StandardFonts.HelveticaBold);
  
  let page = doc.addPage();
  const { width, height } = page.getSize();
  
  let y = height - 50;
  
  // Draw Title
  page.drawText(title, { x: 50, y, size: 24, font: boldFont, color: rgb(0, 0, 0) });
  y -= 40;
  
  for (const line of contentLines) {
    if (y < 50) {
      page = doc.addPage();
      y = height - 50;
    }
    
    if (line.startsWith('## ')) {
       y -= 10;
       page.drawText(line.replace('## ', ''), { x: 50, y, size: 16, font: boldFont, color: rgb(0, 0, 0) });
       y -= 25;
    } else {
       page.drawText(line, { x: 50, y, size: 12, font: font, color: rgb(0.2, 0.2, 0.2) });
       y -= 20;
    }
  }

  const pdfBytes = await doc.save();
  const dir = path.join(__dirname, 'public/templates/pdfs');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  fs.writeFileSync(path.join(dir, filename), pdfBytes);
  console.log('Created ' + filename);
}

async function run() {
  await createPDF('Non-Disclosure Agreement (NDA)', 'nda-template.pdf', [
    'This Non-Disclosure Agreement (the "Agreement") is entered into by and between:',
    '',
    'Party A: ___________________________',
    'Party B: ___________________________',
    '',
    '## 1. Definition of Confidential Information',
    'For purposes of this Agreement, "Confidential Information" shall include all',
    'information or material that has or could have commercial value or other',
    'utility in the business in which Disclosing Party is engaged.',
    '',
    '## 2. Exclusions from Confidential Information',
    'Receiving Party\'s obligations under this Agreement do not extend to',
    'information that is: (a) publicly known at the time of disclosure or',
    'subsequently becomes publicly known through no fault of the Receiving Party.',
    '',
    '## 3. Obligations of Receiving Party',
    'Receiving Party shall hold and maintain the Confidential Information in',
    'strictest confidence for the sole and exclusive benefit of the Disclosing Party.',
    '',
    '## Signatures',
    'Party A Signature:                                 Date: ____________',
    '',
    '',
    '',
    'Party B Signature:                                 Date: ____________'
  ]);

  await createPDF('SCORE Business Plan', 'score-business-plan.pdf', [
    'Business Plan for: ___________________________',
    '',
    '## 1. Executive Summary',
    'Briefly tell your reader what your company is and why it will be successful.',
    'Include your mission statement, your product or service, and basic information',
    'about your company\'s leadership team, employees, and location.',
    '',
    '',
    '',
    '## 2. Company Description',
    'Provide detailed information about your company. Go into detail about the',
    'problems your business solves.',
    '',
    '',
    '',
    '## 3. Market Analysis',
    'You\'ll need a good understanding of your industry outlook and target market.',
    'Competitive research will show you what other businesses are doing and what',
    'their strengths are.',
    '',
    '',
    '',
    '## 4. Organization and Management',
    'Tell your reader how your company will be structured and who will run it.',
    '',
    '',
    '',
    '## Signatures',
    'Founder Signature:                                 Date: ____________'
  ]);

  await createPDF('Standard Residential Lease Agreement', 'residential-lease.pdf', [
    'This Residential Lease Agreement is entered into by and between:',
    '',
    'Landlord: ___________________________',
    'Tenant: ___________________________',
    '',
    '## 1. Property Description',
    'The Landlord agrees to rent to the Tenant the property located at:',
    '______________________________________________________________',
    '',
    '## 2. Term of Lease',
    'The lease begins on ____________ and ends on ____________.',
    '',
    '## 3. Rent Details',
    'Tenant agrees to pay Landlord rent in the amount of $_________ per month.',
    '',
    '## 4. Security Deposit',
    'Upon execution of this Lease, Tenant will deposit with Landlord the sum of',
    '$_________ as security for compliance with the terms of this agreement.',
    '',
    '## Signatures',
    'Landlord Signature:                                Date: ____________',
    '',
    '',
    '',
    'Tenant Signature:                                  Date: ____________'
  ]);
}

run();

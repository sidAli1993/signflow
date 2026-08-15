import os
import json

PAGES = [
    {
        "slug": "sign-lease-agreement-online",
        "doc_type": "lease agreement",
        "doc_type_capitalized": "Lease Agreement",
        "title": "Sign Lease Agreement Online Free — Electronic Signature | MyDigitSign",
        "desc": "Sign your residential or commercial lease agreement online for free. Upload your rental contract, add your electronic signature securely, and download instantly.",
        "keywords": ["sign lease agreement online", "electronic signature for lease", "sign rental agreement online", "free lease signing online", "digital signature lease agreement"],
        "hero_title": "Sign Lease Agreements <span className={styles.seoHeroGradient}>Securely</span>",
        "hero_desc": "Need to finalize a <strong>residential or commercial lease agreement</strong>? Upload your rental PDF, apply your legally binding electronic signature, and send it to your landlord or tenant in seconds. 100% free and private.",
        "article_title": "The Ultimate Guide to Signing a Lease Agreement Online",
        "article_p1": "Moving into a new apartment or securing a commercial office space requires finalizing a lease agreement. Traditionally, this involved printing dozens of pages, signing them by hand, and scanning them back. Today, you can <strong>sign lease agreement online</strong> for free using standard electronic signatures.",
        "article_p2": "Under the ESIGN Act (US) and eIDAS (EU), electronic signatures on lease and rental agreements are completely legally binding. This ensures both landlords and tenants can execute contracts instantly without geographical barriers.",
        "article_p3": "Using MyDigitSign to execute your rental contract ensures maximum privacy. Since our signature engine runs entirely within your browser, your sensitive financial terms and personal information are never uploaded to a third-party server.",
        "faq_1_q": "Is an electronically signed lease agreement legally binding?",
        "faq_1_a": "Yes. Electronic signatures on lease agreements hold the same legal weight as wet-ink signatures under federal and international e-signature laws.",
        "faq_2_q": "Can I sign a lease agreement on my phone?",
        "faq_2_a": "Absolutely. You can upload the PDF lease to MyDigitSign on your smartphone, draw your signature using your touchscreen, and download the signed contract instantly."
    },
    {
        "slug": "sign-employment-contract-online",
        "doc_type": "employment contract",
        "doc_type_capitalized": "Employment Contract",
        "title": "Sign Employment Contract Online Free — HR Signatures | MyDigitSign",
        "desc": "Sign employment contracts and HR agreements online for free. Secure, browser-based electronic signatures for new hires and employers.",
        "keywords": ["sign employment contract online", "electronic signature employment agreement", "HR contract signing", "sign offer letter online", "digital signature for employees"],
        "hero_title": "Sign Employment Contracts <span className={styles.seoHeroGradient}>Securely</span>",
        "hero_desc": "Onboarding a new hire or accepting a new job? Upload your <strong>employment contract</strong> and sign it electronically for free. Keep your compensation details private with our 100% client-side signing engine.",
        "article_title": "How to Securely Sign Your Employment Contract Online",
        "article_p1": "When you receive a new job offer, the final step is executing the employment contract. By choosing to <strong>sign employment contract online</strong>, you expedite the HR onboarding process and secure your start date without dealing with printers.",
        "article_p2": "Human Resources departments worldwide accept digital signatures for employment agreements, non-competes, and tax forms. Electronic signatures comply with strict labor and corporate governance laws.",
        "article_p3": "Employment agreements contain highly sensitive data, including salary, benefits, and personal identification. MyDigitSign protects this data by processing the entire PDF locally in your web browser. No external server ever sees your contract.",
        "faq_1_q": "Do HR departments accept electronic signatures?",
        "faq_1_a": "Yes. The vast majority of modern HR departments use and accept electronic signatures for all onboarding documents and employment contracts.",
        "faq_2_q": "Is it safe to upload my employment contract?",
        "faq_2_a": "With MyDigitSign, your file is never actually 'uploaded' to the cloud. All processing happens in your device's memory, guaranteeing complete privacy for your sensitive HR documents."
    },
    {
        "slug": "sign-offer-letter-online",
        "doc_type": "offer letter",
        "doc_type_capitalized": "Offer Letter",
        "title": "Sign Offer Letter Online Free — Accept Your Job Offer | MyDigitSign",
        "desc": "Accept your new job instantly. Sign your offer letter online for free with a secure, legally binding electronic signature.",
        "keywords": ["sign offer letter online free", "accept job offer electronically", "electronic signature offer letter", "sign HR letter online"],
        "hero_title": "Sign Your Offer Letter <span className={styles.seoHeroGradient}>Instantly</span>",
        "hero_desc": "Ready to accept your new role? Upload your <strong>offer letter</strong> and apply your electronic signature for free. Return the signed document to HR immediately and secure your start date.",
        "article_title": "Accepting Your Job: How to Sign an Offer Letter Online",
        "article_p1": "Receiving a job offer is an exciting milestone. To officially accept the position, you must sign the offer letter and return it to HR. You can <strong>sign offer letter online free</strong> to confirm your acceptance without delay.",
        "article_p2": "An offer letter outlines your starting salary, benefits, and start date. While not always a binding employment contract, signing it signifies your formal intent to join the company. Electronic signatures are the industry standard for this process.",
        "article_p3": "Avoid the hassle of finding a scanner. Just upload the PDF, draw or type your signature, place it on the signature line, and email the finalized document directly back to your recruiter.",
        "faq_1_q": "Is typing my name on an offer letter a valid signature?",
        "faq_1_a": "Yes, typing your name or drawing it on an electronic document serves as a legally valid electronic signature for accepting an offer letter.",
        "faq_2_q": "Can I sign an offer letter for free?",
        "faq_2_a": "Yes, using MyDigitSign, you can apply a legally binding signature to your offer letter PDF completely free of charge, with no account required."
    },
    {
        "slug": "sign-invoice-online",
        "doc_type": "invoice",
        "doc_type_capitalized": "Invoice",
        "title": "Sign Invoice Online Free — Electronic Signature for Billing | MyDigitSign",
        "desc": "Sign invoices, billing statements, and purchase orders online for free. Add an authorized electronic signature or company seal to your billing documents.",
        "keywords": ["sign invoice online free", "electronic signature for invoice", "digital signature billing", "sign purchase order online", "add signature to invoice"],
        "hero_title": "Sign Invoices & Billing <span className={styles.seoHeroGradient}>Online</span>",
        "hero_desc": "Need to authorize an <strong>invoice, purchase order, or billing statement</strong>? Add your electronic signature or company seal to your financial documents instantly for free.",
        "article_title": "Streamline Your Billing: How to Sign Invoices Online",
        "article_p1": "For freelancers, contractors, and corporate billing departments, authorizing payments quickly is essential for cash flow. When you <strong>sign invoice online free</strong>, you ensure that your billing documents look professional and authorized.",
        "article_p2": "Many international clients and corporate accounts payable departments require a formal signature or company stamp on an invoice before they can process payment. An electronic signature fulfills this compliance requirement seamlessly.",
        "article_p3": "Our tool allows you to upload an image of your company seal or draw your authorized signature directly onto the invoice PDF. Your financial data is processed securely in your browser, maintaining strict financial privacy.",
        "faq_1_q": "Why do some clients require a signed invoice?",
        "faq_1_a": "Certain corporate accounting policies and international tax regulations require invoices to be formally signed or stamped to prevent fraud and authorize the payout.",
        "faq_2_q": "Can I add a company seal to my invoice?",
        "faq_2_a": "Yes, you can upload an image of your company seal as your signature and place it on your invoice PDF before downloading."
    },
    {
        "slug": "sign-waiver-online",
        "doc_type": "waiver",
        "doc_type_capitalized": "Waiver",
        "title": "Sign Waiver Online Free — E-Sign Release Forms | MyDigitSign",
        "desc": "Sign liability waivers and release forms online for free. Secure electronic signature tool for events, gyms, and activity waivers.",
        "keywords": ["sign waiver online", "electronic signature liability waiver", "sign release form online free", "e-sign waiver", "gym waiver signature"],
        "hero_title": "Sign Liability Waivers <span className={styles.seoHeroGradient}>Instantly</span>",
        "hero_desc": "Participating in an event or joining a gym? Upload your <strong>liability waiver or release form</strong> and sign it electronically for free. Complete your paperwork before you even arrive.",
        "article_title": "The Convenient Way to Sign Waivers and Release Forms",
        "article_p1": "Whether you are signing up for a marathon, joining a fitness center, or renting equipment, you will likely need to sign a liability waiver. You can <strong>sign waiver online</strong> to skip the line and handle the paperwork from your device.",
        "article_p2": "Electronic signatures on waivers are legally enforceable and widely accepted by businesses and event organizers to mitigate liability and confirm participant consent.",
        "article_p3": "Simply upload the PDF waiver, add your signature and the current date, and download the signed copy to email back to the organizer. It’s fast, free, and works entirely in your browser.",
        "faq_1_q": "Are electronic signatures on waivers legally binding?",
        "faq_1_a": "Yes, electronic signatures on liability waivers and release forms are fully enforceable and legally binding under ESIGN and UETA regulations.",
        "faq_2_q": "Can I add a date to the waiver?",
        "faq_2_a": "Yes, our tool allows you to add text and date fields to the document alongside your electronic signature."
    },
    {
        "slug": "sign-medical-form-online",
        "doc_type": "medical form",
        "doc_type_capitalized": "Medical Form",
        "title": "Sign Medical Form Online Free — HIPAA Compliant Privacy | MyDigitSign",
        "desc": "Sign medical forms, patient intake, and consent documents online for free. 100% browser-based processing ensures complete patient privacy.",
        "keywords": ["sign medical form online", "electronic signature patient intake", "sign consent form medical", "HIPAA compliant signature free"],
        "hero_title": "Sign Medical Forms with <span className={styles.seoHeroGradient}>Complete Privacy</span>",
        "hero_desc": "Complete your <strong>patient intake or medical consent forms</strong> securely. Our 100% client-side technology ensures your sensitive health information never leaves your device.",
        "article_title": "Securely Signing Medical Forms and Patient Documents",
        "article_p1": "Medical forms contain highly sensitive Personal Health Information (PHI). When you need to <strong>sign medical form online</strong>, privacy and security must be the absolute highest priority.",
        "article_p2": "Traditional online signature tools upload your documents to their servers, which poses a significant privacy risk for health data. MyDigitSign eliminates this risk entirely by processing the PDF strictly inside your own web browser.",
        "article_p3": "By avoiding server uploads, you can securely sign HIPAA authorization forms, patient intake paperwork, and medical history documents without worrying about data breaches or third-party tracking.",
        "faq_1_q": "Is this tool safe for signing medical documents?",
        "faq_1_a": "Yes. Because our application processes the PDF entirely on your local device (in the browser), your medical data is never transmitted to or stored on our servers.",
        "faq_2_q": "Can I use this for patient intake forms before my appointment?",
        "faq_2_a": "Absolutely. You can sign and fill out your intake forms at home, download the signed PDF, and securely email it directly to your doctor's office."
    },
    {
        "slug": "sign-consent-form-online",
        "doc_type": "consent form",
        "doc_type_capitalized": "Consent Form",
        "title": "Sign Consent Form Online Free — Electronic Signature | MyDigitSign",
        "desc": "Sign consent forms for schools, activities, and media releases online for free. Fast, secure, and legally binding electronic signatures.",
        "keywords": ["sign consent form online", "electronic signature consent form", "sign school permission slip", "sign media release online"],
        "hero_title": "Sign Consent Forms <span className={styles.seoHeroGradient}>Fast & Free</span>",
        "hero_desc": "Need to authorize a <strong>consent form, media release, or permission slip</strong>? Upload the document and apply a legally binding electronic signature instantly.",
        "article_title": "How to E-Sign Consent Forms and Permission Slips",
        "article_p1": "From school field trip permission slips to media release agreements, consent forms are a common part of daily life. Choosing to <strong>sign consent form online</strong> eliminates the need for printing and physical delivery.",
        "article_p2": "Electronic signatures are legally valid for providing consent. Whether you are a parent authorizing a school activity or an individual signing a photography release, an e-signature serves as a formal record of your agreement.",
        "article_p3": "Our free signature tool allows you to apply your mark and date the form in seconds. Best of all, no account registration is required, allowing you to complete the task and move on with your day.",
        "faq_1_q": "Can I use this to sign a school permission slip for my child?",
        "faq_1_a": "Yes, schools and educational institutions widely accept electronic signatures on permission slips and standard consent forms.",
        "faq_2_q": "Is an electronic signature valid for a media release?",
        "faq_2_a": "Yes, an electronic signature on a media release or photo consent form is legally binding and establishes formal written consent."
    },
    {
        "slug": "sign-real-estate-contract-online",
        "doc_type": "real estate contract",
        "doc_type_capitalized": "Real Estate Contract",
        "title": "Sign Real Estate Contract Online Free — Property Agreements | MyDigitSign",
        "desc": "Sign real estate contracts, purchase agreements, and property disclosures online for free. Secure, legally binding e-signatures for real estate transactions.",
        "keywords": ["sign real estate contract online", "electronic signature purchase agreement", "sign property disclosure online", "esign real estate documents"],
        "hero_title": "Sign Real Estate Contracts <span className={styles.seoHeroGradient}>Securely</span>",
        "hero_desc": "Closing on a property or signing a disclosure? Upload your <strong>real estate contract</strong> and apply a legally binding electronic signature. Keep your real estate transaction private.",
        "article_title": "Executing Real Estate Contracts with Electronic Signatures",
        "article_p1": "The real estate industry has fully embraced digital transformation. Buyers, sellers, and agents frequently need to <strong>sign real estate contract online</strong> to speed up negotiations, escrow, and closing processes.",
        "article_p2": "Under the ESIGN Act, electronic signatures are legally binding for almost all real estate documents, including purchase agreements, property disclosures, and agency representations (though some final closing documents may still require a physical notary).",
        "article_p3": "Real estate documents are often massive PDF files containing sensitive financial details. MyDigitSign handles large PDFs with ease and processes everything locally, ensuring your transaction details remain strictly confidential.",
        "faq_1_q": "Are e-signatures valid for buying a house?",
        "faq_1_a": "Yes, electronic signatures are legally binding for purchase agreements, disclosures, and most real estate contracts, though final mortgage notes or deeds may require notarization.",
        "faq_2_q": "Does this tool work with large real estate PDFs?",
        "faq_2_a": "Yes, because the PDF is processed locally in your browser memory, there are no server upload limits, allowing you to sign massive 100+ page property packets easily."
    },
    {
        "slug": "sign-freelance-contract-online",
        "doc_type": "freelance contract",
        "doc_type_capitalized": "Freelance Contract",
        "title": "Sign Freelance Contract Online Free — Independent Contractors | MyDigitSign",
        "desc": "Sign freelance contracts, independent contractor agreements, and SOWs online for free. Professional electronic signatures for freelancers.",
        "keywords": ["sign freelance contract online", "electronic signature independent contractor", "sign SOW online", "esign freelance agreement"],
        "hero_title": "Sign Freelance Contracts <span className={styles.seoHeroGradient}>Professionally</span>",
        "hero_desc": "Starting a new client project? Upload your <strong>freelance contract or Statement of Work (SOW)</strong> and sign it electronically for free. Secure your deals faster.",
        "article_title": "How Freelancers Can Sign Contracts and SOWs Online",
        "article_p1": "For independent contractors and freelancers, getting a contract signed quickly is the first step to getting paid. When you <strong>sign freelance contract online</strong>, you project a professional image and remove friction from the client onboarding process.",
        "article_p2": "Freelance agreements, Non-Disclosure Agreements (NDAs), and Statements of Work (SOW) are fully legally binding when executed with an electronic signature. This allows you to collaborate with clients anywhere in the world.",
        "article_p3": "MyDigitSign is the perfect tool for freelancers because it is 100% free and requires no subscription. You can sign unlimited contracts and immediately download the finalized PDFs to send to your clients.",
        "faq_1_q": "Is an electronic signature valid for an independent contractor agreement?",
        "faq_1_a": "Yes, independent contractor agreements and freelance contracts are standard commercial contracts where electronic signatures are fully legally binding.",
        "faq_2_q": "Do I have to pay to sign multiple freelance contracts?",
        "faq_2_a": "No. MyDigitSign is completely free with no hidden limits. You can sign as many freelance contracts or SOWs as you need without a subscription."
    },
    {
        "slug": "sign-business-agreement-online",
        "doc_type": "business agreement",
        "doc_type_capitalized": "Business Agreement",
        "title": "Sign Business Agreement Online Free — Commercial Contracts | MyDigitSign",
        "desc": "Sign business agreements, partnership contracts, and vendor agreements online for free. Secure, private electronic signatures for commercial use.",
        "keywords": ["sign business agreement online", "electronic signature commercial contract", "esign partnership agreement", "sign vendor contract online free"],
        "hero_title": "Sign Business Agreements <span className={styles.seoHeroGradient}>Securely</span>",
        "hero_desc": "Finalizing a B2B deal? Upload your <strong>partnership contract, vendor agreement, or corporate document</strong>. Apply an authorized electronic signature securely and privately.",
        "article_title": "Executing Commercial Business Agreements Electronically",
        "article_p1": "In the corporate world, speed and security are paramount. When executives and partners need to <strong>sign business agreement online</strong>, they rely on electronic signatures to execute commercial contracts without delays.",
        "article_p2": "B2B contracts, vendor agreements, and partnership formations frequently contain proprietary business logic, trade secrets, and pricing models. Uploading these to cloud signature platforms poses a supply chain security risk.",
        "article_p3": "MyDigitSign provides the ultimate solution for corporate privacy. The entire signing process happens within your own browser's memory. Your confidential business agreements are never transmitted to our servers, ensuring absolute data sovereignty.",
        "faq_1_q": "Are electronic signatures legally binding for B2B contracts?",
        "faq_1_a": "Yes, electronic signatures are the standard for B2B commercial contracts and are legally binding under the ESIGN Act and global e-commerce laws.",
        "faq_2_q": "Why is client-side signing better for business agreements?",
        "faq_2_a": "Client-side signing means your PDF is processed locally on your machine. This prevents your confidential contracts from ever being stored on or intercepted by third-party servers."
    }
]


template = """import type {{ Metadata }} from 'next';
import {{ Navbar }} from '@/components/marketing/Navbar';
import {{ Footer }} from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import {{ Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight }} from 'lucide-react';
import {{ getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema }} from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {{
  title: '{title}',
  description: '{desc}',
  keywords: {keywords},
  alternates: {{
    canonical: 'https://mydigitsign.com/tools/{slug}',
  }},
  openGraph: {{
    title: '{title}',
    description: '{desc}',
    url: 'https://mydigitsign.com/tools/{slug}',
    siteName: 'MyDigitSign',
    images: [{{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }}],
    locale: 'en_US',
    type: 'website',
  }},
}};

const breadcrumbSchema = getBreadcrumbSchema([
  {{ name: 'Home', url: '/' }},
  {{ name: 'Tools', url: '/tools' }},
  {{ name: 'Sign {doc_type_capitalized} Online', url: '/tools/{slug}' }},
]);

const howToSchema = getHowToSchema({{
  name: 'How to Sign a {doc_type_capitalized} Online for Free',
  description: 'Apply a legally binding electronic signature to your {doc_type} securely in your browser.',
  url: 'https://mydigitsign.com/tools/{slug}',
  steps: [
    {{
      name: 'Create Your Signature',
      text: 'Type your full name, draw your signature, or upload your company seal. Click Adopt to save your mark.',
      url: 'https://mydigitsign.com/tools/{slug}',
    }},
    {{
      name: 'Upload Your Document',
      text: 'Drag and drop your {doc_type} PDF. It is processed entirely locally for maximum privacy.',
      url: 'https://mydigitsign.com/tools/{slug}',
    }},
    {{
      name: 'Place Your Signature',
      text: 'Navigate to the signature block, drag your signature to the line, and add optional text or dates.',
      url: 'https://mydigitsign.com/tools/{slug}',
    }},
    {{
      name: 'Download & Send',
      text: 'Click Download to save the signed contract. Email it back to the requesting party instantly.',
      url: 'https://mydigitsign.com/tools/{slug}',
    }},
  ],
}});

const softwareSchema = getSoftwareAppSchema({{
  name: 'MyDigitSign {doc_type_capitalized} Signer',
  description: '{desc}',
  url: 'https://mydigitsign.com/tools/{slug}',
  applicationCategory: 'BusinessApplication',
}});

const faqItems = [
  {{
    question: "{faq_1_q}",
    answer: "{faq_1_a}"
  }},
  {{
    question: "{faq_2_q}",
    answer: "{faq_2_a}"
  }},
  {{
    question: "Do I need to create an account to sign this document?",
    answer: "No. MyDigitSign is completely free and requires no account registration or credit card to sign your documents."
  }},
  {{
    question: "Is a drawn signature better than a typed one?",
    answer: "Both are legally valid electronic signatures. Drawing your signature mimics your natural handwriting, while typing uses cursive typography. Choose whichever you prefer."
  }}
];

const faqSchema = getFAQSchema(faqItems);

export default function SignDocumentTool() {{
  return (
    <div className={{styles.appWrapper}}>
      <Navbar />

      <section className={{styles.seoHero}}>
        <div className={{styles.seoHeroInner}}>
          <div className={{styles.seoHeroBadge}}>
            <Star size={{14}} aria-hidden="true" />
            <span>Free Contract Signer · No Account · 100% Private</span>
          </div>
          <h1 className={{styles.seoHeroTitle}}>
            {hero_title}
          </h1>
          <p className={{styles.seoHeroDesc}} dangerouslySetInnerHTML={{{{ __html: '{hero_desc}' }}}} />
          <ul className={{styles.seoTrustPills}} role="list">
            <li><Shield size={{14}} /><span>In-Browser Processing</span></li>
            <li><Lock size={{14}} /><span>Complete Privacy</span></li>
            <li><FileCheck size={{14}} /><span>ESIGN Compliant</span></li>
            <li><Users size={{14}} /><span>No Signup Required</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="type"
        titleOverride="Sign Your <span>{doc_type_capitalized}</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload your PDF."
      />

      <section className={{styles.seoExplainer}}>
        <div className={{styles.seoExplainerInner}}>
          <h2 className={{styles.seoExplainerTitle}}>
            How to Sign Your {doc_type_capitalized} in 4 Steps
          </h2>
          <div className={{styles.seoStepsGrid}}>
            <article className={{styles.seoStep}}>
              <div className={{styles.seoStepNum}}>1</div>
              <h3>Create Signature</h3>
              <p>Type or draw your signature in the creator panel and adopt it.</p>
            </article>
            <article className={{styles.seoStep}}>
              <div className={{styles.seoStepNum}}>2</div>
              <h3>Upload PDF</h3>
              <p>Drop your <strong>{doc_type}</strong> into the secure browser workspace.</p>
            </article>
            <article className={{styles.seoStep}}>
              <div className={{styles.seoStepNum}}>3</div>
              <h3>Place on Line</h3>
              <p>Drag the signature, add dates, and position them on the document.</p>
            </article>
            <article className={{styles.seoStep}}>
              <div className={{styles.seoStepNum}}>4</div>
              <h3>Download</h3>
              <p>Save the signed file to your device instantly.</p>
            </article>
          </div>

          <div className={{styles.seoArticle}} style={{{{ marginTop: '4rem' }}}}>
            <h2 className={{styles.seoArticleTitle}}>{article_title}</h2>
            <p style={{{{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}}} dangerouslySetInnerHTML={{{{ __html: '{article_p1}' }}}} />
            <p style={{{{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}}} dangerouslySetInnerHTML={{{{ __html: '{article_p2}' }}}} />
            <p style={{{{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}}} dangerouslySetInnerHTML={{{{ __html: '{article_p3}' }}}} />
            
            <h3 style={{{{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}}}>
              Why Use Client-Side Signing?
            </h3>
            <p style={{{{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}}}>
              Unlike other free tools that upload your sensitive documents to remote servers to apply the signature, MyDigitSign uses WebAssembly and advanced canvas rendering to process your <strong>{doc_type}</strong> locally on your machine. This guarantees that your confidential data cannot be intercepted or stored by third parties.
            </p>
          </div>

          <div className={{styles.seoFaq}} style={{{{ marginTop: '4rem' }}}}>
            <h2 className={{styles.seoFaqTitle}}>Frequently Asked Questions</h2>
            <div className={{styles.seoFaqGrid}}>
              {{faqItems.map((faq, index) => (
                <div key={{index}} className={{styles.faqItem}}>
                  <h3>{{faq.question}}</h3>
                  <p>{{faq.answer}}</p>
                </div>
              ))}}
            </div>
          </div>

          <div style={{{{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}}}>
            <h3 style={{{{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}}}>Explore Related Tools & Guides</h3>
            <ul style={{{{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem' }}}}>
              <li><Link href="/tools/sign-pdf-online" style={{{{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}}}>Sign PDF Online <ArrowRight size={{14}}/></Link></li>
              <li><Link href="/tools/type-signature-online" style={{{{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}}}>Type Signature Online <ArrowRight size={{14}}/></Link></li>
              <li><Link href="/tools/draw-signature-online" style={{{{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}}}>Draw Signature Online <ArrowRight size={{14}}/></Link></li>
              <li><Link href="/blog/electronic-signature-for-small-business" style={{{{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}}}>Small Business E-Signatures <ArrowRight size={{14}}/></Link></li>
            </ul>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(breadcrumbSchema) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(howtoSchema) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(softwareSchema) }}}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(faqSchema) }}}} />

      <Footer />
    </div>
  );
}}
"""

for page in PAGES:
    content = template.format(
        slug=page["slug"],
        doc_type=page["doc_type"],
        doc_type_capitalized=page["doc_type_capitalized"],
        title=page["title"],
        desc=page["desc"],
        keywords=json.dumps(page["keywords"]),
        hero_title=page["hero_title"],
        hero_desc=page["hero_desc"],
        article_title=page["article_title"],
        article_p1=page["article_p1"].replace("'", "&apos;"),
        article_p2=page["article_p2"].replace("'", "&apos;"),
        article_p3=page["article_p3"].replace("'", "&apos;"),
        faq_1_q=page["faq_1_q"].replace("'", "&apos;"),
        faq_1_a=page["faq_1_a"].replace("'", "&apos;"),
        faq_2_q=page["faq_2_q"].replace("'", "&apos;"),
        faq_2_a=page["faq_2_a"].replace("'", "&apos;")
    )
    
    file_path = f"src/app/tools/{page['slug']}/page.tsx"
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated {file_path}")

print("Done generating pages.")

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
  ];
}

// This would normally come from a CMS or markdown files
const getPostData = (slug: string) => {
  const posts = {
    'how-to-sign-a-document-online-free-pdf-editor': {
      title: 'How to Edit and Sign PDF Online & Sign a Document Online Free',
      date: 'July 6, 2026',
      author: 'MyDigitSign Editorial',
      content: `
        <p>If you're looking for a simple, fast way to <a href="/">edit and sign pdf</a> files or need to <a href="/">sign a document online</a> for free, you don't need to purchase high-priced software subscriptions. There are powerful browser-based tools that allow you to edit, layout, and sign PDFs completely free.</p>
        
        <h2>Why You Need to Edit and Sign PDF Files Online</h2>
        <p>Most traditional document signing workflows require complex processes: downloading a file, opening a separate PDF editor, adding visual components, converting, and uploading it back to an e-signature server. An integrated online editor simplifies this by combining document editing and signing into a single step.</p>
        <p>MyDigitSign acts as a lightweight <a href="/tools/draw-signature-online">online pdf editor signature</a> platform, letting you drag and drop your signature overlays, adjust their dimensions, and browse pages — entirely client-side. This makes it extremely easy to place a secure <strong>sign on document online</strong> without sending files to server hosts.</p>
        
        <h2>How to Sign a Document Online for Free (Step-by-Step)</h2>
        <ol>
          <li><strong>Generate Your Signature:</strong> <a href="/tools/type-signature-online">Type your name</a> using cursive styling, <a href="/tools/draw-signature-online">sketch your signature freehand</a>, or upload a <a href="/tools/sign-image-online">photo of your handwritten signature</a>.</li>
          <li><strong>Upload the PDF:</strong> Drag the PDF file directly into the editor. Since it runs in-browser, no upload to backend servers takes place.</li>
          <li><strong>Edit & Place:</strong> Use our online editor tool to drag the signature elements, position them on the target lines, and scale them to fit. You can easily <a href="/">edit and sign pdf</a> structures on any page.</li>
          <li><strong>Download:</strong> Click Download to get a <strong>pdf signature free</strong> document saved locally.</li>
        </ol>

        <h2>Get a PDF Signature Free — Without Account Signup</h2>
        <p>Many online services hide final downloads behind registration walls or subscription prompts. MyDigitSign ensures you can <a href="/">sign a document online</a> and download the finished file in under a minute, with no signups, no fees, and absolute security.</p>
      `
    },
    'free-digital-signature-certificate': {
      title: 'How to Get a Free Digital Signature Certificate in 2026',
      date: 'July 4, 2026',
      author: 'MyDigitSign Team',
      content: `
        <p>If you need to cryptographically sign a PDF document to verify its integrity, you will need a <strong>digital signature certificate</strong> (typically a file with a <code>.pfx</code> or <code>.p12</code> extension containing a private key and public key certificate). While commercial Certificate Authorities charge substantial yearly fees, you can easily create and obtain a <strong>free signing certificate</strong> for personal, testing, or internal business workflows.</p>

        <h2>What is a Digital Signature Certificate?</h2>
        <p>A digital signature certificate acts as a cryptographic credential that authenticates the identity of the signer. When you place a cryptographic <strong>digit sign</strong> on a PDF, a mathematical hash of the document is encrypted using your certificate's private key. If the document is tampered with after signing, the signature breaks immediately. This provides a secure, tamper-evident signing mechanism that holds up under electronic transaction laws globally.</p>

        <h2>Self-Signed vs. Publicly Trusted Certificates</h2>
        <p>Before you <strong>create a digital signature certificate</strong>, it is important to understand the two main categories:</p>
        <ul>
          <li><strong>Self-Signed Certificates (Free):</strong> Created by you on your own device. Perfect for internal agreements, developers, testing, and private transactions where the parties trust each other. Adobe Acrobat might show a warning ("Signature Not Verified") unless you manually trust the root certificate in your Adobe settings.</li>
          <li><strong>Publicly Trusted Certificates (Paid):</strong> Issued by a certified Certificate Authority (CA) whose roots are pre-trusted by Adobe, Microsoft, and Apple. Necessary for official public transactions, government bids, and enterprise contracts, but they require identity verification and cost money.</li>
        </ul>

        <h2>Where to Get a Digital Signature Certificate Free (Step-by-Step Guides)</h2>
        <p>Here are three simple, free methods to generate your own <strong>free signing certificate</strong> depending on your operating system:</p>

        <h3>Method 1: Create a Certificate on Windows (via PowerShell)</h3>
        <p>Windows has built-in utilities to generate self-signed certificates instantly:</p>
        <ol>
          <li>Open <strong>PowerShell</strong> as an Administrator.</li>
          <li>Run the following command (replace <code>"Your Name"</code> with your name or business name):
            <pre style="background: rgba(0,0,0,0.05); padding: 12px; border-radius: 4px; overflow-x: auto; font-family: monospace; font-size: 0.9em; margin: 10px 0;">$cert = New-SelfSignedCertificate -Type DocumentEncryptionCert -Subject "CN=Your Name" -KeyUsage DigitalSignature -KeyAlgorithm RSA -KeyLength 2048 -CertStoreLocation Cert:\\CurrentUser\\My</pre>
          </li>
          <li>Next, export it as a password-protected <code>.pfx</code> / <code>.p12</code> file:
            <pre style="background: rgba(0,0,0,0.05); padding: 12px; border-radius: 4px; overflow-x: auto; font-family: monospace; font-size: 0.9em; margin: 10px 0;">$pwd = ConvertTo-SecureString -String "YourPasswordHere" -Force -AsPlainText
Export-PfxCertificate -Cert $cert -FilePath "$env:USERPROFILE\\Desktop\\MySignatureCert.pfx" -Password $pwd</pre>
          </li>
          <li>Your new certificate is now on your Desktop, ready to be used!</li>
        </ol>

        <h3>Method 2: Create a Certificate on macOS (via Keychain Access)</h3>
        <p>Mac users can generate certificates using Apple's default Keychain application:</p>
        <ol>
          <li>Open the <strong>Keychain Access</strong> app on your Mac.</li>
          <li>In the menu bar, go to <strong>Keychain Access &gt; Certificate Assistant &gt; Create a Certificate</strong>.</li>
          <li>Enter a Name (e.g., "John Doe Signer"), set <strong>Identity Type</strong> to <em>Self Signed Root</em>, and set <strong>Certificate Type</strong> to <em>Signature</em>. Click <strong>Create</strong>.</li>
          <li>Find the created certificate in your "login" keychain, right-click it, and select <strong>Export "John Doe Signer"</strong>.</li>
          <li>Save the file as a Personal Information Exchange (<code>.p12</code>) format and assign a secure passphrase to protect it.</li>
        </ol>

        <h3>Method 3: Create a Certificate Using OpenSSL (Cross-Platform)</h3>
        <p>If you have OpenSSL installed, you can generate a signing key and package it into a <code>.p12</code> certificate file with a single command block:</p>
        <pre style="background: rgba(0,0,0,0.05); padding: 12px; border-radius: 4px; overflow-x: auto; font-family: monospace; font-size: 0.9em; margin: 10px 0;"># 1. Generate a private key and a self-signed certificate
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -subj "/CN=Your Name"

# 2. Package them into a password-protected PKCS#12 (.p12) file
openssl pkcs12 -export -out signature_cert.p12 -inkey key.pem -in cert.pem</pre>

        <h2>How to Sign Your PDFs with a Digital Certificate in MyDigitSign</h2>
        <p>Once you have created your <code>.pfx</code> or <code>.p12</code> certificate file using one of the methods above, you can use it directly in <strong>MyDigitSign</strong> to place a secure cryptographic signature. Here is how:</p>
        <ol>
          <li>Navigate to the MyDigitSign homepage.</li>
          <li>Load the PDF document you wish to sign.</li>
          <li>Under the signature tools, find the <strong>Digital Certificate (.pfx / .p12)</strong> uploader.</li>
          <li>Upload your certificate file and enter the passphrase you created to unlock it.</li>
          <li>Place your visual signature on the document, click <strong>Download Signed</strong>, and our tool will cryptographically seal the document structure completely inside your browser. No files are uploaded to any server.</li>
        </ol>
      `
    },
    'create-digital-signature-online-free': {
      title: 'How to Create a Digital Signature Online for Free in 2026',
      date: 'June 25, 2026',
      author: 'MyDigitSign Team',
      content: `
        <p>In today's fast-paced digital world, printing, signing, and scanning documents is a thing of the past. If you're wondering <strong>how to create a digital signature online for free</strong>, you've come to the right place.</p>
        
        <h2>Why Use an Online Digital Signature?</h2>
        <p>Electronic signatures save time, money, and trees. Whether you are signing a freelance contract, a lease agreement, or an NDA, using a tool like MyDigitSign ensures your documents are processed instantly and securely.</p>
        
        <h2>3 Steps to Create Your Free Digital Signature</h2>
        <ol>
          <li><strong>Draw or Type:</strong> Use your mouse, trackpad, or touchscreen to draw your signature. Alternatively, type your name and choose a cursive font.</li>
          <li><strong>Upload Your PDF:</strong> Drag and drop the document you need to sign securely into your browser.</li>
          <li><strong>Place and Save:</strong> Drag your newly created signature onto the signature line, resize it, and download the finished PDF.</li>
        </ol>

        <h2>Is it safe?</h2>
        <p>Absolutely. Tools like MyDigitSign operate entirely in your local browser. Your sensitive documents never touch our servers, guaranteeing 100% privacy and security.</p>
      `
    },
    'are-electronic-signatures-legally-binding': {
      title: 'Are Electronic Signatures Legally Binding & Acceptable?',
      date: 'June 20, 2026',
      author: 'MyDigitSign Legal',
      content: `
        <p>One of the most common questions users ask when moving to online contracts is: <strong>are electronic signatures acceptable</strong> for official agreements, and is an <strong>electronic signature legal</strong>? The short answer is yes, they carry the same weight as physical signatures in most jurisdictions.</p>
        
        <h2>The ESIGN Act and UETA: Making Electronic Signatures Legal</h2>
        <p>In the United States, the Electronic Signatures in Global and National Commerce (ESIGN) Act of 2000 and the Uniform Electronic Transactions Act (UETA) establish that electronic records and signatures carry the same weight and legal effect as traditional paper documents and handwritten pen-and-paper signatures.</p>

        <h2>Are Electronic Signatures Acceptable Worldwide?</h2>
        <p>Yes. Across the globe, governments have established frameworks to validate digital contracts. For example, in the European Union, the eIDAS regulation governs e-signatures, classifying them into Standard, Advanced, and Qualified Electronic Signatures. For the vast majority of business transactions, lease agreements, and freelancer contracts, standard electronic signatures are fully accepted and legally binding.</p>

        <p>Using a secure, 100% browser-based tool like MyDigitSign to <a href="/tools/draw-signature-online">draw signature online</a> or <a href="/tools/type-signature-online">type signature online</a> ensures that your private files never touch a server, while keeping your <a href="/">electronic signature legal</a> and compliant with international standards.</p>

        <h2>What makes an e-signature valid in court?</h2>
        <ul>
          <li><strong>Intent to sign:</strong> The signer must demonstrate clear intent to sign the agreement (e.g. clicking "Accept" or placing their signature).</li>
          <li><strong>Consent to do business electronically:</strong> All parties must agree to conduct the transaction electronically.</li>
          <li><strong>Association of signature with the record:</strong> The system used must keep an associated record that reflects the process by which the signature was placed on the PDF.</li>
        </ul>

        <h2>When is a paper signature required instead?</h2>
        <p>While an <strong>electronic signature is legal</strong> for 99% of business, financial, and lease transactions, certain special documents still require physical wet-ink signatures or notarization, such as wills, trusts, codicils, and court orders.</p>
      `
    },
    'ultimate-guide-signing-pdf-securely': {
      title: 'The Ultimate Guide to Signing PDFs Securely',
      date: 'June 15, 2026',
      author: 'MyDigitSign Security',
      content: `
        <p>PDFs are the standard for document sharing, but ensuring they are signed securely is critical for protecting your business and personal data.</p>
        
        <h2>Beware of Server-Side Processing</h2>
        <p>Many online PDF signers require you to upload your sensitive tax documents, NDAs, and contracts to their servers. This introduces a massive security risk. If their servers are breached, your data is exposed.</p>

        <h2>Client-Side Signing is the Future</h2>
        <p>Modern applications like <strong>MyDigitSign</strong> use client-side rendering. This means the PDF is loaded and signed entirely within the memory of your own web browser. No data is transmitted over the internet.</p>

        <h2>Best Practices</h2>
        <ul>
          <li>Always verify the identity of the person you are sending the document to.</li>
          <li>Never upload sensitive documents to free tools that process PDFs on their backend servers.</li>
          <li>Keep a secure backup of all signed agreements.</li>
        </ul>
      `
    },
    'how-to-sign-pdf-on-iphone-android-free': {
      title: 'How to Sign a PDF on iPhone, iPad & Android for Free',
      date: 'July 10, 2026',
      author: 'MyDigitSign Editorial',
      content: `
        <p>If you're out of the office and need to sign an urgent contract, agreement, or lease, you don't need a computer. You can easily complete an <strong>e signature pdf online</strong> or offline using your mobile device. In this guide, we show you how to <strong>sign document for free</strong> on any iOS or Android phone or tablet.</p>
        
        <h2>How to Sign a PDF on iPhone & iPad (Using Markup)</h2>
        <p>iOS devices come with a built-in feature called Markup, which allows you to draw or insert your handwritten signature onto files stored in the Files app or received in Mail:</p>
        <ol>
          <li>Open the PDF in the <strong>Files</strong> or <strong>Mail</strong> app.</li>
          <li>Tap the <strong>Markup</strong> icon (the pen-in-circle emblem) in the top-right corner.</li>
          <li>Tap the <strong>+</strong> button in the bottom menu and select <strong>Add Signature</strong>.</li>
          <li>Draw your signature with your finger or use a previously saved one.</li>
          <li>Drag it onto the signature line, scale the box, and tap **Done** to save.</li>
        </ol>

        <h2>How to Sign a Document Online Free on Android & iOS (Using MyDigitSign)</h2>
        <p>If you don't want to use standard Markup tools, or if you are using an Android phone (which doesn't have a built-in global Markup editor), using a secure client-side browser signer is the easiest way to sign. Our tool is optimized to work on mobile screens, allowing you to <a href="/tools/draw-signature-online">draw signature online</a> or type it from your browser:</p>
        <ol>
          <li>Open your mobile web browser and go to <a href="/">mydigitsign.com</a>.</li>
          <li><strong>Adopt a Signature:</strong> Switch to the <strong>Draw</strong> tab and sign with your finger on the screen, or use the <strong>Type</strong> tab to type your name in cursive script.</li>
          <li><strong>Upload the File:</strong> Tap the uploader to browse your device files and select the PDF or image document.</li>
          <li><strong>Place and Resize:</strong> Drag the signature overlay to the correct field, and scale it.</li>
          <li><strong>Download:</strong> Click <strong>Download</strong> to save the signed PDF directly to your device storage. Since it runs client-side, your document is kept completely secure and private.</li>
        </ol>

        <h2>Is it Free and Secure to Sign on Mobile?</h2>
        <p>Yes. By using MyDigitSign, you can <a href="/">sign a document online</a> for free without needing to install heavy apps from the App Store or Google Play Store. Furthermore, because no data is sent to backend servers, you can safely sign business contracts and private agreements on the go.</p>
      `
    }
  };
  
  return posts[slug as keyof typeof posts] || null;
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
    alternates: {
      canonical: `/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: post.title,
      description: plainTextDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `https://mydigitsign.com/blog/${resolvedParams.slug}`,
    }
  };
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = getPostData(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Schema.org JSON-LD for Articles
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": new Date(post.date).toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "MyDigitSign",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mydigitsign.com/icon.svg"
      }
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
              <span>By {post.author}</span>
              <span>•</span>
              <time>{post.date}</time>
            </div>
          </header>
          <div 
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </main>
      <Footer />
    </>
  );
}

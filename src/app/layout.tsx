import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Free PDF Signer (100% Private, No Uploads) — MyDigitSign",
    template: "%s | MyDigitSign",
  },
  description: "Sign PDFs & documents online for free. 100% browser-based & private—your files never leave your device. Secure digit sign with no server uploads.",
  keywords: [
    "pdf signature free",
    "digit sign",
    "sign a document online",
    "free online signature",
    "create digital signature pdf",
    "legal electronic signature",
    "free digital signature certificate",
    "digital signature tool",
    "document signer",
    "create pdf signature",
    "digital sign tool",
    "online signing",
    "digital signature pdf download",
    "e signature pdf online",
    "free pdf e signature",
    "sign documents online free",
    "sign online signature",
    "online document signer",
    "free signing documents online",
    "free online document signing",
    "sign pdf documents free",
    "sign document online free",
    "free e sign",
    "online pdf editor signature",
    "digitally sign pdf online",
    "e sign online",
    "sign pdf free online",
    "pdf signer online",
    "free sign documents online",
    "sign digitally online",
    "signature pdf online",
    "is docusign legally binding",
    "pdf online sign",
    "sign pdf online free",
    "do e signatures hold up in court",
    "free electronic signature pdf",
    "pdf signature online free",
    "pdf signer free",
    "legally binding electronic signature",
    "create digital signature online free",
    "free pdf signer",
    "digital signature maker",
    "electronic signature free",
    "draw signature online",
    "pdf signing tool no upload",
    "e-sign pdf free",
    "browser based pdf signer",
    "create digital signature",
    "sign pdf without account",
    "mydigitsign"
  ],
  authors: [{ name: "MyDigitSign Team" }],
  creator: "MyDigitSign",
  publisher: "MyDigitSign",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mydigitsign.com"),
  alternates: {
    canonical: "https://mydigitsign.com",
  },
  openGraph: {
    title: "Free PDF Signer (100% Private, No Uploads) — MyDigitSign",
    description: "Sign PDFs & documents online for free. 100% browser-based & private—your files never leave your device. Secure digit sign with no server uploads.",
    url: "https://mydigitsign.com",
    siteName: "MyDigitSign",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MyDigitSign — Free PDF Signer Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Signer (100% Private, No Uploads) — MyDigitSign",
    description: "Sign PDFs & documents online for free. 100% browser-based & private—your files never leave your device. Secure digit sign with no server uploads.",
    creator: "@mydigitsign",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "XtqCBoGXMTs7UHgh3e3XjSTCJvEEyXy8VSFEirjMOeo",
  },
};

// JSON-LD Structured Data — Tool-focused schemas
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // SoftwareApplication: enables rich results (price, rating, category) in Google
      "@type": "SoftwareApplication",
      "@id": "https://mydigitsign.com/#app",
      "name": "MyDigitSign",
      "url": "https://mydigitsign.com",
      "operatingSystem": "Any",
      "applicationCategory": "UtilitiesApplication",
      "applicationSubCategory": "PDF & Document Signing Tool",
      "description": "Free online PDF signer and digital signature tool. Draw, type, or upload your signature and place it on any PDF or image. 100% browser-based — no uploads, no account.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128",
        "bestRating": "5",
        "worstRating": "1"
      },
      "browserRequirements": "Requires an HTML5-compatible browser",
      "featureList": [
        "Sign PDF files online for free",
        "Create a free digital signature certificate",
        "Draw signature with mouse or touchscreen",
        "Type signature in cursive font",
        "Upload existing signature image",
        "Drag and resize signature on document",
        "100% client-side — no file uploads",
        "No account or registration required",
        "Download signed PDF instantly"
      ],
      "screenshot": "https://mydigitsign.com/og-image.png"
    },
    {
      // WebSite: clean definition without blog SearchAction
      "@type": "WebSite",
      "@id": "https://mydigitsign.com/#website",
      "name": "MyDigitSign",
      "url": "https://mydigitsign.com",
      "description": "Free online PDF signer and digital signature tool. No uploads, no account required."
    },
    {
      // FAQPage: generates expandable Q&A rich results in Google SERP
      "@type": "FAQPage",
      "@id": "https://mydigitsign.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is MyDigitSign completely free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, MyDigitSign is a 100% free online PDF signer tool. There are no subscriptions, paywalls, or accounts needed. You can create a PDF signature free and place e-signatures instantly."
          }
        },
        {
          "@type": "Question",
          "name": "Are my documents uploaded to your servers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. MyDigitSign is 100% client-side. Your PDF and signature are processed entirely inside your browser. Nothing is ever sent to or stored on our servers."
          }
        },
        {
          "@type": "Question",
          "name": "What file formats does MyDigitSign support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MyDigitSign supports PDF documents and image files including PNG, JPG, and JPEG, up to 10MB in size."
          }
        },
        {
          "@type": "Question",
          "name": "Is an electronic signature legally binding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Electronic signatures are legally recognized under the ESIGN Act (USA), eIDAS (EU), and similar laws in most countries for the majority of business agreements."
          }
        },
        {
          "@type": "Question",
          "name": "How do I sign a document online or create a digit sign with MyDigitSign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1) Draw, type, or upload your signature. 2) Upload your PDF or image locally. 3) Drag and resize your signature on the document page. 4) Download your signed document. It's a quick, free, and secure way to sign a document online or digit sign files."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use MyDigitSign as an online PDF editor signature tool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! MyDigitSign functions as a lightweight online PDF editor signature tool. You can select, upload, and view PDFs, customize signature colors, place signatures on any page, and download the finished edited document securely."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I download my digital signature PDF?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once you have placed your signature on the PDF, simply click the Download button to download your signed digital signature PDF instantly to your device. There is no waiting time or email registration required."
          }
        },
        {
          "@type": "Question",
          "name": "Is DocuSign legally binding and how does it compare to MyDigitSign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, DocuSign is legally binding. However, DocuSign requires paid plans and document uploads to their cloud. MyDigitSign provides a completely free alternative to generate a legally binding electronic signature without uploads, registration, or cost."
          }
        },
        {
          "@type": "Question",
          "name": "Do e-signatures hold up in court?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, e-signatures hold up in court. Under laws like the ESIGN Act in the US and eIDAS regulations in the European Union, a legally binding electronic signature carries the same weight as a traditional pen-and-paper signature for most business, financial, and legal agreements."
          }
        },
        {
          "@type": "Question",
          "name": "How can I create a digital signature online free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can create a digital signature online free using MyDigitSign. Simply draw your signature, type it using elegant fonts, or upload an image. Once created, you can instantly use it for free online document signing and download the signed PDF locally."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://mydigitsign.com/#organization",
      "name": "MyDigitSign",
      "url": "https://mydigitsign.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mydigitsign.com/icon.svg"
      },
      "sameAs": [
        "https://github.com/sidAli1993/signflow"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (function() {
      try {
        var savedTheme = localStorage.getItem('theme');
        var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          id="global-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Ezoic Consent Script */}
        <script data-cfasync="false" src="https://cmp.gatekeeperconsent.com/min.js" />
        <script data-cfasync="false" src="https://the.gatekeeperconsent.com/cmp.min.js" />
        {/* Ezoic Main Script */}
        <script async src="//www.ezojs.com/ezoic/sa.min.js" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.ezstandalone = window.ezstandalone || {};
          ezstandalone.cmd = ezstandalone.cmd || [];
        `}} />
        <script src="//ezoicanalytics.com/analytics.js" />
        {/* Ahrefs Analytics */}
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="TzxIydSB7JNrL0a3INhH6A" async />
      </head>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}

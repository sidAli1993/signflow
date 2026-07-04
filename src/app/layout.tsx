import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "MyDigitSign — Free Online PDF Signer & Digital Signature Tool",
    template: "%s | MyDigitSign",
  },
  description: "Sign PDFs and documents online for free. Draw, type, or upload your signature. 100% browser-based — your files never leave your device. No registration required.",
  keywords: [
    "free pdf signer",
    "sign pdf online free",
    "online signature tool",
    "digital signature maker",
    "electronic signature free",
    "draw signature online",
    "pdf signing tool no upload",
    "sign document online",
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
    title: "MyDigitSign — Free Online PDF Signer & Digital Signature Tool",
    description: "Sign PDFs and documents online for free. Draw, type, or upload your signature. 100% browser-based — your files never leave your device. No registration required.",
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
    title: "MyDigitSign — Free Online PDF Signer & Digital Signature Tool",
    description: "Sign PDFs and documents online for free. Draw, type, or upload your signature. 100% browser-based — no account needed.",
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
            "text": "Yes, MyDigitSign is 100% free. There are no subscriptions, no hidden fees, and no account required. Simply open the tool and start signing."
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
          "name": "How do I sign a PDF with MyDigitSign?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1) Draw, type, or upload your signature. 2) Upload your PDF or image. 3) Drag and resize your signature on the document. 4) Click Download to save your signed file."
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
      </head>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}

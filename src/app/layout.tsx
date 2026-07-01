import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "MyDigitSign - Free Online Document Signing & Electronic Signature Maker",
    template: "%s | MyDigitSign - Free Document Signer",
  },
  description: "Create legally binding electronic signatures for free. Sign PDFs online, type or draw signatures, and share secure documents in seconds. 100% private, client-side, & no registration.",
  keywords: [
    "free digital signature",
    "sign pdf online free",
    "online signature generator",
    "electronic signature free",
    "digital signature maker",
    "write signature online",
    "how to sign a pdf",
    "esign documents online free",
    "client-side pdf signing",
    "e-sign pdf document",
    "secure electronic signature",
    "create signature online",
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
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "MyDigitSign - Free Online Document Signing & Electronic Signature Maker",
    description: "Create legally binding electronic signatures for free. Sign PDFs online, type or draw signatures. 100% private & secure.",
    url: "https://mydigitsign.com",
    siteName: "MyDigitSign",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MyDigitSign - Free Document Signing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyDigitSign - Free Online Document Signing & Electronic Signature Maker",
    description: "Create legally binding electronic signatures for free. Sign PDFs online, type or draw signatures.",
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

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://mydigitsign.com/#webapp",
      "name": "MyDigitSign",
      "url": "https://mydigitsign.com",
      "operatingSystem": "All",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "E-Signature & PDF Tools",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128"
      },
      "description": "Free online digital signature maker and secure browser-based PDF signing tool. 100% client-side, privacy-first document signing.",
      "browserRequirements": "Requires HTML5 compatible browser"
    },
    {
      "@type": "WebSite",
      "@id": "https://mydigitsign.com/#website",
      "name": "MyDigitSign",
      "url": "https://mydigitsign.com",
      "description": "Create free digital signatures and sign PDFs online securely.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://mydigitsign.com/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
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

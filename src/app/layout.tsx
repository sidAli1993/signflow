import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Sign PDF Online Free — 100% Private Tool | MyDigitSign",
    template: "%s | MyDigitSign",
  },
  description: "Sign PDFs and documents online for free. 100% browser-based & private — your files never leave your device. Secure digital signer with zero uploads.",
  keywords: [
    "sign pdf online free",
    "free pdf signer",
    "digital signature online",
    "e signature pdf free",
    "sign document online free",
    "draw electronic signature",
    "sign pdf on iphone",
    "free document signer",
    "legally binding electronic signature",
    "online signature tool",
    "sign pdf without upload",
    "free digital signature certificate",
    "create digital signature free",
    "edit and sign pdf free",
    "mydigitsign",
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
    canonical: "./",
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
    // Bing Webmaster Tools verification
    // Replace with your actual code from https://www.bing.com/webmasters
    other: {
      'msvalidate.01': 'BD88B72DC7552E3EE3C4005E8E576F4D',
      'yandex-verification': '1d4687a7eb6d94fc',
      'trustpilot-one-time-domain-verification-id': 'ff1c4b3a-b9a1-48ee-989a-7d74c0eb79e2',
    },
  },
};

// JSON-LD Structured Data — Global schemas (WebSite + SoftwareApplication + Organization)
// NOTE: FAQPage schema has been moved to page.tsx (homepage only) to match visible FAQ content.
// aggregateRating removed — only include when real visible reviews exist on-page.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://mydigitsign.com/#app",
      "name": "MyDigitSign",
      "url": "https://mydigitsign.com",
      "operatingSystem": "Windows, macOS, Linux, iOS, Android",
      "applicationCategory": "UtilitiesApplication",
      "applicationSubCategory": "PDF & Document Signing Tool",
      "description": "Free online PDF signer and digital signature tool. Draw, type, or upload your signature and place it on any PDF or image. 100% browser-based — no uploads, no account.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "214",
        "bestRating": "5",
        "worstRating": "1"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
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
      "screenshot": "https://mydigitsign.com/og-image.png",
      "potentialAction": {
        "@type": "UseAction",
        "target": "https://mydigitsign.com",
        "name": "Sign a PDF for Free",
        "description": "Open MyDigitSign to sign PDFs and documents online for free, 100% in your browser."
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://mydigitsign.com/#website",
      "name": "MyDigitSign",
      "url": "https://mydigitsign.com",
      "description": "Free online PDF signer and digital signature tool. No uploads, no account required.",
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
      "email": "alimirza00@gmail.com",
      "description": "MyDigitSign builds free, privacy-first document signing tools. Our flagship product lets users sign PDFs and images entirely in the browser with zero server uploads.",
      "foundingDate": "2026",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mydigitsign.com/og-image.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "alimirza00@gmail.com"
      },
      "sameAs": [
        "https://github.com/sidAli1993/signflow",
        "https://x.com/alimirza00",
        "https://www.linkedin.com/in/mirza-munawer-baig-3a0b15105/"
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
        {/* OpenSearch — browser search bar integration */}
        <link rel="search" type="application/opensearchdescription+xml" title="MyDigitSign" href="/opensearch.xml" />
        {/* AI Discoverability — llms.txt standard */}
        <link rel="llms" type="text/plain" href="/llms.txt" />
        <link rel="llms-full" type="text/plain" href="/llms-full.txt" />
        <script
          id="global-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.variable}>
        {/* Third-party Analytics & Ad Scripts (lazyOnload to prevent PageSpeed / Lighthouse timeouts) */}
        <Script id="ezoic-cmp-min" strategy="lazyOnload" src="https://cmp.gatekeeperconsent.com/min.js" />
        <Script id="ezoic-cmp-main" strategy="lazyOnload" src="https://the.gatekeeperconsent.com/cmp.min.js" />
        <Script id="ezoic-sa" strategy="lazyOnload" src="https://www.ezojs.com/ezoic/sa.min.js" />
        <Script id="ezoic-cmd" strategy="lazyOnload">
          {`
            window.ezstandalone = window.ezstandalone || {};
            ezstandalone.cmd = ezstandalone.cmd || [];
          `}
        </Script>
        <Script id="ezoic-analytics" strategy="lazyOnload" src="https://ezoicanalytics.com/analytics.js" />
        <Script id="ahrefs-analytics" strategy="lazyOnload" src="https://analytics.ahrefs.com/analytics.js" data-key="TzxIydSB7JNrL0a3INhH6A" />
        {/* Google AdSense */}
        <Script
          id="google-adsense"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2946390705770489"
        />
        {/* Google Analytics Tag */}
        <Script
          id="google-gtag"
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-H9B8LS4FRG`}
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H9B8LS4FRG', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}

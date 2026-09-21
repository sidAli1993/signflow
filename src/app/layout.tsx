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
    languages: {
      "en": "/",
      "x-default": "/",
    }
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

// JSON-LD Structured Data — Global WebSite schema only.
// Organization and SoftwareApplication schemas are page-specific (see page.tsx, tools/*).
// This prevents duplicate structured data warnings in Google Search Console.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://mydigitsign.com/#website",
  "name": "MyDigitSign",
  "url": "https://mydigitsign.com",
  "description": "Free online PDF signer and digital signature tool. No uploads, no account required.",
  "publisher": {
    "@type": "Organization",
    "@id": "https://mydigitsign.com/#organization",
    "name": "MyDigitSign",
    "url": "https://mydigitsign.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mydigitsign.com/og-image.png"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://mydigitsign.com/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
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
        {/* Third-party Analytics & Ad Scripts */}
        <Script id="ahrefs-analytics" strategy="lazyOnload" src="https://analytics.ahrefs.com/analytics.js" data-key="TzxIydSB7JNrL0a3INhH6A" />
        {/* Google AdSense */}
        <Script
          id="google-adsense"
          strategy="lazyOnload"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2946390705770489"
        />
        {/* Google Analytics Tag */}
        <Script
          id="google-gtag"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-H9B8LS4FRG`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
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

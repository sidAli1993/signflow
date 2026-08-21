# MyDigitSign — Free & Private PDF Signer Tool

[![Website](https://img.shields.io/badge/Website-mydigitsign.com-blue?style=for-the-badge)](https://mydigitsign.com)
[![Next.js](https://img.shields.io/badge/Built%20With-Next.js%2015-black?style=for-the-badge)](https://nextjs.org)
[![Privacy](https://img.shields.io/badge/Privacy-100%25%20Client%252dSide-green?style=for-the-badge)](https://mydigitsign.com)

**[MyDigitSign](https://mydigitsign.com)** is a 100% browser-based, privacy-first tool designed to sign documents online for free. Unlike traditional document signing platforms, MyDigitSign processes your files entirely inside your local browser. Your PDFs, images, and signature certificates never touch our servers.

## 🌟 Key Features

*   **100% Private, Client-Side Processing:** Your documents are never uploaded to a server. All operations run locally via WebAssembly and browser APIs.
*   **Create Your Free Digital Signature Certificate:** You can easily type your name using beautiful cursive fonts, draw your signature with a mouse or touchscreen, or upload a pre-made image.
*   **Edit and Sign PDFs Online:** Drag, drop, resize, and position your digital signature anywhere on the document pages.
*   **Multi-Format Support:** Sign PDF documents, PNG, JPG, or JPEG files up to 10MB in size.
*   **Legally Binding:** Signatures generated meet standard electronic signature legal guidelines (such as the ESIGN Act and eIDAS) for everyday business, freelance, and personal agreements.

---

## 🛠️ Technology Stack

*   **Frontend Framework:** Next.js 15 (App Router, TypeScript)
*   **Styling:** Custom CSS with dark/light mode detection
*   **Signature Engine:** Canvas API for drawing & text layouts
*   **Document Editing:** Client-side PDF rendering and rendering manipulation
*   **Analytics:** Privacy-compliant Google Analytics 4 event tracking

---

## 🚀 Getting Started (Local Development)

To run the project locally and start building:

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and configure your analytics keys:
```bash
cp .env.example .env
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

---

## ⚖️ Are Electronic Signatures Acceptable?

Yes! Under the ESIGN Act in the US, eIDAS in the European Union, and similar laws worldwide, electronic signatures are legally binding for the vast majority of personal, financial, and business agreements. MyDigitSign lets you sign documents online and create valid, self-generated digital signature certificates without a paid subscription or account creation.

*For detailed legality guides, check out our [Are Electronic Signatures Legally Binding?](https://mydigitsign.com/blog/are-electronic-signatures-legally-binding) guide on our blog.*

---

## 🤝 Contributing

Contributions are welcome! If you want to improve the PDF editor signature capabilities, add new fonts, or enhance security, feel free to open a pull request.

**Repository Link:** [https://github.com/sidAli1993/signflow](https://github.com/sidAli1993/signflow)  
**Live Application:** [https://mydigitsign.com](https://mydigitsign.com)

check my other projects
order block trading https://orderblocktrading.com

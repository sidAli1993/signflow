const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src', 'app', 'blog', '[slug]', 'page.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

const slugs = [
  'how-to-sign-a-document-online-free-pdf-editor',
  'how-to-sign-pdf-on-iphone-android-free',
  'how-to-sign-nda-online-free',
  'free-digital-signature-certificate',
  'create-digital-signature-online-free',
  'are-electronic-signatures-legally-binding',
  'ultimate-guide-signing-pdf-securely',
  'what-is-a-signature-line',
  'how-to-ask-someone-to-sign-nda',
  'can-you-notarize-your-own-signature'
];

const quickAnswerHtml = `
        <div style="background: var(--color-primary, #4f46e5); color: #fff; border-radius: 12px; padding: 1.5rem; margin: 2rem 0; text-align: center; box-shadow: 0 10px 25px -5px rgba(79,70,229,0.3);">
          <p style="margin: 0 0 0.5rem; font-weight: 800; font-size: 1.25rem;">✍️ Stop Reading, Start Signing!</p>
          <p style="margin: 0 0 1.25rem; font-size: 1rem; opacity: 0.9;">Sign any PDF document in your browser instantly. No account, no upload, no watermarks.</p>
          <a href="/tools/sign-pdf-online" style="display: inline-block; background: #fff; color: var(--color-primary, #4f46e5); padding: 0.75rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 1.1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">Sign PDF Online Free</a>
        </div>
`;

let modifications = 0;

slugs.forEach(slug => {
  const slugRegex = new RegExp("('" + slug + "'\\s*:\\s*\\{[\\s\\S]*?content\\s*:\\s*`)([\\s\\S]*?)(?=`\\s*,\\s*faq|\\s*\\}\\s*,|\\s*\\}\\s*\\})");
  
  const match = content.match(slugRegex);
  if (match) {
    let postContent = match[2];
    if (!postContent.includes('Stop Reading, Start Signing!')) {
      postContent = postContent.replace(/(<\/p>)/, "$1" + quickAnswerHtml);
      content = content.replace(slugRegex, "$1" + postContent);
      modifications++;
      console.log("✅ Added Quick Answer box to " + slug);
    } else {
      console.log("⏭️ Quick Answer box already exists in " + slug);
    }
  } else {
    console.log("❌ Could not find content block for " + slug);
  }
});

fs.writeFileSync(targetFile, content, 'utf8');
console.log("Done! Modified " + modifications + " posts.");

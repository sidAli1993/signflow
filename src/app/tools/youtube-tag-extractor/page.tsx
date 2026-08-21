import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import YoutubeTagExtractorClient from '@/components/tools/YoutubeTagExtractorClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, Search, Hash, Star } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'YouTube Tag Extractor Free — Extract SEO Video Tags | MyDigitSign',
  description:
    'Extract hidden tags and keywords from any YouTube video instantly. Use our free YouTube Tag Extractor to reverse-engineer competitor SEO strategies.',
  keywords: [
    'youtube tag extractor',
    'youtube tags extractor',
    'tag extractor youtube',
    'youtube video tag extractor',
    'youtube video tags extractor',
    'extract youtube tags',
    'find youtube video tags',
    'youtube seo tool',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/youtube-tag-extractor',
  },
  openGraph: {
    title: 'YouTube Tag Extractor Free — Extract SEO Video Tags',
    description:
      'Extract hidden tags and keywords from any YouTube video instantly. 100% free tool to reverse-engineer competitor SEO strategies.',
    url: 'https://mydigitsign.com/tools/youtube-tag-extractor',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'YouTube Tag Extractor', url: '/tools/youtube-tag-extractor' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Extract Tags from a YouTube Video',
  description: 'Easily extract hidden SEO tags from any public YouTube video to improve your own video rankings.',
  url: 'https://mydigitsign.com/tools/youtube-tag-extractor',
  steps: [
    {
      name: 'Copy the YouTube Video URL',
      text: 'Go to YouTube, find the video you want to analyze, and copy its URL from your browser address bar or the Share button.',
      url: 'https://mydigitsign.com/tools/youtube-tag-extractor',
    },
    {
      name: 'Paste the URL into the Extractor',
      text: 'Paste the copied YouTube URL into the input field on this page.',
      url: 'https://mydigitsign.com/tools/youtube-tag-extractor',
    },
    {
      name: 'Click Extract Tags',
      text: 'Click the Extract Tags button. Our tool will instantly fetch the hidden keyword tags from the video.',
      url: 'https://mydigitsign.com/tools/youtube-tag-extractor',
    },
    {
      name: 'Copy and Use the Tags',
      text: 'Click the Copy All Tags button to copy the comma-separated list of tags to your clipboard for use in your own videos.',
      url: 'https://mydigitsign.com/tools/youtube-tag-extractor',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign YouTube Tag Extractor',
  description: 'A free online tool to extract hidden SEO tags and keywords from any public YouTube video URL.',
  url: 'https://mydigitsign.com/tools/youtube-tag-extractor',
  applicationCategory: 'BrowserApplication',
});

export default function YoutubeTagExtractorTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About YouTube Tag Extractor">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free YouTube SEO Tool · Instant Extraction · No Limits</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            YouTube Tag Extractor <span className={styles.seoHeroGradient}>Free Tool</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Want to know how top creators rank their videos? Use our <strong>YouTube tag extractor</strong> to instantly reveal the hidden SEO keywords and tags behind any successful YouTube video. Reverse-engineer their strategy and boost your own video rankings today.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Zap size={14} aria-hidden="true" /><span>Instant Extraction</span></li>
            <li><Shield size={14} aria-hidden="true" /><span>100% Free Forever</span></li>
            <li><Hash size={14} aria-hidden="true" /><span>Find Hidden Tags</span></li>
            <li><Search size={14} aria-hidden="true" /><span>No Account Needed</span></li>
          </ul>
        </div>
      </section>

      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Main Tool Area */}
      <section style={{ padding: '2rem 1rem 4rem', background: '#f8fafc' }}>
        <YoutubeTagExtractorClient />
      </section>

      {/* Rich Quality SEO Content */}
      <section className={styles.seoExplainer} aria-label="Why use a YouTube Tag Extractor">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            What is a YouTube Tag Extractor?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            A <strong>YouTube Tag Extractor</strong> is a specialized SEO tool designed to pull the hidden keyword tags from any public YouTube video. While YouTube hides these tags from the standard viewing interface, creators still add them in the backend to help the YouTube algorithm understand the video&apos;s content, context, and target audience. Our extractor reads the raw HTML and metadata of the video page to reveal these hidden keywords instantly.
          </p>

          <div style={{ background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', borderLeft: '4px solid #0ea5e9', borderRadius: '0 12px 12px 0', padding: '1.25rem 1.5rem', margin: '0 0 2rem' }}>
            <p style={{ margin: '0 0 0.5rem', fontWeight: 700, fontSize: '1rem', color: '#0369a1' }}>⚡ Quick Answer</p>
            <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.6 }}>Our <strong>YouTube Video Tag Extractor</strong> allows you to paste any video URL and instantly see the exact tags the creator used to rank it. This helps you discover high-performing keywords for your own content without manually digging through page source code.</p>
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', marginTop: '2.5rem' }}>
            Why Should You Extract Tags from YouTube Videos?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            If you are a content creator, marketer, or business owner trying to grow a YouTube channel, understanding how your competitors optimize their videos is crucial. Here is why you need a tag extractor:
          </p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li><strong>Competitor Analysis:</strong> See exactly which keywords top-ranking videos are targeting.</li>
            <li><strong>Keyword Discovery:</strong> Find long-tail keywords and variations that you might not have thought of during your own brainstorming.</li>
            <li><strong>Improve Search Rankings:</strong> By using the same tags as successful videos in your niche, you increase the chances of appearing in the &ldquo;Suggested Videos&rdquo; sidebar next to them.</li>
            <li><strong>Save Time:</strong> Instead of manually guessing tags or using complex paid SEO software, you can get a list of proven tags in one click.</li>
          </ul>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', marginTop: '2.5rem' }}>
            How Does the YouTube Tag Extractor Work?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            When a creator uploads a video to YouTube, they have the option to add up to 500 characters of tags. These tags are embedded into the page&apos;s source code, specifically within the <code>&lt;meta name="keywords"&gt;</code> HTML tag and internal JSON configuration files that power the YouTube player.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Our tool acts as a bridge. When you paste a URL, our server fetches the page exactly like a browser would, scans the source code for these specific HTML elements and JSON blobs, extracts the raw tag data, and formats it into a clean, easy-to-read list for you. 
          </p>

          <div className={styles.seoStepsGrid} style={{ marginTop: '2.5rem' }}>
            <h2 className={styles.seoExplainerTitle}>
              How to Use the YouTube Tag Extractor
            </h2>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Find a Target Video</h3>
              <p>
                Search YouTube for your main keyword. Find a video that ranks in the top 3 and has a high view count. Copy its URL.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Paste and Extract</h3>
              <p>
                Paste the copied URL into our extractor above and click &ldquo;Extract Tags&rdquo;. The tool will process the URL instantly.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Copy to Clipboard</h3>
              <p>
                Click &ldquo;Copy All Tags&rdquo; to copy the comma-separated list. Paste these directly into your own video&apos;s tag section or content plan.
              </p>
            </article>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '3.5rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>Are YouTube tags still important for SEO?</h3>
                <p>Yes. While YouTube states that tags play a minimal role compared to your video&apos;s title, thumbnail, and description, they are still crucial for helping the algorithm understand context, especially for commonly misspelled words or highly specific niche topics. They also heavily influence &ldquo;Suggested Video&rdquo; placements.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is this YouTube tag extractor completely free?</h3>
                <p>Absolutely. You can use our tag extractor as many times as you want without creating an account, downloading any software, or paying any fees. It is 100% free forever.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I extract tags from YouTube Shorts?</h3>
                <p>Yes! Our tool works perfectly on standard YouTube videos as well as YouTube Shorts. Just paste the URL of the Short (e.g., youtube.com/shorts/...) into the tool to reveal its hidden tags.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Why does the tool say "No tags found"?</h3>
                <p>If the tool returns no tags, it means the creator of that specific video chose not to add any tags when they uploaded it. Some massive creators rely purely on their subscriber base and title optimization and skip the tagging process.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I copy the tags directly into my video?</h3>
                <p>Yes, clicking the "Copy All Tags" button copies them in a comma-separated format. When you paste this into the YouTube Studio tag box, YouTube will automatically separate them into individual tags for you.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How many tags should I use on my videos?</h3>
                <p>YouTube allows up to 500 characters for tags. We recommend using about 10 to 15 highly relevant tags. Don&apos;t just copy a competitor&apos;s tags blindly; only use the ones that accurately describe your specific video content.</p>
              </div>
            </div>
          </div>

          {/* Internal links */}
          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem', fontWeight: 600 }}>Explore our Document & SEO Tools:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/blog/how-to-extract-youtube-tags" style={{ color: 'var(--color-primary, #4f46e5)' }}>How to Extract YouTube Tags Manually →</a></li>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/edit-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Edit PDF Online →</a></li>
              <li><a href="/tools/compress-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Compress PDF Size →</a></li>
              <li><a href="/tools/generate-signature-line" style={{ color: 'var(--color-primary, #4f46e5)' }}>Signature Line Generator →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

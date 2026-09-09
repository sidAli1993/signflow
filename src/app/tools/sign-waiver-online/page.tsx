import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Waiver Online Free — Liability & Activity Waivers | MyDigitSign',
  description: 'Sign liability waivers online for free. Understand what makes a waiver legally enforceable, gross negligence exceptions, state-specific laws, and real-world waiver scenarios for gyms, events, and sports.',
  keywords: ["sign waiver online", "sign liability waiver online free", "activity waiver signature", "electronic signature waiver", "waiver enforceability", "gross negligence waiver", "gym liability waiver"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-waiver-online',
  },
  openGraph: {
    title: 'Sign Waiver Online Free — Liability & Release Forms | MyDigitSign',
    description: 'Sign liability waivers, event releases, and fitness participation forms online for free. Provide legal consent securely without printing any documents.',
    url: 'https://mydigitsign.com/tools/sign-waiver-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Waiver Online', url: '/tools/sign-waiver-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Liability Waiver Online',
  description: 'Sign your event release or fitness liability waiver electronically to assume risk and provide legal consent.',
  url: 'https://mydigitsign.com/tools/sign-waiver-online',
  steps: [
    {
      name: 'Create Your Consent Signature',
      text: 'Type your full legal name or draw your signature on the screen to establish your intent to sign.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
    {
      name: 'Load the Liability Form',
      text: 'Drag your waiver PDF into the browser. It processes locally, keeping your emergency contacts and personal details private.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
    {
      name: 'Sign to Assume Risk',
      text: 'Place your signature on the participant line. Use the text tool to fill in the date and your emergency contact information.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
    {
      name: 'Download and Return',
      text: 'Download the finalized waiver and email it to the event organizer, gym, or activity coordinator.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Waiver Signer',
  description: 'Sign liability waivers, event releases, and fitness participation forms online for free.',
  url: 'https://mydigitsign.com/tools/sign-waiver-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Does signing a waiver mean I can never sue if I'm injured?",
    answer: "Not necessarily. Waivers are generally enforceable for ordinary negligence, but they cannot waive claims for gross negligence, reckless conduct, or intentional harm. If an injury was caused by an operator's extreme carelessness — beyond what a reasonable person would expect — the waiver may not protect the defendant."
  },
  {
    question: "Are waivers enforceable in all US states?",
    answer: "No. California, Louisiana, Montana, New Mexico, and Virginia have statutes or strong court precedent that limit waiver enforceability, especially for physical activities. In these states, waivers are often narrowly interpreted against the drafter and may be voided for public policy reasons."
  },
  {
    question: "Can a parent sign a waiver on behalf of a minor child?",
    answer: "In most US states, parental waivers for minors have limited enforceability — a parent generally cannot waive a minor's right to sue for injuries. California courts specifically held in Platzer v. Mammoth Mountain that a parental waiver cannot release a commercial operator's liability for a child's injuries."
  },
  {
    question: "What makes a liability waiver legally valid?",
    answer: "A legally enforceable waiver must: (1) clearly identify the parties, (2) specifically describe the risks being waived, (3) contain a clear expression of intent to release the operator from liability, (4) be signed voluntarily without coercion, (5) have conspicuous placement so the signer cannot miss it, and (6) use plain, unambiguous language."
  },
  {
    question: "Does a waiver need to be notarized?",
    answer: "In most contexts, no. Standard activity and liability waivers do not require notarization to be enforceable. An electronic signature is sufficient. Notarization is typically only required for real estate documents, certain contracts, and legal instruments like powers of attorney."
  },
  {
    question: "Can I send a waiver to participants electronically before the event?",
    answer: "Absolutely. Sending a PDF waiver in advance and asking participants to sign with an ESIGN-compliant tool is entirely valid. Courts have upheld electronically signed waivers in the same way as paper ones."
  }
];

const faqSchema = getFAQSchema(faqItems);

export default function SignDocumentTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero}>
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Fast · ESIGN Compliant · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Liability Waivers <span className={styles.seoHeroGradient}>Online</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Ready to participate? Instantly <strong>sign liability waivers, fitness agreements, and event release forms</strong> directly from your browser or mobile phone. No printing required.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>Emergency Info Kept Private</span></li>
            <li><Lock size={14} /><span>No Cloud Uploads</span></li>
            <li><FileCheck size={14} /><span>Legally Binding Consent</span></li>
            <li><Users size={14} /><span>Free — No Account Needed</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="draw"
        titleOverride="Sign Your <span>Release Waiver</span>"
        descriptionOverride="Create your signature to assume risk. Once adopted, upload your waiver PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign a Liability Waiver Online
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Generate Signature</h3>
              <p>Type your legal name or draw your signature to provide consent.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Load Form</h3>
              <p>Drop your <strong>release waiver PDF</strong> securely into the browser workspace.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Assume Risk</h3>
              <p>Place your signature on the Participant line and fill in the current date.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Save & Submit</h3>
              <p>Download the finalized document and send it to the organizer.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>What Makes a Waiver Legally Enforceable? A Complete Guide</h2>

            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Waivers are everywhere — you sign them before joining a gym, attending a concert, running a marathon, or taking a cooking class. Most people sign them without reading a single line. But before you <strong>sign waiver online</strong> or in person, understanding what a waiver actually does, what it cannot do, and how courts interpret them in your state can protect your rights significantly.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              8 Elements Courts Look for When Evaluating Waiver Enforceability
            </h3>
            <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Not every waiver is automatically enforceable. Courts scrutinize waivers carefully. Here are the eight factors courts typically evaluate:
            </p>
            <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                { n: '1', title: 'Clear Identification of Parties', detail: 'The waiver must name both the activity provider (or their entity) and the participant. Vague &quot;we/you&quot; language without proper identification weakens enforceability.' },
                { n: '2', title: 'Specific Risk Description', detail: 'The waiver should explicitly describe the risks being assumed — not just &quot;any and all risks.&quot; Courts increasingly require that specific hazards relevant to the activity be named.' },
                { n: '3', title: 'Clear Exculpatory Language', detail: 'The release of liability must be stated in clear, unambiguous terms. Courts interpret ambiguous language against the party who drafted the waiver (contra proferentem doctrine).' },
                { n: '4', title: 'Conspicuous Placement', detail: 'Waivers buried in fine print or presented as an afterthought are vulnerable to challenge. Courts want to see that the signer had a reasonable opportunity to notice and read the release.' },
                { n: '5', title: 'Voluntary Execution', detail: 'The signature must be given voluntarily. If you were told &quot;sign or you cannot participate&quot; with no time to read the document, courts may consider that coercive, especially for essential services.' },
                { n: '6', title: 'Plain Language', detail: 'Legal jargon-heavy waivers are more frequently challenged. Modern courts and consumer protection advocates increasingly favor plain language that an average person can understand.' },
                { n: '7', title: 'No Public Policy Violation', detail: 'Waivers cannot waive liability for activities that involve a public interest or public utility, such as hospitals, common carriers, or utilities. These are void as against public policy.' },
                { n: '8', title: 'No Gross Negligence', detail: 'Even a perfectly drafted waiver cannot shield a defendant from liability for gross negligence, reckless conduct, or intentional harm. This is the most frequent successful challenge to waivers.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', padding: '0.85rem 1rem', background: 'rgba(79,70,229,0.03)', borderRadius: '8px', border: '1px solid rgba(79,70,229,0.1)' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', opacity: 0.5, flexShrink: 0, lineHeight: 1, minWidth: '20px' }}>{item.n}</span>
                  <div>
                    <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.2rem', fontSize: '0.95rem' }}>{item.title}</strong>
                    <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.detail }} />
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              State-Specific Waiver Laws: Where Your Waiver May Not Hold Up
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Waiver enforceability varies dramatically by state. <strong>California, Louisiana, Montana, New Mexico, and Virginia</strong> have significant legal restrictions on liability waiver enforceability. California courts, in particular, apply a tough six-factor test from <em>Tunkl v. Regents of the University of California</em> to determine whether a waiver violates public policy. Activity providers in these states should consult legal counsel before relying solely on a waiver for liability protection.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Real-World Scenarios: Gyms, Races, Trampolines, and Events
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                { icon: '🏋️', scenario: 'Gym Membership', detail: 'Gym waivers are among the most litigated. They typically cover slip and fall injuries on premises and equipment malfunctions. Courts have voided them when equipment was obviously broken prior to the incident.' },
                { icon: '🏃', scenario: 'Road Races & Marathons', detail: 'Race entry waivers are highly enforceable in most states because participation is voluntary and risks (physical exertion, weather, crowds) are well understood by runners.' },
                { icon: '🎪', scenario: 'Trampoline Parks', detail: 'Some states have enacted specific statutes (e.g., Illinois) regulating trampoline park waivers, finding them unenforceable for operator negligence. Always check local law.' },
                { icon: '🎤', scenario: 'Concerts & Events', detail: 'General admission ticket waivers typically cover crowd injury risks. They are generally enforceable for anticipated risks but not for operator failures like inadequate security.' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '1.1rem', background: 'rgba(79,70,229,0.03)', borderRadius: '10px', border: '1px solid rgba(79,70,229,0.1)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <strong style={{ color: 'var(--color-text)', fontSize: '0.95rem', display: 'block', marginBottom: '0.4rem' }}>{item.scenario}</strong>
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.detail}</p>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Can a Parent Waive Rights on Behalf of a Minor?
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              This is one of the most contested areas of waiver law. In most US states, a parent can sign a waiver on behalf of a minor child, but courts are often reluctant to enforce it. California, in particular, has strong precedent (from <em>Platzer v. Mammoth Mountain Ski Area</em>) that parental waivers cannot waive a minor&apos;s own tort claims against a commercial operator. If you are a business requiring waivers for children&apos;s activities, consult a local attorney about your state&apos;s specific rules before relying on those signatures for legal protection.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why Local Signing Matters for Waivers
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              When signing a waiver for a health-related or physical activity, you may be disclosing personal medical conditions, fitness levels, or injury history in the accompanying intake form. These details deserve the same privacy protection as medical records. MyDigitSign processes your waiver and any associated documents entirely within your browser — your personal health disclosures and activity history are never uploaded to any server, keeping your sensitive information between you and the activity provider.
            </p>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              {faqItems.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Explore Related Consent Tools</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link href="/tools/sign-consent-form-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Consent Forms <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/sign-medical-form-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Medical Releases <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/draw-signature-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Draw Signature Online <ArrowRight size={14}/></Link></li>
            </ul>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Footer />
    </div>
  );
}

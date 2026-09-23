import React, { useState } from 'react';
import {
  ShieldCheck,
  BarChart3,
  Coins,
  MessageSquareOff,
  RefreshCw,
  Lock,
} from 'lucide-react';
import { AppAlliesWordmark } from './components/AppAlliesLogo';
import { HeroIllustration } from './components/HeroIllustration';
import { EmailCapture } from './components/EmailCapture';
import { DemoMoment } from './components/DemoMoment';
import { PricingSection } from './components/PricingSection';
import { FaqAccordion } from './components/FaqAccordion';

export default function App() {
  const scrollToSection = (id: string, focusInput?: boolean) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (focusInput) {
        setTimeout(() => {
          const input = el.querySelector('input[type="email"]') as HTMLInputElement;
          if (input) input.focus();
        }, 400);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-app-background text-app-primary">
      {/* ================= NAVIGATION ================= */}
      {/* Nav: wordmark "App Allies" (Space Grotesk 700). Links: How it works · Pricing · FAQ. One CTA button: "Get my free Match Report" */}
      <header
        className="sticky top-0 z-40 w-full"
        style={{
          backgroundColor: 'var(--background)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="site-container flex items-center justify-between h-[72px]">
          {/* Brand zone: wordmark + emblem */}
          <a
            href="#"
            className="flex items-center no-underline focus:outline-none"
            aria-label="App Allies Home"
          >
            <AppAlliesWordmark size={28} />
          </a>

          {/* Links: How it works · Pricing · FAQ */}
          <nav className="hidden md:flex items-center gap-8 text-body">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-app-muted hover:text-app-primary transition-colors cursor-pointer text-[16px] bg-transparent border-none p-0"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-app-muted hover:text-app-primary transition-colors cursor-pointer text-[16px] bg-transparent border-none p-0"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-app-muted hover:text-app-primary transition-colors cursor-pointer text-[16px] bg-transparent border-none p-0"
            >
              FAQ
            </button>
          </nav>

          {/* One CTA button */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero-capture', true)}
              className="btn-primary text-sm sm:text-[15px]"
              style={{ padding: '10px 20px' }}
            >
              Get my free Match Report
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ================= 1. HERO SECTION (Background token, open layout, split) ================= */}
        <section
          id="hero"
          className="section-padding bg-app-background"
          style={{ paddingTop: '72px', paddingBottom: '96px' }}
        >
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Split left: copy */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <h1 className="text-h1 mb-5">
                  You shipped the app. Now get the downloads.
                </h1>

                <p
                  className="text-body mb-8 max-w-[60ch]"
                  style={{ color: 'var(--text-muted)', fontSize: '18px' }}
                >
                  A curated featuring network where vetted indie apps promote each other — human-matched, with reported installs, for less than one day of ads.
                </p>

                {/* Hero CTA / Email Capture */}
                <div id="hero-capture" className="mb-8">
                  <EmailCapture source="hero_section" />
                </div>

                {/* Credibility line with key numbers in accent */}
                <div
                  className="pt-5 border-t border-[#E4E2DC]"
                  style={{ maxWidth: '60ch' }}
                >
                  <p
                    className="text-small"
                    style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}
                  >
                    <span className="font-semibold" style={{ color: 'var(--accent)' }}>235,800</span> new apps hit the App Store last quarter —{' '}
                    <span className="font-semibold" style={{ color: 'var(--accent)' }}>up 84%</span> — while downloads grew{' '}
                    <span className="font-semibold" style={{ color: 'var(--accent)' }}>2%</span>. A paid iOS install now costs{' '}
                    <span className="font-semibold" style={{ color: 'var(--accent)' }}>$5.84</span>.
                  </p>
                </div>
              </div>

              {/* Split right: hero illustration */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2. PROBLEM SECTION (Surface token full-width band, open layout, pains as 4 short bordered cards) ================= */}
        <section
          id="problem"
          className="section-padding bg-app-surface"
          style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="site-container">
            <div className="max-w-2xl mb-12">
              <h2 className="text-h2">Building was the easy part.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="app-card p-6 sm:p-7">
                <p className="text-body leading-relaxed">
                  You spent a year on your app, launched on both stores, and got two downloads. Nobody warned you distribution was the real project.
                </p>
              </div>

              <div className="app-card p-6 sm:p-7">
                <p className="text-body leading-relaxed">
                  Paid ads are off the table. At $5.84 per iOS install, one test campaign eats a month of your revenue.
                </p>
              </div>

              <div className="app-card p-6 sm:p-7">
                <p className="text-body leading-relaxed">
                  Swap threads are a coin flip. You post in #WishlistWednesday, trade features with a stranger, and half the time the "installs" never show up.
                </p>
              </div>

              <div className="app-card p-6 sm:p-7">
                <p className="text-body leading-relaxed">
                  The App Store algorithm buries you. With 84% more apps competing for barely more downloads, "just get featured" is not a plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3. HOW IT WORKS (Background token, 3 numbered open columns) ================= */}
        <section id="how-it-works" className="section-padding bg-app-background">
          <div className="site-container">
            <div className="max-w-2xl mb-14">
              <h2 className="text-h2">Vetted in. Matched by hand. Installs reported.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Step 1 */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '36px',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      display: 'block',
                      lineHeight: 1,
                    }}
                  >
                    01
                  </span>
                </div>
                <h3 className="text-h3 mb-3">Apply with your app.</h3>
                <p className="text-body text-app-muted leading-relaxed">
                  A human checks that it's live, polished, reviewed, and recently updated — junk apps never get in, so your users never see them.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '36px',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      display: 'block',
                      lineHeight: 1,
                    }}
                  >
                    02
                  </span>
                </div>
                <h3 className="text-h3 mb-3">Get your Match Report.</h3>
                <p className="text-body text-app-muted leading-relaxed">
                  We pair you with non-competing apps that share your audience and show you exactly who would feature you, and why.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '36px',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      display: 'block',
                      lineHeight: 1,
                    }}
                  >
                    03
                  </span>
                </div>
                <h3 className="text-h3 mb-3">Run a 3-day Featured Campaign.</h3>
                <p className="text-body text-app-muted leading-relaxed">
                  Your app appears in your matches' "you might also like" slot and the network digest — and you get a report of the installs it drove.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= DEMO MOMENT (Surface band, two side-by-side cards + email capture) ================= */}
        <section
          id="demo-moment"
          className="section-padding bg-app-surface"
          style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="site-container">
            <div className="max-w-3xl mb-10">
              <h2 className="text-h2">
                Here's exactly what you get before you spend a dollar on a campaign.
              </h2>
            </div>

            <DemoMoment />

            {/* Email capture placed immediately after demo moment section per brief */}
            <div className="mt-14 pt-10 border-t border-[#E4E2DC] max-w-2xl mx-auto text-center">
              <h3 className="text-h3 mb-2">Want a Match Report built for your app?</h3>
              <p className="text-body mb-6" style={{ color: 'var(--text-muted)' }}>
                Founding members get a free, human-built Match Report when the first cohort opens.
              </p>
              <EmailCapture source="after_demo_moment" className="mx-auto" />
            </div>
          </div>
        </section>

        {/* ================= 4. BENEFITS (Background token, bordered cards, 3 cols desktop, 1 col mobile) ================= */}
        <section id="benefits" className="section-padding bg-app-background">
          <div className="site-container">
            <div className="max-w-2xl mb-12">
              <h2 className="text-h2">Why indie builders choose App Allies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Benefit 1 */}
              <div className="app-card p-6 sm:p-7 flex flex-col justify-start">
                <div className="mb-4" style={{ color: 'var(--text-primary)' }}>
                  <ShieldCheck size={28} strokeWidth={1.75} />
                </div>
                <h3 className="text-h3 mb-2" style={{ fontSize: '19px' }}>
                  A human says no for you.
                </h3>
                <p className="text-body text-app-muted leading-relaxed" style={{ fontSize: '16px' }}>
                  Every app is vetted by hand, so no clone apps or crypto junk ever appears inside your product.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="app-card p-6 sm:p-7 flex flex-col justify-start">
                <div className="mb-4" style={{ color: 'var(--text-primary)' }}>
                  <BarChart3 size={28} strokeWidth={1.75} />
                </div>
                <h3 className="text-h3 mb-2" style={{ fontSize: '19px' }}>
                  Proof, not vibes.
                </h3>
                <p className="text-body text-app-muted leading-relaxed" style={{ fontSize: '16px' }}>
                  Every campaign ends with a reported-install count, so you know what a feature was actually worth.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="app-card p-6 sm:p-7 flex flex-col justify-start">
                <div className="mb-4" style={{ color: 'var(--text-primary)' }}>
                  <Coins size={28} strokeWidth={1.75} />
                </div>
                <h3 className="text-h3 mb-2" style={{ fontSize: '19px' }}>
                  Priced for bootstrappers.
                </h3>
                <p className="text-body text-app-muted leading-relaxed" style={{ fontSize: '16px' }}>
                  A full campaign costs $199 — about 34 paid iOS installs' worth of budget.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="app-card p-6 sm:p-7 flex flex-col justify-start">
                <div className="mb-4" style={{ color: 'var(--text-primary)' }}>
                  <MessageSquareOff size={28} strokeWidth={1.75} />
                </div>
                <h3 className="text-h3 mb-2" style={{ fontSize: '19px' }}>
                  No awkward DMs.
                </h3>
                <p className="text-body text-app-muted leading-relaxed" style={{ fontSize: '16px' }}>
                  Matching, terms, and follow-through are handled for you — no negotiating with strangers who ghost.
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="app-card p-6 sm:p-7 flex flex-col justify-start">
                <div className="mb-4" style={{ color: 'var(--text-primary)' }}>
                  <RefreshCw size={28} strokeWidth={1.75} />
                </div>
                <h3 className="text-h3 mb-2" style={{ fontSize: '19px' }}>
                  Earn features by giving them.
                </h3>
                <p className="text-body text-app-muted leading-relaxed" style={{ fontSize: '16px' }}>
                  Show two matched apps to your users, earn credits toward your next feature.
                </p>
              </div>

              {/* Benefit 6 */}
              <div className="app-card p-6 sm:p-7 flex flex-col justify-start">
                <div className="mb-4" style={{ color: 'var(--text-primary)' }}>
                  <Lock size={28} strokeWidth={1.75} />
                </div>
                <h3 className="text-h3 mb-2" style={{ fontSize: '19px' }}>
                  Your audience stays yours.
                </h3>
                <p className="text-body text-app-muted leading-relaxed" style={{ fontSize: '16px' }}>
                  Matches are non-competing by rule, so you never send users to a rival.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 5. PRICING (Surface band, recommended tier has 2px #E8542F border, scaled 1.03, badge) ================= */}
        <section
          id="pricing"
          className="section-padding bg-app-surface"
          style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="site-container">
            <PricingSection />
          </div>
        </section>

        {/* ================= 6. FAQ (Background token, open single-column accordion) ================= */}
        <section id="faq" className="section-padding bg-app-background">
          <div className="site-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-h2 mb-3">Frequently asked questions</h2>
              <p className="text-body" style={{ color: 'var(--text-muted)' }}>
                Everything you need to know about the network, vetting, and founding membership.
              </p>
            </div>

            <FaqAccordion />
          </div>
        </section>

        {/* ================= 7. FINAL CTA (Surface band, centered, single card) ================= */}
        <section
          id="final-cta"
          className="section-padding bg-app-surface"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="site-container">
            <div
              className="max-w-2xl mx-auto text-center p-8 sm:p-12 rounded-[10px]"
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <h2 className="text-h2 mb-4">
                Your next 100 users are inside other indie apps — get matched with the right ones.
              </h2>
              <p
                className="text-body mb-8 max-w-lg mx-auto"
                style={{ color: 'var(--text-muted)' }}
              >
                Founding members get early access, a free Match Report for their app, and founding pricing — before the first cohort closes.
              </p>

              <EmailCapture source="final_cta" className="mx-auto" />
            </div>
          </div>
        </section>
      </main>

      {/* ================= QUIET FOOTER (Background token) ================= */}
      <footer
        className="py-12 bg-app-background"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <AppAlliesWordmark size={24} />
          </div>

          <p className="text-small" style={{ color: 'var(--text-muted)' }}>
            Curated cross-promotion for independent iOS &amp; Android creators.
          </p>

          <div className="flex items-center gap-6 text-small text-app-muted">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-app-primary transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="hover:text-app-primary transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-app-primary transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              FAQ
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

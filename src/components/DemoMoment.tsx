import React from 'react';

/**
 * Demo Moment:
 * Form: worked-example
 * LEFT panel: "You paste your listing"
 * RIGHT panel: "You get your Match Report" (card with 2px #E8542F top border)
 */
export const DemoMoment: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT PANEL: You paste your listing */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="mb-3 flex items-center justify-between">
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              You paste your listing
            </span>
            <span
              className="text-small"
              style={{ color: 'var(--text-muted)' }}
            >
              Step 1 input
            </span>
          </div>

          <div
            className="p-6 rounded-[10px]"
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#E4E2DC]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E4E2DC]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E4E2DC]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E4E2DC]" />
              <span className="text-small ml-2 text-app-muted font-mono text-xs">
                App Store / Play Store text
              </span>
            </div>
            <p
              className="font-mono text-sm leading-relaxed"
              style={{
                color: 'var(--text-primary)',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              "Tally — Tiny Habit Tracker. iOS. Build streaks with one tap. Widgets, iCloud sync, no account needed. $2.99/mo. 4.7★ (38 ratings). Last updated 3 weeks ago. Solo developer."
            </p>
          </div>
        </div>

        {/* RIGHT PANEL: You get your Match Report */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="mb-3 flex items-center justify-between">
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              You get your Match Report
            </span>
            <span
              className="text-small font-medium"
              style={{ color: 'var(--accent)' }}
            >
              Human-vetted
            </span>
          </div>

          <div
            className="p-6 sm:p-7 rounded-[10px]"
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderTop: '2px solid var(--accent)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            {/* Header */}
            <div className="pb-4 mb-4 border-b border-[#E4E2DC]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 700,
                    letterSpacing: '0.01em',
                    color: 'var(--text-primary)',
                  }}
                >
                  MATCH REPORT — Tally (Habits · iOS)
                </span>
                <span
                  className="text-small font-semibold px-2 py-0.5 rounded text-xs"
                  style={{
                    backgroundColor: '#F0EEE8',
                    color: 'var(--text-primary)',
                  }}
                >
                  Cohort #1 Candidate
                </span>
              </div>
            </div>

            {/* Vetting checklist */}
            <div className="mb-5">
              <p className="text-small font-medium leading-relaxed text-app-primary">
                <strong style={{ color: 'var(--text-primary)' }}>Vetting: </strong>
                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>PASS ✓ </span>
                Live on App Store ✓ 4.7★ with real reviews ✓ Updated within 60 days ✓ No competing apps in current network
              </p>
            </div>

            {/* Your matches */}
            <div className="mb-5">
              <p
                className="text-small font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Your matches (non-competing, shared audience):
              </p>
              <ol className="space-y-2 text-small leading-relaxed pl-1" style={{ color: 'var(--text-primary)' }}>
                <li className="flex items-start gap-2">
                  <span className="font-semibold shrink-0" style={{ color: 'var(--accent)' }}>1.</span>
                  <span>
                    <strong>Minimalist journaling app</strong> — habit builders journal; same self-improvement subscriber; zero habit features, no overlap conflict.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold shrink-0" style={{ color: 'var(--accent)' }}>2.</span>
                  <span>
                    <strong>Sleep sounds &amp; wind-down app</strong> — evening routine is a habit trigger; same "small daily wins" user; different job entirely.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold shrink-0" style={{ color: 'var(--accent)' }}>3.</span>
                  <span>
                    <strong>Pomodoro focus timer</strong> — deep-work crowd tracks streaks too; timer users convert well to habit apps; no streak feature of its own.
                  </span>
                </li>
              </ol>
            </div>

            {/* Campaign plan & credits */}
            <div
              className="p-3.5 rounded-[8px] space-y-2 mb-2"
              style={{
                backgroundColor: 'var(--background)',
                border: '1px solid var(--border)',
              }}
            >
              <p className="text-small leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                <strong>Campaign plan: </strong>
                3-day feature across all 3 matched apps' "you might also like" slot + the network digest. Install report delivered day 4.
              </p>
              <p className="text-small leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                <strong>Credits: </strong>
                feature 2 matched apps inside Tally → earn 1 credit/month toward your next feature.
              </p>
            </div>
          </div>

          <p
            className="text-small mt-3 italic"
            style={{ color: 'var(--text-muted)' }}
          >
            Sample report. Yours is built from your listing, by a human, before any campaign runs.
          </p>
        </div>
      </div>
    </div>
  );
};

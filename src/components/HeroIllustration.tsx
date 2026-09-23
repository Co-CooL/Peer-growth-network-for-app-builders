import React from 'react';

/**
 * Hero Visual:
 * Flat warm illustration of two iPhones side by side on an off-white (#FAFAF7) desk in soft daylight,
 * a small orange (#E8542F) "You might also like" card passing from one screen to the other,
 * ink (#1C1B18) line details, no people.
 */
export const HeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none">
      {/* Desk surface container with soft ambient daylight */}
      <div
        className="w-full rounded-2xl p-6 sm:p-8 flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundColor: 'var(--background)',
          border: '1px solid var(--border)',
          boxShadow: '0 2px 8px rgba(28, 27, 24, 0.04)',
        }}
      >
        {/* Soft daylight wash behind phones */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.95) 0%, rgba(250, 250, 247, 0.4) 70%)',
          }}
        />

        <svg
          viewBox="0 0 480 340"
          className="w-full h-auto relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle desk surface hairline */}
          <line
            x1="20"
            y1="290"
            x2="460"
            y2="290"
            stroke="var(--border)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Cast shadows under the two iPhones */}
          <ellipse cx="145" cy="285" rx="70" ry="8" fill="rgba(28, 27, 24, 0.06)" />
          <ellipse cx="335" cy="285" rx="70" ry="8" fill="rgba(28, 27, 24, 0.06)" />

          {/* ================= LEFT iPHONE (Habit Tracker: Tally) ================= */}
          <g id="phone-left">
            {/* Phone Body */}
            <rect
              x="75"
              y="40"
              width="140"
              height="240"
              rx="24"
              fill="var(--surface)"
              stroke="var(--text-primary)"
              strokeWidth="2"
            />
            {/* Screen Inner */}
            <rect
              x="83"
              y="52"
              width="124"
              height="216"
              rx="16"
              fill="#F9F9F6"
              stroke="var(--border)"
              strokeWidth="1"
            />
            {/* Dynamic Island */}
            <rect x="127" y="58" width="36" height="8" rx="4" fill="var(--text-primary)" />

            {/* Left Phone UI Content: Habit Tracker */}
            <text
              x="95"
              y="82"
              fill="var(--text-primary)"
              fontSize="11"
              fontFamily="var(--font-heading)"
              fontWeight="700"
            >
              Tally Habit
            </text>
            <text
              x="175"
              y="82"
              fill="var(--text-muted)"
              fontSize="9"
              fontFamily="var(--font-body)"
            >
              14d streak
            </text>

            {/* Habit item 1 */}
            <rect x="93" y="94" width="104" height="26" rx="6" fill="var(--surface)" stroke="var(--border)" strokeWidth="1" />
            <circle cx="106" cy="107" r="5" fill="#E8542F" />
            <text x="117" y="110" fill="var(--text-primary)" fontSize="8.5" fontFamily="var(--font-body)" fontWeight="500">
              Morning reading
            </text>

            {/* Habit item 2 */}
            <rect x="93" y="126" width="104" height="26" rx="6" fill="var(--surface)" stroke="var(--border)" strokeWidth="1" />
            <circle cx="106" cy="139" r="5" fill="var(--border)" />
            <text x="117" y="142" fill="var(--text-primary)" fontSize="8.5" fontFamily="var(--font-body)" fontWeight="500">
              Daily walk
            </text>

            {/* Featured Slot Container on Left Phone Screen */}
            <rect
              x="93"
              y="160"
              width="104"
              height="48"
              rx="6"
              fill="#F3F2ED"
              stroke="var(--border)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <text
              x="100"
              y="173"
              fill="var(--text-muted)"
              fontSize="7"
              fontFamily="var(--font-body)"
              fontWeight="600"
            >
              RECOMMENDED FOR YOU
            </text>
            <rect x="100" y="179" width="90" height="22" rx="4" fill="var(--surface)" stroke="var(--border)" strokeWidth="1" />
            <circle cx="110" cy="190" r="4" fill="#6B6960" />
            <text x="118" y="193" fill="var(--text-primary)" fontSize="7" fontFamily="var(--font-body)" fontWeight="500">
              Quiet Journal
            </text>
          </g>

          {/* ================= CONNECTING PROMO PATH ================= */}
          <path
            d="M 180 185 C 230 140, 250 140, 300 185"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />

          {/* Small directional arrow */}
          <polygon points="248,154 256,150 248,146" fill="var(--accent)" />

          {/* ================= THE WARM ORANGE "You might also like" CARD ================= */}
          <g id="passing-card" transform="translate(195, 125)">
            {/* Card shadow */}
            <rect
              x="2"
              y="3"
              width="92"
              height="46"
              rx="8"
              fill="rgba(28, 27, 24, 0.12)"
            />
            {/* Main Card Body in #E8542F */}
            <rect
              x="0"
              y="0"
              width="92"
              height="46"
              rx="8"
              fill="var(--accent)"
              stroke="var(--text-primary)"
              strokeWidth="1"
            />
            {/* Badge Pill Header on the Card */}
            <rect x="7" y="6" width="78" height="12" rx="3" fill="#FFFFFF" fillOpacity="0.2" />
            <text
              x="11"
              y="15"
              fill="var(--text-on-accent)"
              fontSize="7.5"
              fontFamily="var(--font-body)"
              fontWeight="700"
              letterSpacing="0.02em"
            >
              You might also like
            </text>
            {/* Card Content line */}
            <text
              x="8"
              y="29"
              fill="var(--text-on-accent)"
              fontSize="8"
              fontFamily="var(--font-heading)"
              fontWeight="700"
            >
              Quiet Journal
            </text>
            <text
              x="8"
              y="39"
              fill="var(--text-on-accent)"
              fontSize="6.5"
              fontFamily="var(--font-body)"
              opacity="0.9"
            >
              Vetted · Non-competing
            </text>
          </g>

          {/* ================= RIGHT iPHONE (Journal / Focus App) ================= */}
          <g id="phone-right">
            {/* Phone Body */}
            <rect
              x="265"
              y="40"
              width="140"
              height="240"
              rx="24"
              fill="var(--surface)"
              stroke="var(--text-primary)"
              strokeWidth="2"
            />
            {/* Screen Inner */}
            <rect
              x="273"
              y="52"
              width="124"
              height="216"
              rx="16"
              fill="#F9F9F6"
              stroke="var(--border)"
              strokeWidth="1"
            />
            {/* Dynamic Island */}
            <rect x="317" y="58" width="36" height="8" rx="4" fill="var(--text-primary)" />

            {/* Right Phone UI Content: Journal / Focus App */}
            <text
              x="285"
              y="82"
              fill="var(--text-primary)"
              fontSize="11"
              fontFamily="var(--font-heading)"
              fontWeight="700"
            >
              Quiet Journal
            </text>
            <text
              x="365"
              y="82"
              fill="var(--text-muted)"
              fontSize="9"
              fontFamily="var(--font-body)"
            >
              Today
            </text>

            {/* Journal prompt card */}
            <rect x="283" y="94" width="104" height="48" rx="6" fill="var(--surface)" stroke="var(--border)" strokeWidth="1" />
            <text x="291" y="108" fill="var(--text-muted)" fontSize="7" fontFamily="var(--font-body)" fontWeight="600">
              EVENING REFLECTION
            </text>
            <text x="291" y="121" fill="var(--text-primary)" fontSize="8" fontFamily="var(--font-body)">
              "What felt effortless today?"
            </text>
            <line x1="291" y1="130" x2="375" y2="130" stroke="var(--border)" strokeWidth="0.8" />

            {/* Featured Slot Container on Right Phone */}
            <rect
              x="283"
              y="150"
              width="104"
              height="48"
              rx="6"
              fill="#F3F2ED"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="290"
              y="163"
              fill="var(--text-muted)"
              fontSize="7"
              fontFamily="var(--font-body)"
              fontWeight="600"
            >
              CURATED ALLY
            </text>
            <rect x="290" y="169" width="90" height="22" rx="4" fill="var(--surface)" stroke="var(--border)" strokeWidth="1" />
            <circle cx="300" cy="180" r="4" fill="#E8542F" />
            <text x="308" y="183" fill="var(--text-primary)" fontSize="7" fontFamily="var(--font-body)" fontWeight="600">
              Tally Habit Tracker
            </text>
          </g>

          {/* Decorative ink line details */}
          <circle cx="240" cy="80" r="2" fill="var(--text-muted)" opacity="0.4" />
          <circle cx="240" cy="270" r="2" fill="var(--text-muted)" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
};

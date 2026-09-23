import React, { useState } from 'react';
import { TierModal } from './TierModal';

interface Tier {
  name: string;
  price: string;
  cadence: string;
  bestFor: string;
  features: string[];
  isRecommended?: boolean;
}

const tiers: Tier[] = [
  {
    name: 'Member',
    price: '$49',
    cadence: '/mo',
    bestFor: 'devs who want steady, reciprocal reach.',
    features: [
      'Vetted directory listing',
      'One placement slot in matched apps',
      'Monthly credits: feature 2 apps, earn 1 back',
      'Email support',
    ],
  },
  {
    name: 'Featured Campaign',
    price: '$199',
    cadence: 'one-time',
    bestFor: 'launches and updates that need a real push now.',
    features: [
      'Human-built Match Report',
      '3-day feature across matched apps + network digest',
      'Reported-install summary on day 4',
      'No membership required',
    ],
    isRecommended: true,
  },
  {
    name: 'Pro',
    price: '$299',
    cadence: '/mo',
    bestFor: 'apps treating the network as a core channel.',
    features: [
      'Everything in Member',
      'Ongoing top-slot placement',
      'Monthly campaign included',
      'Priority matching and direct founder support',
    ],
  },
];

export const PricingSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);

  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-h2 mb-3">
          Predictable pricing for indie builders
        </h2>
        <p className="text-body" style={{ color: 'var(--text-muted)' }}>
          Founding cohort pricing locked in before public launch. No ads, no hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
        {tiers.map((tier) => {
          const isRec = tier.isRecommended;
          return (
            <div
              key={tier.name}
              className={`flex flex-col justify-between p-7 rounded-[10px] relative transition-transform duration-200 ${
                isRec ? 'md:scale-[1.03] z-10' : ''
              }`}
              style={{
                backgroundColor: 'var(--surface)',
                border: isRec
                  ? '2px solid var(--accent)'
                  : '1px solid var(--border)',
                boxShadow: isRec
                  ? '0 4px 16px rgba(232, 84, 47, 0.12)'
                  : 'var(--card-shadow)',
              }}
            >
              {/* Badge for Recommended Tier */}
              {isRec && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="text-small font-bold px-3 py-1 rounded-[10px] text-xs uppercase tracking-wider"
                    style={{
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--accent)',
                      color: 'var(--accent)',
                    }}
                  >
                    Best value
                  </span>
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="text-h3 mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 my-2">
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '38px',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {tier.price}
                    </span>
                    <span
                      className="text-body"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {tier.cadence.startsWith('/') ? tier.cadence : ` ${tier.cadence}`}
                    </span>
                  </div>
                  <p className="text-small" style={{ color: 'var(--text-muted)' }}>
                    Best for: {tier.bestFor}
                  </p>
                </div>

                <div className="py-4 border-t border-[#E4E2DC]">
                  <ul className="space-y-3 text-small" style={{ color: 'var(--text-primary)' }}>
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setSelectedTier(tier)}
                  className={`w-full ${isRec ? 'btn-primary' : 'btn-secondary'}`}
                  style={{
                    padding: '12px 20px',
                    fontSize: '15px',
                  }}
                >
                  Reserve my founding spot
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedTier && (
        <TierModal
          isOpen={true}
          tierName={selectedTier.name}
          tierPrice={`${selectedTier.price} ${selectedTier.cadence}`}
          onClose={() => setSelectedTier(null)}
        />
      )}
    </div>
  );
};

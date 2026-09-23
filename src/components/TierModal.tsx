import React, { useState } from 'react';
import { saveLead } from '../firebase/leads';
import { X } from 'lucide-react';

interface TierModalProps {
  isOpen: boolean;
  tierName: string;
  tierPrice: string;
  onClose: () => void;
}

export const TierModal: React.FC<TierModalProps> = ({
  isOpen,
  tierName,
  tierPrice,
  onClose,
}) => {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot.trim().length > 0) {
      setSubmitted(true);
      return;
    }

    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@') || !trimmed.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    try {
      await saveLead({
        email: trimmed,
        source: `pricing_tier_${tierName.toLowerCase().replace(/\s+/g, '_')}`,
        tier: `${tierName} (${tierPrice})`,
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(28, 27, 24, 0.45)', backdropFilter: 'blur(2px)' }}
    >
      <div
        className="w-full max-w-md rounded-[10px] p-6 sm:p-8 relative"
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          boxShadow: '0 8px 30px rgba(28, 27, 24, 0.12)',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-app-muted hover:text-app-primary"
          style={{ cursor: 'pointer' }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl" style={{ color: 'var(--accent)' }}>✓</span>
              <h3 className="text-h3" style={{ fontSize: '20px' }}>
                You're in.
              </h3>
            </div>
            <p className="text-body mb-6" style={{ color: 'var(--text-primary)' }}>
              Within 2 weeks you'll get an email with your founding-member invite and a link to submit your app for its free Match Report. First cohort is capped at 50 apps.
            </p>
            <button
              onClick={onClose}
              className="btn-secondary w-full"
              style={{ padding: '10px 20px', fontSize: '15px' }}
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <span
                className="text-small font-semibold uppercase tracking-wider block mb-1"
                style={{ color: 'var(--accent)' }}
              >
                Founding Member Spot
              </span>
              <h3 className="text-h3" style={{ fontSize: '22px' }}>
                {tierName} · {tierPrice}
              </h3>
              <p className="text-small mt-1" style={{ color: 'var(--text-muted)' }}>
                Lock in founding member pricing and reserve your spot before public launch.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Honeypot */}
              <div
                style={{
                  opacity: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: 0,
                  width: 0,
                  zIndex: -1,
                  pointerEvents: 'none',
                }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="tier-email-input"
                  className="block text-small font-medium mb-1.5"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Your email
                </label>
                <input
                  id="tier-email-input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourapp.dev"
                  className="input-email"
                  disabled={loading}
                />
              </div>

              {errorMsg && (
                <p className="text-small mb-3 text-red-600">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full mb-3"
              >
                {loading ? 'Reserving...' : 'Reserve my founding spot'}
              </button>

              <p className="text-small text-center" style={{ color: 'var(--text-muted)' }}>
                No spam. One email when your spot opens. Unsubscribe anytime.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

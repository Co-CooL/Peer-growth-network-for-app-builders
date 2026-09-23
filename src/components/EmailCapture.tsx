import React, { useState } from 'react';
import { saveLead } from '../firebase/leads';

interface EmailCaptureProps {
  source: string;
  tier?: string;
  onSuccess?: () => void;
  className?: string;
  compact?: boolean;
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({
  source,
  tier,
  onSuccess,
  className = '',
  compact = false,
}) => {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: silently drop bots
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
        source,
        tier,
      });
      setSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="rounded-[10px] p-6 text-left"
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--card-shadow)',
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl" style={{ color: 'var(--accent)' }}>✓</span>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '18px',
              color: 'var(--text-primary)',
            }}
          >
            You're in.
          </span>
        </div>
        <p
          className="text-body"
          style={{
            color: 'var(--text-primary)',
            lineHeight: 1.6,
          }}
        >
          Within 2 weeks you'll get an email with your founding-member invite and a link to submit your app for its free Match Report. First cohort is capped at 50 apps.
        </p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className="w-full">
        {/* Honeypot field (hidden from legitimate users) */}
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
          <label htmlFor={`website-${source}`}>Leave blank</label>
          <input
            id={`website-${source}`}
            type="text"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className={`flex flex-col sm:flex-row gap-3 ${compact ? 'max-w-md' : 'max-w-xl'}`}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourapp.dev"
            className="input-email flex-1"
            aria-label="Email address"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-primary shrink-0"
          >
            {loading ? 'Submitting...' : 'Get my free Match Report'}
          </button>
        </div>

        {errorMsg && (
          <p className="text-small mt-2 text-red-600">
            {errorMsg}
          </p>
        )}

        <p
          className="text-small mt-2"
          style={{ color: 'var(--text-muted)' }}
        >
          No spam. One email when your spot opens. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
};

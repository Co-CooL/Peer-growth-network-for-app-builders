import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Is this live yet?',
    answer: "Not yet — this page is for founding members. We're hand-vetting the first cohort of apps now. Sign up and you'll get an invite, a free Match Report, and founding pricing locked in before public launch.",
  },
  {
    question: 'How is this different from free cross-promo SDKs?',
    answer: "Free SDK networks trade impressions with whoever installs the SDK. Here, a human vets every app, builds every match, and reports installs after every campaign. You're paying for curation and proof, not access.",
  },
  {
    question: 'How do I know the installs are real?',
    answer: "Every campaign ends with a written install report tied to your store analytics window, and any app caught inflating numbers is removed from the network. One bad actor poisons the whole pool — so we don't tolerate any.",
  },
  {
    question: 'My app only has 40 ratings. Am I too small?',
    answer: "No. Vetting is about quality, not size: live product, real reviews, recent updates, polished UI. Small-but-good is exactly who this network is for.",
  },
  {
    question: 'Why pay $199 when feature services charge more?',
    answer: "The going rate for an indie feature runs $150 for one day up to $500 for a growth package. $199 gets you three days, human matching, and a reported-install summary — deliberately priced to be an easy first yes.",
  },
  {
    question: 'What do I have to do inside my app?',
    answer: "For a one-time Featured Campaign: nothing. For membership, you add one small \"you might also like\" card showing two vetted, non-competing apps — you approve every match before it appears.",
  },
];

export const FaqAccordion: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto divide-y divide-[#E4E2DC]">
      {faqs.map((faq, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div key={index} className="py-5">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
              aria-expanded={isOpen}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '19px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                {faq.question}
              </span>
              <span
                className="shrink-0 transition-transform duration-200"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: 'var(--text-muted)',
                }}
              >
                <ChevronDown size={20} />
              </span>
            </button>
            {isOpen && (
              <div className="mt-3 pr-6">
                <p
                  className="text-body"
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '16px',
                    lineHeight: 1.6,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

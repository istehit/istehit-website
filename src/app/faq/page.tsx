import React from 'react';

export default function FAQPage() {
  const faqs = [
    {
      question: "What is ISTE?",
      answer: "The Indian Society for Technical Education (ISTE) is a national professional non-profit society of educators and students in the field of engineering and technology."
    },
    {
      question: "How can I join ISTE HIT SC technical society?",
      answer: "You can join by registering through our membership portal. We offer different tiers for standard members and active members who want to participate in core domain training."
    },
    {
      question: "Are events open to all students?",
      answer: "Most of our workshops and seminars are open to all students of HIT. However, some advanced bootcamps and certification programs may be exclusive to Active Members."
    },
    {
      question: "What are the benefits of being an Active Member?",
      answer: "Active members get ISTE ID cards, MAR points validation, certificates for participating in workshops, and priority access to core domain training sessions."
    },
    {
      question: "How do I get involved with the Core Team?",
      answer: "We open recruitment for the Core Team annually. Selection is based on technical skill, leadership potential, and commitment to the society's mission."
    }
  ];

  return (
    <main className="faq-page-main">
      <section className="faq-page-section">
        <div className="faq-page-hero">
          <p className="text-label faq-page-kicker">HELP CENTER</p>
          <h1 className="h-display faq-page-title">Frequently Asked Questions</h1>
          <p className="faq-page-subtitle">
            Common questions about ISTE HIT SC, membership, events, and participation.
          </p>
        </div>

        <section id="faq" className="faq-page-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-page-card">
              <details open={index === 0} className="faq-page-details">
                <summary className="faq-page-summary">
                  <span className="h-heading faq-page-question">{faq.question}</span>
                  <span className="material-symbols-outlined icon-rotate faq-page-chevron">expand_more</span>
                </summary>
                <div className="faq-page-answer">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}

          <div className="faq-page-help">
            <p>
              Still have questions? Reach out at <strong>hitiste.studentchapter@gmail.com</strong>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

import React from 'react';
import Link from 'next/link';

export default function MembershipSection() {
  return (
    <>
      <section className="cta-section">
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
              <h2 className="h-display" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1.5rem', color: 'var(--theme-white)' }}>
                  Ready to Innovate?
              </h2>
              <p style={{ 
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
                  fontWeight: '500', 
                  marginBottom: '3rem', 
                  opacity: '0.8', 
                  color: 'var(--theme-white)',
                  lineHeight: 1.6
              }}>
                  Start your technical journey with a solid foundation. Precision, clarity, and speed await.
              </p>
              <div>
                  <Link href="/faq" className="btn-cta text-decoration-none">
                      View FAQs
                  </Link>
              </div>
          </div>
      </section>
    </>
  );
}

import React from 'react';
import Link from 'next/link';

export default function MembershipPage() {
  return (
    <>
      {/* How It Works (Steps) -> How To Join */}
      <section className="workflow-section">
          <h2 className="h-display" style={{"fontSize":"clamp(1.9rem, 6.5vw, 2.25rem)","textAlign":"center","marginBottom":"clamp(2rem, 8vw, 4rem)"}}>How To Join ?</h2>
          <div className="workflow-grid">
              <div className="step-card">
                  <div className="step-number primary">1</div>
                  <div className="step-icon-box">
                      <span className="material-symbols-outlined" style={{"fontSize":"4rem","opacity":"0.2"}}>person_add</span>
                  </div>
                  <h3 className="h-heading" style={{"fontSize":"1.25rem","marginBottom":"0.75rem"}}>Register</h3>
                  <p style={{"fontSize":"0.875rem","opacity":"0.8"}}>Fill out our membership form during the onboarding drive and submit the initial structural requirements.</p>
              </div>
              <div className="step-card">
                  <div className="step-number dark">2</div>
                  <div className="step-icon-box">
                      <span className="material-symbols-outlined" style={{"fontSize":"4rem","opacity":"0.2"}}>calendar_month</span>
                  </div>
                  <h3 className="h-heading" style={{"fontSize":"1.25rem","marginBottom":"0.75rem"}}>Attend</h3>
                  <p style={{"fontSize":"0.875rem","opacity":"0.8"}}>Show up to the orientation and begin connecting with your batchmates and mentors.</p>
              </div>
              <div className="step-card">
                  <div className="step-number dark">3</div>
                  <div className="step-icon-box">
                      <span className="material-symbols-outlined" style={{"fontSize":"4rem","opacity":"0.2"}}>build</span>
                  </div>
                  <h3 className="h-heading" style={{"fontSize":"1.25rem","marginBottom":"0.75rem"}}>Contribute</h3>
                  <p style={{"fontSize":"0.875rem","opacity":"0.8"}}>Begin working on projects, attending seminars, and building up your technical portfolio.</p>
              </div>
          </div>
      </section>

      {/* Memberships Tiers */}
      <section className="pricing-section" id="membership">
          <div className="pricing-card">
              <h3 className="h-heading" style={{"fontSize":"1.25rem","marginBottom":"0.5rem"}}>Standard Member</h3>
              <div className="pricing-price">Free</div>
              <p style={{"fontSize":"0.875rem","opacity":"0.8","minHeight":"40px","marginBottom":"2rem"}}>Essential access for starting your journey in the tech community.</p>
              <ul className="pricing-list">
                  <li><span className="material-symbols-outlined">check</span> Attend Open Events</li>
                  <li><span className="material-symbols-outlined">check</span> Basic Mentorship</li>
              </ul>
          </div>
          <div className="pricing-card pro">
              <div style={{"position":"absolute","top":"0","right":"0","background":"var(--theme-dark)","padding":"0.25rem 0.5rem","fontSize":"0.625rem","fontWeight":"700","textTransform":"uppercase"}}>Verified</div>
              <h3 className="h-heading" style={{"fontSize":"1.25rem","marginBottom":"0.5rem"}}>Active Member</h3>
              <div className="pricing-price">ISTE Membership</div>
              <p style={{"fontSize":"0.875rem","opacity":"0.9","minHeight":"40px","marginBottom":"2rem"}}>Full engagement tier with exclusive perks and MAR points.</p>
              <ul className="pricing-list">
                  <li><span className="material-symbols-outlined">check</span> Exclusive Bootcamps</li>
                  <li><span className="material-symbols-outlined">check</span> MAR Points Valid</li>
                  <li><span className="material-symbols-outlined">check</span> Certificate of Participation</li>
                  <li><span className="material-symbols-outlined">check</span> Core Domain Mentoring</li>
              </ul>
          </div>
          <div className="pricing-card">
              <h3 className="h-heading" style={{"fontSize":"1.25rem","marginBottom":"0.5rem"}}>Core Team</h3>
              <div className="pricing-price">Selected</div>
              <p style={{"fontSize":"0.875rem","opacity":"0.8","minHeight":"40px","marginBottom":"2rem"}}>Leadership roles dedicated to organizing and steering the technical society.</p>
              <ul className="pricing-list">
                  <li><span className="material-symbols-outlined">check</span> Event Operations</li>
                  <li><span className="material-symbols-outlined">check</span> PR &amp; Outreach</li>
                  <li><span className="material-symbols-outlined">check</span> Technical Team Leads</li>
                  <li><span className="material-symbols-outlined">check</span> Letter of Recommendation</li>
                  <li><span className="material-symbols-outlined">check</span> Exciting Perks</li>

              </ul>
          </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
          <h2 className="h-display" style={{"fontSize":"clamp(2.1rem, 10vw, 4rem)","marginBottom":"2rem"}}>Ready to Innovate?</h2>
          <p style={{"fontSize":"clamp(1rem, 3.2vw, 1.25rem)","fontWeight":"500","marginBottom":"2.5rem","opacity":"0.8","maxWidth":"600px","marginLeft":"auto","marginRight":"auto"}}>
              Start your technical journey with a solid foundation. Precision, clarity, and speed await.
          </p>
          <Link href="/faq" className="btn-cta text-decoration-none">View FAQs</Link>
      </section>
    </>
  );
}

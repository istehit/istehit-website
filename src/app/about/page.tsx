import React from 'react';

export default function AboutPage() {
  return (
    <>
            <div className="page-header-block">
                    <h2 className="h-display page-header-title">About ISTE-HIT SC</h2>
      </div>

      {/* Problem & Solution (Asymmetric) */}
      <section className="asymmetric-grid">
          <div className="problem-box">
              <span className="material-symbols-outlined" style={{"fontSize":"3rem","marginBottom":"1.5rem","color":"var(--theme-primary)"}}>public</span>
              <h2 className="h-heading" style={{"fontSize":"clamp(1.5rem, 5vw, 1.875rem)","marginBottom":"1rem"}}>The Mission</h2>
              <p style={{"fontSize":"clamp(1rem, 3.2vw, 1.125rem)","opacity":"0.8"}}>
                  Empower students with technical knowledge through practical learning. We aim to break the chaotic learning cycle by bringing structure and mentorship to our community at Haldia Institute of Technology.
              </p>
          </div>
          <div className="solution-box" style={{"display":"flex","flexDirection":"column","justifyContent":"center"}}>
              <h2 className="h-heading" style={{"fontSize":"clamp(1.5rem, 5vw, 1.875rem)","marginBottom":"1.5rem","color":"var(--theme-primary)"}}>The Vision</h2>
              <p style={{"fontSize":"clamp(1.05rem, 3.6vw, 1.25rem)","fontWeight":"500","marginBottom":"1.5rem"}}>
                  Beyond events, we build the ribbons of community that tie the students together. From workshops to practical learning sessions, our footprint ensures continuous skill development.
              </p>
              <ul style={{"listStyle":"none","display":"flex","flexDirection":"column","gap":"0.75rem"}}>
                  <li className="text-label" style={{"display":"flex","alignItems":"center","gap":"0.75rem"}}>
                      <span className="material-symbols-outlined" style={{"color":"var(--theme-primary)"}}>check</span> Technical Excellence
                  </li>
                  <li className="text-label" style={{"display":"flex","alignItems":"center","gap":"0.75rem"}}>
                      <span className="material-symbols-outlined" style={{"color":"var(--theme-primary)"}}>check</span> Nurturing Future Leaders
                  </li>
                  <li className="text-label" style={{"display":"flex","alignItems":"center","gap":"0.75rem"}}>
                      <span className="material-symbols-outlined" style={{"color":"var(--theme-primary)"}}>check</span> Strong Alumni Relations
                  </li>
              </ul>
          </div>
      </section>

      {/* Feature Grid (Bento) */}
      <section className="features-container">
          <div className="feature-card">
              <div className="feature-icon">
                  <span className="material-symbols-outlined">code</span>
              </div>
              <h3 className="h-heading" style={{"fontSize":"1.25rem","marginTop":"0.5rem"}}>Practical Learning</h3>
              <p style={{"fontSize":"0.875rem","fontWeight":"500","opacity":"0.8","marginTop":"0.5rem"}}>Hands-on experience through bootcamps and live projects instead of purely theoretical discussions.</p>
          </div>
          <div className="feature-card">
              <div className="feature-icon">
                  <span className="material-symbols-outlined">group</span>
              </div>
              <h3 className="h-heading" style={{"fontSize":"1.25rem","marginTop":"0.5rem"}}>Mentorship</h3>
              <p style={{"fontSize":"0.875rem","fontWeight":"500","opacity":"0.8","marginTop":"0.5rem"}}>Direct guidance from experienced seniors and verified alumni across top tier tech companies.</p>
          </div>
          <div className="feature-card">
              <div className="feature-icon">
                  <span className="material-symbols-outlined">emoji_events</span>
              </div>
              <h3 className="h-heading" style={{"fontSize":"1.25rem","marginTop":"0.5rem"}}>Workshops</h3>
              <p style={{"fontSize":"0.875rem","fontWeight":"500","opacity":"0.8","marginTop":"0.5rem"}}>Participate in national and society-level workshops to test your mettle and build portfolio projects.</p>
          </div>
          <div className="feature-card">
              <div className="feature-icon">
                  <span className="material-symbols-outlined">hub</span>
              </div>
              <h3 className="h-heading" style={{"fontSize":"1.25rem","marginTop":"0.5rem"}}>Open Source</h3>
              <p style={{"fontSize":"0.875rem","fontWeight":"500","opacity":"0.8","marginTop":"0.5rem"}}>Jumpstart your open-source journey with campaigns dedicated entirely to Git workflows.</p>
          </div>
          <div className="feature-card">
              <div className="feature-icon">
                  <span className="material-symbols-outlined">forum</span>
              </div>
              <h3 className="h-heading" style={{"fontSize":"1.25rem","marginTop":"0.5rem"}}>Networking</h3>
              <p style={{"fontSize":"0.875rem","fontWeight":"500","opacity":"0.8","marginTop":"0.5rem"}}>Connect with like-minded aspiring engineers and form lifelong friendships within the tech space.</p>
          </div>
          <div className="feature-card">
              <div className="feature-icon">
                  <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="h-heading" style={{"fontSize":"1.25rem","marginTop":"0.5rem"}}>Career Growth</h3>
              <p style={{"fontSize":"0.875rem","fontWeight":"500","opacity":"0.8","marginTop":"0.5rem"}}>Skill-based learning ensures that your career hits the ground running when you step into the industry.</p>
          </div>
      </section>

      {/* Connect With Us */}
      <section className="asymmetric-grid" style={{ marginTop: '2rem' }}>
          <div className="problem-box">
              <span className="material-symbols-outlined" style={{"fontSize":"3rem","marginBottom":"1.5rem","color":"var(--theme-primary)"}}>location_on</span>
              <h2 className="h-heading" style={{"fontSize":"clamp(1.5rem, 5vw, 1.875rem)","marginBottom":"1rem"}}>Connect With Us</h2>

              <h3 className="h-heading" style={{"fontSize":"clamp(1.05rem, 4vw, 1.25rem)","marginBottom":"0.75rem"}}>Our Location</h3>
              <p style={{"fontSize":"clamp(0.95rem, 3.2vw, 1.05rem)","opacity":"0.85","lineHeight":"1.7","marginBottom":"1.5rem"}}>
                  Haldia Institute of Technology
                  <br />
                  Purba Medinipur, Haldia
                  <br />
                  West Bengal-721657
              </p>

              <h3 className="h-heading" style={{"fontSize":"clamp(1.05rem, 4vw, 1.25rem)","marginBottom":"0.75rem"}}>Email Us</h3>
              <p style={{"fontSize":"clamp(0.95rem, 3.2vw, 1.05rem)","opacity":"0.85","lineHeight":"1.7","overflowWrap":"anywhere"}}>
                  hitiste.studentchapter@gmail.com
              </p>
          </div>

          <div className="solution-box" style={{"display":"flex","flexDirection":"column","justifyContent":"center"}}>
              <span className="material-symbols-outlined" style={{"fontSize":"3rem","marginBottom":"1.5rem","color":"var(--theme-primary)"}}>badge</span>
              <h2 className="h-heading" style={{"fontSize":"clamp(1.5rem, 5vw, 1.875rem)","marginBottom":"1rem","color":"var(--theme-primary)"}}>Our Chapter Incharge</h2>
              <h3 className="h-heading" style={{"fontSize":"clamp(1.1rem, 4.2vw, 1.35rem)","marginBottom":"0.25rem"}}>Prof. Priyatosh Jana</h3>
              <p className="text-label" style={{"opacity":"0.75","marginBottom":"1.25rem"}}>OFFICER IN-CHARGE ISTE-HIT SC</p>
              <p style={{"fontSize":"clamp(0.98rem, 3.3vw, 1.1rem)","fontWeight":"500","opacity":"0.85","lineHeight":"1.7"}}>
                  The convenor of ISTE HIT SC Society drives innovation and fosters student engagement, creating impactful learning experiences for all members.
              </p>
          </div>
      </section>
    </>
  );
}

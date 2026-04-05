import React from 'react';

export default function AboutSection() {
  return (
    <section id="about">
            <div className="page-header-block">
                    <h2 className="h-display page-header-title">About ISTE-HIT SC</h2>
      </div>

      {/* Problem & Solution (Asymmetric) */}
      <div className="asymmetric-grid">
          <div className="problem-box">
              <span className="material-symbols-outlined" style={{"fontSize":"3rem","marginBottom":"1.5rem","color":"var(--theme-primary)"}}>public</span>
              <h2 className="h-heading" style={{"fontSize":"1.875rem","marginBottom":"1rem"}}>The Mission</h2>
              <p style={{"fontSize":"1.125rem","opacity":"0.8"}}>
                  Empower students with technical knowledge through practical learning. We aim to break the chaotic learning cycle by bringing structure and mentorship to our community at Haldia Institute of Technology.
              </p>
          </div>
          <div className="solution-box" style={{"display":"flex","flexDirection":"column","justifyContent":"center"}}>
              <h2 className="h-heading" style={{"fontSize":"1.875rem","marginBottom":"1.5rem","color":"var(--theme-primary)"}}>The Vision</h2>
              <p style={{"fontSize":"1.25rem","fontWeight":"500","marginBottom":"1.5rem"}}>
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
      </div>

      {/* Feature Grid (Bento) */}
      <div className="features-container">
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
      </div>
    </section>
  );
}

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="legal-shell">
      <h1 className="h-display legal-title">Privacy Policy</h1>
      <div className="legal-content">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>At ISTE-HIT SC, we take your privacy seriously. This Privacy Policy outlines the types of personal information that is received and collected by our technical society and how it is used.</p>
        <h2 className="h-heading">Information We Collect</h2>
        <p>We only collect personal data such as your name, email address, roll number, and department when you voluntarily provide it to us during event registration, newsletter sign-ups, or membership onboarding.</p>
        <h2 className="h-heading">How We Use It</h2>
        <p>The information we collect is used solely to facilitate events, verify college attendance, grant MAR points, and communicate society announcements. We do not sell or rent your personal information to third parties.</p>
        <h2 className="h-heading">Data Security</h2>
        <p>We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data.</p>
        <p>By participating in our events and registering as a member, you agree to the collection and use of information in accordance with this policy.</p>
      </div>
    </div>
  );
}

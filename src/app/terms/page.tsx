import React from 'react';

export default function TermsOfService() {
  return (
    <div className="legal-shell">
      <h1 className="h-display legal-title">Terms of Service</h1>
      <div className="legal-content">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>Welcome to ISTE HIT SC, the technical society at Haldia Institute of Technology. By accessing our resources, participating in our events, or registering as a member, you agree to be bound by these Terms of Service.</p>
        <h2 className="h-heading">Membership</h2>
        <p>Membership is intended for students of Haldia Institute of Technology. Misrepresentation of identity or academic standing may result in the revocation of membership privileges.</p>
        <h2 className="h-heading">Use of Resources</h2>
        <p>Any technical resources, open-source repositories, or study materials provided by ISTE-HIT SC are for educational purposes. You agree not to use these resources for malicious activities.</p>
        <h2 className="h-heading">Event Participation</h2>
        <p>When attending bootcamps, seminars, and workshops, you represent the technical society and the institute. Unprofessional behavior or violations of our Code of Conduct will lead to immediate disqualification.</p>
      </div>
    </div>
  );
}

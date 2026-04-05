import React from 'react';

export default function CodeOfConduct() {
  return (
    <div className="legal-shell">
      <h1 className="h-display legal-title">Code of Conduct</h1>
      <div className="legal-content">
        <p>ISTE-HIT SC is dedicated to providing a harassment-free and inclusive experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, or religion.</p>
        <h2 className="h-heading">Our Standards</h2>
        <p>Examples of behavior that contributes to creating a positive environment include:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Using welcoming and inclusive language.</li>
          <li>Being respectful of differing viewpoints and experiences.</li>
          <li>Gracefully accepting constructive criticism.</li>
          <li>Focusing on what is best for the community.</li>
        </ul>
        <h2 className="h-heading">Unacceptable Behavior</h2>
        <p>Unacceptable behavior includes, but is not limited to: public or private harassment, publishing others' private information without explicit permission, and other conduct which could reasonably be considered inappropriate in a professional setting.</p>
        <h2 className="h-heading">Enforcement</h2>
        <p>Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the core team. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances.</p>
      </div>
    </div>
  );
}

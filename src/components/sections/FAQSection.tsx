import React from 'react';

export default function FAQSection() {
  return (
    <section className="faq-container" id="faq" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="faq-header">
            <h2 className="h-display" style={{"fontSize":"2.25rem","marginBottom":"1rem"}}>Q &amp; A</h2>
            <p style={{"fontSize":"1.125rem","opacity":"0.7"}}>Common questions about joining and participating in our technical society.</p>
        </div>
        <div style={{"borderLeft":"0"}}>
            <div className="faq-item">
                <details>
                    <summary>
                        <span>Who can join the ISTE-HIT SC?</span>
                        <span className="material-symbols-outlined icon-rotate">expand_more</span>
                    </summary>
                    <div style={{"marginTop":"1rem","opacity":"0.8","lineHeight":"1.6"}}>
                        Any enrolled student at Haldia Institute of Technology with a passion for learning and collaborating on technical subjects can join.
                    </div>
                </details>
            </div>
            <div className="faq-item">
                <details>
                    <summary>
                        <span>Do I need prior coding experience?</span>
                        <span className="material-symbols-outlined icon-rotate">expand_more</span>
                    </summary>
                    <div style={{"marginTop":"1rem","opacity":"0.8","lineHeight":"1.6"}}>
                        No! Our programs are structured to take you from fundamentals to advanced concepts. Initiatives like Open Source 101 are perfect for beginners.
                    </div>
                </details>
            </div>
            <div className="faq-item">
                <details>
                    <summary>
                        <span>What are MAR points?</span>
                        <span className="material-symbols-outlined icon-rotate">expand_more</span>
                    </summary>
                    <div style={{"marginTop":"1rem","opacity":"0.8","lineHeight":"1.6"}}>
                        Mandatory Additional Requirement (MAR) points are credited to active participants as per university regulations to encourage co-curricular engagement.
                    </div>
                </details>
            </div>
        </div>
    </section>
  );
}

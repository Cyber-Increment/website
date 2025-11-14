import React from "react";
const hero = () => (

    <section className="hero">
      <div className="hero-content">
        <h1>Cyber Increment</h1>
        <h2>
      Cybersecurity Consultancy & Expert Speaking<br />
      <br />
      David McKenzie, Cyber Risk Reducer, Cyber Executive, Funny Noise Identifier
    </h2>
    <p>
      With over two decade’s expertise in cybersecurity, incident response, and regulatory compliance, 
      I combine hands-on breach analysis, executive leadership, and public speaking to help organisations of all sizes stay resilient against evolving threats. 
      I partner with clients across sectors to develop robust security programs, respond to critical incidents, and foster a culture of cyber readiness.

      <br /><br /><b>From building to core protections to fixing broken team dynamics - I help all manner of organisations in raising their cyber security game.</b>
    </p>
    <ul>
      <li>Strategic Cyber Security Consulting: From threat intelligence to compliance and OT/ICS protection</li>
      <li>Trusted speaker and trainer: Engaging keynotes, workshops, and executive briefings</li>
      <li>Proven results in complex regulatory environments and high-stakes incidents</li>
    </ul>
    <a href="#contact" className="cta-button">Book a Consultation or Speaking Engagement</a>
  </div>
  <div className="hero-image">
    {/* Replace with your professional headshot */}
    <img src="/images/david-mckenzie.jpg" alt="David McKenzie, Principal Consultant" />
  </div>
    </section>

  );


export default hero;

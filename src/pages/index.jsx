import React from "react";
import { Link } from "react-router-dom";

const index = () => (
  <main>
    <h1>Welcome to Cyber Increment</h1>
    <nav>
      <ul>
        <li><Link to="/hero">Cyber Increment</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/vciso">Cyber Executive (vCiso) Service</Link></li>
      </ul>
    </nav>
    {/* Optionally add additional context/branding here */}
  </main>
);

export default index;
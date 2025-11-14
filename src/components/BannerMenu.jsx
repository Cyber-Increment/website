import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.svg";
const BannerMenu = () => {
  return (
    <header className="banner-menu">
      <nav className="banner-nav">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Cyber Increment Logo" className="logo-image" />
        </Link>
        <ul className="menu-links">
          <li><Link to="/hero">Cyber Increment</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/service">Cyber Exec (vCISO) Service</Link></li>
          <li><Link to="https://calendly.com/dm-cyberincrement/30min" className="btn">Book Chat</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default BannerMenu;

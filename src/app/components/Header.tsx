"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link href="/" legacyBehavior>
        <a className="navbar-brand">NZ</a>
      </Link>

      <div className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
        <Link href="/" legacyBehavior>
          <a className="nav-link">Home</a>
        </Link>
        <Link href="/#service" legacyBehavior>
          <a className="nav-link">Service</a>
        </Link>
        <Link href="/#about" legacyBehavior>
          <a className="nav-link">About</a>
        </Link>
        <Link href="/#Portfolio" legacyBehavior>
          <a className="nav-link">Portfolio</a>
        </Link>
      
      </div>

      <button className="contact-btn">
      <Link href="../Contact">Contact</Link>
      </button>
      
      <div className="menu-icon" onClick={toggleMenu}>
        
        &#9776;
        
      </div>
    </nav>
  );
};

export default Header;
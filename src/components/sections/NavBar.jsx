import { useState } from 'react';
import { navigation } from '../../content/siteContent';

function NavBar({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand">A & S</a>
        <button className="navbar__toggle" onClick={() => setMobileMenuOpen((open) => !open)} aria-label="Toggle menu">
          ☰
        </button>
        <div className={`navbar__links ${mobileMenuOpen ? 'open' : ''}`}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

import { navigation } from '../../content/siteContent';
import asLogo from '../../../assets/charms/as-logo.png';

function NavBar({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="navbar__brand-visual" aria-hidden="true">
            <img src={asLogo} alt="" className="navbar__brand-logo" />
          </span>
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">Ankita &amp; Siddharth</span>
            <span className="navbar__brand-subtitle">Wedding</span>
          </span>
        </a>
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

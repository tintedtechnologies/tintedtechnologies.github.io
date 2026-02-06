import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../App.module.css';
import logo from '../assets/logo.png';

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);
  
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <Link
        to="/"
        style={{ 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          marginRight: 'auto',
          cursor: 'pointer',
          height: '100%'
        }}
        onClick={() => {
          setMenuOpen(false);
          if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      >
        <img 
          src={logo} 
          alt="Tinted Technologies" 
          className={styles.navLogo}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
      </Link>

      {/* Hamburger button - visible on mobile only */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineTop : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineMiddle : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineBottom : ''}`}></span>
      </button>

      {/* Overlay backdrop */}
      {menuOpen && (
        <div className={styles.navOverlay} onClick={closeMenu}></div>
      )}

      <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
        {location.pathname === '/' ? (
          <>
            <a 
              href="#mission"
              onClick={(e) => handleAnchorClick(e, 'mission')}
              className={styles.navLink}
            >
              Mission
            </a>
            <a 
              href="#about"
              onClick={(e) => handleAnchorClick(e, 'about')}
              className={styles.navLink}
            >
              About
            </a>
            <a 
              href="#services"
              onClick={(e) => handleAnchorClick(e, 'services')}
              className={styles.navLink}
            >
              Services
            </a>
            <a 
              href="#contact"
              onClick={(e) => handleAnchorClick(e, 'contact')}
              className={styles.navLink}
            >
              Contact
            </a>
          </>
        ) : (
          <Link 
            to="/"
            className={styles.navLink}
            onClick={closeMenu}
          >
            Home
          </Link>
        )}
        <Link 
          to="/blog" 
          className={`${styles.navLink} ${location.pathname === '/blog' || location.pathname.startsWith('/blog/') ? styles.navLinkActive : ''}`}
          onClick={closeMenu}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;

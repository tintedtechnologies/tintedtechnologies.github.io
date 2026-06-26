import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../App.module.css';
import { useTheme } from '../context/themeContext';
import logo from '../assets/logo.png';

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
        className={styles.navBrandTitle}
        onClick={() => {
          setMenuOpen(false);
          if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      >
        <img src={logo} alt="" className={styles.navLogo} aria-hidden="true" />
        <span>Tinted <span style={{ color: 'var(--color-accent)', transition: 'none' }}>Technologies</span></span>
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
              href="#services"
              onClick={(e) => handleAnchorClick(e, 'services')}
              className={styles.navLink}
            >
              Services
            </a>
            <a 
              href="#why-us"
              onClick={(e) => handleAnchorClick(e, 'why-us')}
              className={styles.navLink}
            >
              Why Us
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
        {/* Theme toggle button */}
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            /* Sun icon - switch to light mode */
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="currentColor" d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z"/>
            </svg>
          ) : (
            /* Moon icon - switch to dark mode */
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
        {/**
        <Link 
          to="/blog" 
          className={`${styles.navLink} ${location.pathname === '/blog' || location.pathname.startsWith('/blog/') ? styles.navLinkActive : ''}`}
          onClick={closeMenu}
        >
          Blog
        </Link>
         */}
      </div>
    </nav>
  );
};

export default Navigation;

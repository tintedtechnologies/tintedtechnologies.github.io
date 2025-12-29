import { Link, useLocation } from 'react-router-dom';
import styles from '../App.module.css';
import logo from '../assets/logo.png';

const Navigation = () => {
  const location = useLocation();
  
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

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
          if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      >
        <img 
          src={logo} 
          alt="Tinted Technologies" 
          style={{
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
      </Link>
      <div className={styles.navLinks}>
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
          >
            Home
          </Link>
        )}
        <Link 
          to="/blog" 
          className={`${styles.navLink} ${location.pathname === '/blog' || location.pathname.startsWith('/blog/') ? styles.navLinkActive : ''}`}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;

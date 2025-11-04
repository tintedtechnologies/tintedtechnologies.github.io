import { Link, useLocation } from 'react-router-dom';
import styles from '../App.module.css';
import logo from '../assets/logo.png';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <Link to="/" style={{ 
        display: 'flex', 
        alignItems: 'center',
        textDecoration: 'none',
        marginRight: 'auto'
      }}>
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
        <Link 
          to="/mission" 
          className={`${styles.navLink} ${location.pathname === '/mission' ? styles.navLinkActive : ''}`}
        >
          Mission
        </Link>
        <Link 
          to="/about" 
          className={`${styles.navLink} ${location.pathname === '/about' ? styles.navLinkActive : ''}`}
        >
          About
        </Link>
        <Link 
          to="/blog" 
          className={`${styles.navLink} ${location.pathname === '/blog' || location.pathname.startsWith('/blog/') ? styles.navLinkActive : ''}`}
        >
          Blog
        </Link>
        <Link 
          to="/contact" 
          className={`${styles.navLink} ${location.pathname === '/contact' ? styles.navLinkActive : ''}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;

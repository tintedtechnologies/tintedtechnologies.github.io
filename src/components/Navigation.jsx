import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img 
            src="/logo.png" 
            alt="Tinted Technologies" 
            className="logo-image"
          />
          <span className="logo-text">Tinted Technologies</span>
        </Link>
        
        {/* Hamburger Menu Button */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <Link 
              to="/our-work" 
              className={location.pathname === '/our-work' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Our Work
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
                    <li>
            <Link 
              to="/blog" 
              className={location.pathname === '/blog' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

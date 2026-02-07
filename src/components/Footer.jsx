const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
      borderTop: '1px solid rgba(0, 177, 64, 0.2)',
      padding: '1.5rem 2rem',
      textAlign: 'center'
    }}>
      <p style={{
        fontSize: '0.95rem',
        color: '#666666',
        margin: 0
      }}>
        &copy; 2026 Tinted Technologies LLC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

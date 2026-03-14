const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, var(--color-panel) 0%, var(--color-bg) 100%)',
      borderTop: '1px solid var(--color-border-accent)',
      padding: '1.5rem 2rem',
      paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))',
      textAlign: 'center'
    }}>
      <p style={{
        fontSize: '0.95rem',
        color: 'var(--color-text-dim)',
        margin: 0
      }}>
        &copy; 2026 Tinted Technologies LLC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

import Navigation from '../components/Navigation';
import styles from '../App.module.css';

function Home() {
  return (
    <div className={styles.appContainer} id="top">
      <Navigation />
      
      {/* Hero Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 80px)',
        minHeight: 'calc(100vh - 80px)',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div style={{ 
          textAlign: 'center',
          maxWidth: '800px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <h1 className={styles.heroTitle} style={{ margin: 0 }}>Tinted<br/>Technologies</h1>
          <div className={styles.heroDesc} style={{ 
            margin: 0,
            textAlign: 'center',
            maxWidth: '600px'
          }}>
            Building inclusive tech experiences that inspire learning, creativity, and connection.
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

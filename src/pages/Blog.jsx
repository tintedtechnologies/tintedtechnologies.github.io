import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../App.module.css';
import { getBlogPosts } from '../utils/blogUtils';
import { useSEO } from '../utils/useSEO';

function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className={styles.blogCardLink}>
      <div className={styles.blogCard}>
        {post.featured && <div className={styles.featuredBadge}>Featured</div>}
        <div className={styles.blogCardContent}>
          <div className={styles.blogCategory}>{post.category}</div>
          <h3 className={styles.blogTitle}>{post.title}</h3>
          <p className={styles.blogDescription}>{post.description}</p>
          <div className={styles.blogMeta}>
            <span className={styles.blogAuthor}>{post.author}</span>
            <span className={styles.blogDate}>{post.date}</span>
          </div>
          {post.tags && (
            <div className={styles.blogTags}>
              {post.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className={styles.blogTag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: 'Blog',
    description: 'Insights on cloud architecture, AI, tech training, and building inclusive technology. Read the latest from Tinted Technologies.',
    path: '/blog'
  });

  useEffect(() => {
    async function loadPosts() {
      try {
        const blogPosts = await getBlogPosts();
        setPosts(blogPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className={styles.appContainer}>
        <Navigation />
        <div className={styles.mainContent}>
          <div className={styles.blogSection}>
            <div className={styles.blogHeader}>
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '800',
                color: '#ffffff',
                letterSpacing: '-0.02em'
              }}>Loading Posts...</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.appContainer}>
      <Navigation />

      {/* Blog Content */}
      <div className={styles.blogSection}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            fontWeight: '800', 
            margin: 0,
            color: '#ffffff',
            letterSpacing: '-0.02em'
          }}>
            Latest <span style={{ color: '#00B140' }}>Posts</span>
          </h1>
        </div>
        <div className={styles.blogGrid}>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;

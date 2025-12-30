import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../App.module.css';
import { getBlogPosts } from '../utils/blogUtils';

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
              <h2 className={styles.sectionTitle}>Loading Posts...</h2>
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
      <div style={{
        padding: '120px 40px 60px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            margin: 0,
            color: 'var(--foreground)'
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

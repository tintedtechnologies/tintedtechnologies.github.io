import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
        <nav className={styles.navbar}>
          <div className={styles.navLinks}>
            <Link to="/" className={styles.navLink}>Home</Link>
            <Link to="/#about" className={styles.navLink}>About</Link>
            <Link to="/#mission" className={styles.navLink}>Mission</Link>
            <Link to="/#founder" className={styles.navLink}>Founder</Link>
            <Link to="/#projects" className={styles.navLink}>Projects</Link>
            <Link to="/#contact" className={styles.navLink}>Contact</Link>
            <Link to="/blog" className={styles.navLink}>Insights</Link>
          </div>
        </nav>
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
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/#about" className={styles.navLink}>About</Link>
          <Link to="/#mission" className={styles.navLink}>Mission</Link>
          <Link to="/#founder" className={styles.navLink}>Founder</Link>
          <Link to="/#projects" className={styles.navLink}>Projects</Link>
          <Link to="/#contact" className={styles.navLink}>Contact</Link>
          <Link to="/blog" className={styles.navLink}>Insights</Link>
        </div>
      </nav>

      {/* Blog Content */}
      <div className={styles.mainContent}>
        <div className={styles.blogSection}>
          <div className={styles.blogHeader}>
            <h2 className={styles.sectionTitle}>Latest Posts</h2>
          </div>
          <div className={styles.blogGrid}>
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

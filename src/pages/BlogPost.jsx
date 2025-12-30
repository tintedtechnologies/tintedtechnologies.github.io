import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { marked } from 'marked';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from '../App.module.css';
import { getBlogPosts, getBlogPostContent } from '../utils/blogUtils';

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadPost() {
      try {
        const [posts, postContent] = await Promise.all([
          getBlogPosts(),
          getBlogPostContent(slug)
        ]);
        
        const postMeta = posts.find(p => p.slug === slug);
        
        if (!postMeta || !postContent) {
          setError(true);
        } else {
          setPost(postMeta);
          setMarkdownContent(postContent.content);
        }
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    
    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.appContainer}>
        <Navigation />
        <div className={styles.blogPostContainer}>
          <div className={styles.blogPostContent}>
            <h1>Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className={styles.appContainer}>
        <Navigation />
        <div className={styles.blogPostContainer}>
          <div className={styles.blogPostContent}>
            <h1>Post not found</h1>
            <Link to="/blog" className={styles.backToBlog}>← Back to Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  const htmlContent = marked(markdownContent);

  return (
    <div className={styles.appContainer}>
      <Navigation />

      {/* Blog Post Content */}
      <div className={styles.blogPostContainer}>
        <div className={styles.blogPostContent}>
          <div className={styles.blogPostHeader}>
            <Link to="/blog" className={styles.backToBlog}>← Back to Blog</Link>
            <h1 className={styles.blogPostTitle}>{post.title}</h1>
          </div>
          
          <article 
            className={styles.blogPostArticle}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <div className={styles.blogPostFooter}>
            <div className={styles.blogPostMeta}>
              <span className={styles.blogPostCategory}>{post.category}</span>
              <div className={styles.blogPostMetaInfo}>
                <span className={styles.blogPostAuthor}>{post.author}</span>
                <span className={styles.blogPostDate}>{post.date}</span>
              </div>
            </div>
            {post.tags && (
              <div className={styles.blogPostTags}>
                {post.tags.map((tag, index) => (
                  <span key={index} className={styles.blogPostTag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPost;

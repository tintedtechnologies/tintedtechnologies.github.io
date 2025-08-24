// Simple YAML frontmatter parser
export function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content };
  }
  
  const [, yamlString, markdownContent] = match;
  const frontmatter = {};
  
  // Simple YAML parser for our use case
  yamlString.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Handle arrays (tags)
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
      }
      
      // Handle booleans
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      frontmatter[key] = value;
    }
  });
  
  return { frontmatter, content: markdownContent };
}

// Dynamic blog post loading
async function loadBlogPosts() {
  const blogModules = import.meta.glob('../blogs/*.md', { as: 'raw' });
  const posts = [];
  
  for (const path in blogModules) {
    try {
      const content = await blogModules[path]();
      const { frontmatter } = parseFrontmatter(content);
      
      // Extract slug from filename
      const slug = path.split('/').pop().replace('.md', '');
      
      posts.push({
        id: slug,
        slug,
        ...frontmatter
      });
    } catch (error) {
      console.error(`Error loading blog post ${path}:`, error);
    }
  }
  
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Cache for blog posts
let cachedPosts = null;

// Function to get all blog posts
export async function getBlogPosts() {
  if (!cachedPosts) {
    cachedPosts = await loadBlogPosts();
  }
  return cachedPosts;
}

// Function to get a single blog post content
export async function getBlogPostContent(slug) {
  const blogModules = import.meta.glob('../blogs/*.md', { as: 'raw' });
  
  for (const path in blogModules) {
    const filename = path.split('/').pop().replace('.md', '');
    if (filename === slug) {
      try {
        const content = await blogModules[path]();
        const { frontmatter, content: markdownContent } = parseFrontmatter(content);
        return {
          frontmatter: { ...frontmatter, slug },
          content: markdownContent
        };
      } catch (error) {
        console.error(`Error loading blog post ${slug}:`, error);
        return null;
      }
    }
  }
  
  return null;
}

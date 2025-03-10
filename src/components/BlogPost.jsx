import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {

  const { id } = useParams();

  // State for holding the content of the blog post
  const [content, setContent] = useState('');

  // State for handling any errors
  const [error, setError] = useState(null);

  useEffect(() => {
    // Dynamically import the markdown file based on the blog post ID
    import(`../content/${id}.md`)
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((text) => setContent(text))
          .catch((err) => setError('Error loading blog post.'));
      })
      .catch(() => setError('Blog post not found.')); // Handles import error
  }, [id]);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;

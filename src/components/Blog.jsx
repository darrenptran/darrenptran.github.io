import React from 'react';
import { Link } from 'react-router-dom';

// Functional component that renders a list of blog posts
const Blog = () => {
  // Array of blog post objects with details for each post
  const blogPosts = [
    {
      id: 1,
      title: "Stop Binge-Watching! Extract, Summarize, and Learn from YouTube Playlists with this Powerful Tool",
      author: "Darren Tran",
      date: "February 9, 2024",
      summary: "Using a Python script to save you countless hours of watching Youtube tutorials."
    },
    {
      id: 2,
      title: "Linux Workstation",
      author: "Darren Tran",
      date: "September 13, 2024",
      summary: "My current Linux setup and why I chose Debian as my distribution."
    },
    {
      id: 3,
      title: "Designing Scalable and Resilient Architectures with AWS",
      author: "Darren Tran",
      date: "August 3, 2024",
      summary: "Explore key AWS services and design patterns to build highly available and scalable systems on the cloud."
    },
    {
      id: 4,
      title: "Enhancing Network Security: Advanced Concepts and Best Practices",
      author: "Darren Tran",
      date: "July 1, 2024",
      summary: "Dive into advanced network security practices, including Zero Trust, encryption, and effective monitoring, to safeguard IT infrastructure."
    },
  ];

  return (
    <div className="blog-thumbnails">
      {/* Map through the blogPosts array and create a thumbnail for each post */}
      {blogPosts.map(post => (
        <div className="blog-thumbnail" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <Link to={`/blog/${post.id}`} className="button">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;

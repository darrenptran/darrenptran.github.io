import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="sidebar">
    <ul className="sidebar-menu">
      <li className="sidebar-item">
        <a href="/" className="button">Home</a>
      </li>
      <li className="sidebar-item">
        <a href="/#about" className="button">About</a>
      </li>
      <li className="sidebar-item">
        <a href="/#portfolio" className="button">Portfolio</a>
      </li>
      {/* Blog page link, uses React Router Link for client-side navigation */}
      <li className="sidebar-item">
        <Link to="/blog" className="button">Blog</Link>
      </li>
      <li className="sidebar-item">
        <a href="/#contact" className="button">Contact</a>
      </li>
    </ul>
  </aside>
);

export default Sidebar;

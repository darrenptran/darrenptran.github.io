import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import NotFound from './components/NotFound';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div class="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

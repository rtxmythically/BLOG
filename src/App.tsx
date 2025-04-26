// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import Post from './components/Post';
import LeftSidebar from './components/Left-Sidebar';
import Header from './components/Header';
import RightSidebar from './components/Right-Sidebar';
import Donate from './components/Donate';
import './App.css';

const App: React.FC = () => {
  return (
  <>
    <Helmet>
        <title>Jimmy Lin's Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
    <Router>
      <div className="app-container">
        <LeftSidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </div>
        <RightSidebar />
      </div>
    </Router>
  </>
  );
};

export default App;
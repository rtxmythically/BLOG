import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import './css/home.css'; // 导入 CSS 文件

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 18;

  // 计算总页数
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 计算总页数
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 处理页码点击事件
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="home-container">
      <div className="posts-wrapper">
      {currentPosts.map(post => (
        <Link to={`/post/${post.id}`} key={post.id} className="post-card">
          <img src={post.image} alt={post.title} className="post-image" />
          <div className="post-info">
            <h2>{post.title}</h2>
            <span>{post.date}</span>
          </div>
        </Link>
      ))}
    </div>

      <div className="pagination">
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber + 1}
            onClick={() => handlePageClick(pageNumber + 1)}
            className={`page-btn ${currentPage === pageNumber + 1 ? 'active' : ''}`}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
    
  );
};

export default Home;
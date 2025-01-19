import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isHidden ? 'hidden' : ''}`}>
      <h1>Jimmy Lin's Blog</h1>
      <div className='Rightheader'>
        <Link to="/" className='home'>首頁</Link>
        <Link to="/donate" className="donate">
          捐贈
          <img className="BTC" src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E7%B6%B2%E7%AB%99%E5%85%83%E7%B4%A0%2FBTC-logo.png?alt=media&token=ca62ebe6-eda7-4bea-9605-e11e230e99ca" alt="BTC Logo"/>
        </Link>
        <a className="x" href="https://x.com/RTX96733247" target="_blank" rel="noopener noreferrer">
          <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E7%B6%B2%E7%AB%99%E5%85%83%E7%B4%A0%2FX.png?alt=media&token=99f0900b-ab51-462c-a3c3-d45eb8a96520" alt="X Logo"/>
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/jimmy-lin-688b98310/" target="_blank" rel="noopener noreferrer">
          <img src="https://firebasestorage.googleapis.com/v0/b/jimmy-lin-blog.appspot.com/o/%E7%B6%B2%E7%AB%99%E5%85%83%E7%B4%A0%2Flinkedin.png?alt=media&token=3a5c3bcf-6b00-4ec7-b6af-f19faea05a5f" alt="LinkedIn Logo"/>
        </a>
        <Link to="/english" className='english'>English</Link>
        
      </div>
    </header>
  );
};

export default Header;
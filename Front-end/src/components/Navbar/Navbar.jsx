import React, { useState } from 'react';
import './Navbar.css';
import { menu, cross } from '../../asset/images';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);


  const toggleMobileMenu = () => {
    setIsActive(!isActive);
  };

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsActive(false);
  };

  return (
    <>
      <nav>
        <a href="#header" className='logo'>
          Soun<span className='highlight'>Dzign</span>
        </a>
        <ul>
          <li><a href="#topics">Course Details</a></li>
          <li><a href="#info">About</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#feedbacks">Feedback</a></li>
        </ul>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <img src={menu} alt="" />
        </div>
      </nav>
      <div className={`mobile-menu ${isActive ? 'active' : ''}`}>
        <ul className='mobile-menu-items'>
          <li><a href="#topics" onClick={closeMobileMenu}>Course Details</a></li>
          <li><a href="#info" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#blog" onClick={closeMobileMenu}>Blog</a></li>
          <li><a href="#feedbacks" onClick={closeMobileMenu}>Feedback</a></li>
        </ul>
        <img src={cross} alt="" onClick={closeMobileMenu} />
      </div>
    </>
  );
}

export default Navbar;

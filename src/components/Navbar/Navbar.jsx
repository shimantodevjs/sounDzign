import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <a href="#" className='logo'>
        Sound<span className='highlight'>Dzign</span>
      </a>
      <ul>
        <li><a href="#">Course Details</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
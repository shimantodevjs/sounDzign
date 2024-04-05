import React from 'react'
import './Footer.css'
import {facebookLogo,instaLogo,twitterLogo} from '../../asset/images'

const Footer = () => {
  return (
    <footer className='black'>
      <div className="wrapper">
            <div className="content-container">
               <div className="links">
                   <div className="logo">
                    <a href="#">
                      Soun<span className='highlight'>Dzign</span>
                    </a>
                   </div>

                   <div className="social-icons">
                       <a href="#">
                        <img src={facebookLogo} alt="" />
                       </a>

                       <a href="#">
                        <img src={twitterLogo} alt="" />
                       </a>

                       <a href="#">
                        <img src={instaLogo} alt="" />
                       </a>
                   </div>

                   <div className="copyright">
                      This website is designed by GTCoding Ⓒ 2024
                   </div>
               </div>

               <div className="links">
                   <h3>Quick Links</h3>
                   <ul>
                    <li>
                      <a href="#">Blog</a>
                    </li>

                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                   </ul>
               </div>

               <div className="links">
                   <h3>Contact Us</h3>
                   <ul>
                    <li>
                      <a href="#">contact@email.com</a>
                    </li>

                    <li>
                      <a href="#">+1 999 9999 999</a>
                    </li>
                   </ul>
               </div>
               <div className="copyright-mobile">
                   This website is designed by GTCoding Ⓒ 2024
               </div>
            </div>
          </div>
    </footer>
  )
}

export default Footer
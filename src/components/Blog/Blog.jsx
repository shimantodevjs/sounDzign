import React from 'react'
import './Blog.css'
import {Thumbnail1,Thumbnail2,Thumbnail3} from '../../asset/images'

const Blog = () => {
  return (
    <section id='blog' className='light-red'>
           <div className="wrapper">
               <h2 className='light'>Latest Posts</h2>
               <div className="content-container">
                  <div className="post">
                    <div className="tag">DAW</div>
                    <a href="#">
                      <img src={Thumbnail1} alt="" />
                    </a>
                    <a href="#">
                      <h3 className="post-title">
                        How To Use Drum Machine in Logic Pro X
                      </h3>
                    </a>
                  </div>

                  <div className="post">
                    <div className="tag">Mixing</div>
                    <a href="#">
                      <img src={Thumbnail2} alt="" />
                    </a>
                    <a href="#">
                      <h3 className="post-title">
                       How To Mix Guitars Effectively
                      </h3>
                    </a>
                  </div>

                  <div className="post">
                    <div className="tag">Vox</div>
                    <a href="#">
                      <img src={Thumbnail3} alt="" />
                    </a>
                    <a href="#">
                      <h3 className="post-title">
                        The Real Power of Harmonies in Music Production
                      </h3>
                    </a>
                  </div>
               </div>
               <div className="btn-container">
                    <a href="#" className="all-post-btn">
                      All posts
                    </a>
                  </div>
           </div>
    </section>
  )
}

export default Blog
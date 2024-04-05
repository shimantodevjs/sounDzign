import React from 'react'
import './Info.css'
import {studentIcon , videoIcon,redFrameIcon} from '../../asset/images'

const Info = () => {
  return (
    <section className='dark-gray' id='info'>
          <div className="wrapper">
              <div className="content-container">
                   <div className="info-content">
                       <img src={studentIcon} alt="" />
                       <div className="amount">23,ooo+</div>
                       <div className="type">Students</div>
                   </div>
                   <div className="info-content">
                       <img src={videoIcon} alt="" />
                       <div className="amount">26 Hrs</div>
                       <div className="type">Video Content</div>
                   </div>
              </div>
              <img src={redFrameIcon} className='red-frame' alt="" />
          </div>
    </section>
  )
}

export default Info
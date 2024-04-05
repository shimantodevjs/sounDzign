import React from 'react'
import './Feedback.css'
import {person1,person2,person3} from '../../asset/images'

const Feedback = () => {
  return (
    <section id='feedbacks' className='dark-gray'>
         <div className="wrapper">
            <h2>What our students say?</h2>
            <div className="content-container">

                <div className="feedback">
                    <img src={person1} alt="" />
                    <div className="reviewer-details">
                      <div className="name">Peter Adams</div>
                      <div className="review">This is a great course. I got to learn a lot.</div>
                    </div>
                </div>

                <div className="feedback">
                    <img src={person2} alt="" />
                    <div className="reviewer-details">
                      <div className="name">Robert Fox</div>
                      <div className="review">I got to learn a lot about Music Production with this course. Thanks :) </div>
                    </div>
                </div>

                <div className="feedback">
                    <img src={person3} alt="" />
                    <div className="reviewer-details">
                      <div className="name">Emily Smith</div>
                      <div className="review">Awesome! Great job!!</div>
                    </div>
                </div>
                
            </div>
         </div>
    </section>
  )
}

export default Feedback
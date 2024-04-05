import React,{useState} from 'react'
import './Topics.css'
import { frequencies,daw,processing,mixing,mixingConsole,mastering,yellowFrameIcon} from '../../asset/images'

const Topics = () => {

  const [currentImage,setCurrentImage]=useState(frequencies)

  return (
    <section id='topics' className='black'>
       <div className="wrapper">
          <h2>What will you learn?</h2>
          <div className="content-container">
             <ul className='topic-list'>
              <li onMouseEnter={()=>setCurrentImage(frequencies)}>What are frequencies?</li>
              <li onMouseEnter={()=>setCurrentImage(daw)}>Using Daw</li>
              <li onMouseEnter={()=>setCurrentImage(processing)}>Vocals Processing</li>
              <li onMouseEnter={()=>setCurrentImage(mixing)}>Mixing</li>
              <li onMouseEnter={()=>setCurrentImage(mixingConsole)}>Mixing Console</li>
              <li onMouseEnter={()=>setCurrentImage(mastering)}>Mastering</li>
             </ul>
          <div className="topic-image">
            <img className='crntImg' src={currentImage} alt="" />
            <img src={yellowFrameIcon} className='yellow-frame' alt=""/>
          </div>
          </div>
           
       </div>
    </section>
  )
}

export default Topics
import React from 'react'
import './Info.css'
import { BsInstagram, BsTwitterX, BsLinkedin } from "react-icons/bs";

const Info = () => {

  return (
    <div className='app__info'>
      <div className='app__info-container'>
        <h2>Clarification</h2>
        <p>The API that powers this application works with a large number of cities around the globe, 
          but not with 100%. It is likely that you will try to search for a city and get no response. 
          This is a simple application, use it in the main cities of each country.</p>
        <div className='divisor'/>
        <div className='app__info-container-icons'>
          <BsInstagram className='info-icon' />
          <BsTwitterX className='info-icon' />
          <BsLinkedin className='info-icon' />
        </div>
      </div> 
    </div>
  )
}

export default Info

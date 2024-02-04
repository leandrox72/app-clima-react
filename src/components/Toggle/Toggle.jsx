import React from 'react'
import { FaMoon, FaSun  } from "react-icons/fa";
import './Toggle.css'

const Toggle = ({ handdleChange }) => {
  return (
    <div className='app__toggle' onClick={handdleChange}>
        <FaSun className='app__toggle-icon'/>
        <FaMoon className='app__toggle-icon'/>
    </div>
  )
}

export default Toggle

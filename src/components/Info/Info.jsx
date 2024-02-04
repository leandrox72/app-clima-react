import React from 'react'
import './Info.css'
import { BsInstagram, BsTwitterX, BsLinkedin } from "react-icons/bs";

const Info = () => {

  return (
    <div className='app__info'>
      <div className='app__info-container'>
        <h2>Aclaracion</h2>
        <p>Esta la API que da poder a esta aplicacion si bien 
          trabaja con una gran cantidad de ciudades de todo el globo, 
          no son el 100%. Es probable que intente buscar alguna ciudad
          y no obtenga respuesta.</p>
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

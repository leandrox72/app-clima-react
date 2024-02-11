import React from 'react'
import './Search.css'
import { useState } from 'react'

const Search = () => {

    const urlBase = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const difKelvin = 272.15;

    const [ciudad, setCiudad] = useState('');
    const [dataClima, setDataClima] = useState(null);
    const [errorCiudad, setErrorCiudad] = useState(false);

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (ciudad.length > 0) {
            fetchClima()
        }
    }

    const fetchClima = async () => {
        try {
            //No creo que esta sea la forma mas optima de manejar el error
            //404, pero funciona, asi que automaticamente no me importa...
            setDataClima('')
            setErrorCiudad(false)
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
            if (response.status === 404) {
                setErrorCiudad(true)
            }
            else {
                const data = await response.json()
                setDataClima(data)
            }    
        }
        catch(error) {
            console.error('ERROR: ', error)
        }
    }

  return (       
        <div className="app__search">
            <h1>Clima Center</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text" 
                        value={ciudad}
                        onChange={handleCambioCiudad}
                        placeholder="Ciudad de la que desea conocer el clima" 
                    />
                    <button type="submit">Buscar</button>
                </form>
                {dataClima && (
                    <div className='app__search-result'>
                        <h2>{dataClima.name}</h2>
                        <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
                        <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} />
                    </div>
                )}
                {errorCiudad === true && (
                    <div className='app__search-result'>
                        <h3>Ingrese una Ciudad Valida</h3>
                    </div>
                )}
        </div>
    )
}

export default Search

import React, { useState } from 'react'
import './City.css';


    const City = ({city}) => {
        const [isParagraphVisible, setIsParagraphVisible] = useState(false);
      
        const toggleParagraphVisibility = () => {
          setIsParagraphVisible(!isParagraphVisible);
        };
     
  return (
    <div className='CityWeather'>
        <h2 className='cityName'>{city.name.toUpperCase()}</h2>
        <h3>{city.main.temp.toFixed()} °C</h3>
        <h3>{city.weather[0].main.toUpperCase()}</h3>
        <button onClick={toggleParagraphVisibility} className="bg-blue-950 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        {isParagraphVisible ? 'Hide Details' : 'Show Details'}
      </button>
        {isParagraphVisible && (
        <p>
          Feels Like: {city.main.feels_like.toFixed()}°C
          <br />
          Humidity: {city.main.humidity.toFixed()} %
          <br />
          Pressure: {city.main.pressure.toFixed()} hPa
          <br />
          Temp Max: {city.main.temp_max.toFixed()}°C
          <br />
          Temp Min: {city.main.temp_min.toFixed()}°C
          <br />
          Wind Speed: {(city.wind.speed*3.6).toFixed(1)} m/s
        </p>
        
      )}
    </div>
  )
}

export default City
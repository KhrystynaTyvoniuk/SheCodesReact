import React, { useState } from 'react';
import axios from 'axios';
import './App.css';



function App() {
  const [data, setData] = useState({})
  const [city, setCity] = useState('')
  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09d7fe078a1bda5730bd116188593f4a&units=metric`
  const searchCity =(event) => {
    if (event.key === 'Enter'){
      axios.get(Url).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
      setCity('')
    }
  
  }
  return (
    <div className="app">
      <div className='search'>
        <input 
        value={city}
        onChange={ event => setCity(event.target.value)}
        onKeyPress = {searchCity}
        placeholder='Enter your city...'
        type="text" />
      </div>
        <div className='container'>
        <div className='main'>
          <div className='main_left'>
            <div className='temperature'>
            <img src='/' alt='weather-logo' />
              {data.main ?<h2>{data.main.temp}°C</h2> :null}
            </div>
            <div className='weather_description'>
            <ul>
              <li>
                Pressure
                {data.main ? <p className='bold'>{data.main.pressure}</p> : null}
              </li>
              <li>
                Humidity: 
                {data.main ? <p className='bold'>{data.main.humidity}</p> : null}
                </li>
                <li>
                Wind: km/h
                {data.wind ? <p className='bold'>{data.wind.speed}</p> : null}
                </li>
            </ul>
            </div>
          </div>
          <div className='main_right'>
            <h2>{data.name}</h2>
            <p>Monday, 19:00</p>
            {data.weather ? <p className='bold'>{data.weather[0].main}</p> : null}
          </div>
</div>
<div className='forecast'>
  <p> Mon</p>
  <p> Tue</p>
  <p> Wed</p>
  <p> Thu</p>
  <p> Fri</p>
  <p> Sat</p>
</div>
<div className='footer'>
  <p> <a href='https://github.com/KhrystynaTyvoniuk'>Open-source code</a>, by <a href='https://www.instagram.com/khrysty.na/'>Khrystyna Tyvoniuk</a> from <a href='https://www.shecodes.io/'>SheCodes</a></p>
</div>
</div>
    </div>
  );
}

export default App;

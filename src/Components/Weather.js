import React from 'react';
import weather from '../data/weather';

const Weather = () => {
    let Ktemp = weather.list.main.temp;
    const Ftemp = (Ktemp - 273.15) * 9/5 +32;

        return (
            <li className="weather">
                <h3>Location Temperature</h3>
                <p>Your latitude is `{Ftemp}</p>
                <h3>Location Humidity</h3>
                <p>Your humidity is `{weather.list.main.humidity}</p>
                <h3>Location Wind</h3>
                <p>Your wind speed is `{weather.list.wind.speed}</p>
            </li>
        ) 
    }

export default Weather;
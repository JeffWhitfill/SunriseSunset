import React from 'react';
import weather from '../data/weather';

class Weather extends React.Component {
    render () {
        const Ktemp = weather.city.list[0].main.temp;
        const Ftemp = ((Ktemp - 273.15) * (9/5) + 32).toFixed(0);
            
            return (
            
                <div>
                    <h3>Location Temperature</h3>
                    <p>Your temperature is {Ftemp}</p>
                    <h3>Location Humidity</h3>
                    <p>Your humidity is {weather.city.list[0].main.humidity}</p>
                    <h3>Location Wind</h3>
                    <p>Your wind speed is {weather.city.list[0].wind.speed}</p>
                </div>
            ) 
        } 
    }
    

export default Weather;
import React from 'react';
import Input from './Input';

class Weather extends React.Component {



    //Get weather data at location
//    onSubmitInput= (event)=> {
//    event.preventDefault()
//    fetch(`api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lng}`)
//    .then(function (response) {
//        return response.json();
//      })
//      .then(function (data) {
//      this.setState({temperature: data.city.list[0].main.temp});
//      this.setState({humidity: data.city.list[0].main.humidity});
//      this.setState({windSpeed: data.city.list[0].wind.speed})
//  });
//}

    render () {
        const Ktemp = this.temperature;
        const Ftemp = ((Ktemp - 273.15) * (9/5) + 32).toFixed(0);
            
            return (            
                <div>
                    <Input />
                    <h3>Location Temperature</h3>
                    <p>Your temperature is {Ftemp} F.</p>
                    <h3>Location Humidity</h3>
                    <p>Your humidity is {this.humidity}% .</p>
                    <h3>Location Wind</h3>
                    <p>Your wind speed is {this.windSpeed}mph .</p>
                </div>
            ) 
        } 
    }
    

export default Weather;
import React from 'react';
import Input from './Input';

class Weather extends React.Component {
// set initial state for temperature, humidity and wind speed
    state = {
        temperature: "",
        humidity: "",
        windSpeed: ""
    }

    //Get weather data at location
    onSubmitInput= (location)=> {
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2208760fbb1e9cef062191db665bf8df`)
                .then(function (response) {
                    return response.json();
                  })
                  .then((response)=>{
                // Update state for temperature, humidity and wind speed
                  this.setState({temperature: response.main.temp});
                  this.setState({humidity: response.main.humidity});
                  this.setState({windSpeed: response.wind.speed});
                });          
    }

  // Print calculated Ftemp, humidity and wind speed to screen

    render() {
                    const Ktemp = this.state.temperature;
                    // convert temperature in Kelvin to Fahrenheit
                    const Ftemp = ((Ktemp - 273.15) * (9 / 5) + 32).toFixed(0);

                    return(            
                        <div className="container">
                                <Input onSubmitInput={this.onSubmitInput} />
                                <h3 className="bg-info text-white">Location Temperature</h3>
                                <p>Your temperature is {Ftemp} F.</p>
                                <h3 className="bg-info text-white">Location Humidity</h3>
                                <p>Your humidity is {this.state.humidity}% .</p>
                                <h3 className="bg-info text-white">Location Wind</h3>
                                <p>Your wind speed is {this.state.windSpeed} mph .</p>
                        </div >
            )
    }
}


export default Weather;
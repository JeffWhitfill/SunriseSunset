import React from 'react';
import Input from './Input';

class Weather extends React.Component {

    state = {

        temperature: "",
        humidity: "",
        windSpeed: ""
    }

    //Get weather data at location
    onSubmitInput= (location)=> {
        
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=40b6726e5f0045a9bcc9c3aca3b2261e`)
            .then(function (response) {
                return response.json();
              }).then((response)=>{
                this.setState({lat:response.results[0].geometry.lat,lng:response.results[0].geometry.lng},()=>{
 //                 fetch(`https://api.sunrise-sunset.org/json?lat=${this.state.lat}&lng=${this.state.lng}&date=today`)
 //                 .then(function (response) {
 //                       return response.json();
 //                     })
 //                     .then((data)=>{
 //                     this.setState({sunrise: data.results.sunrise});
 //                     this.setState({sunset: data.results.sunset});
 //                 }); 
                })
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2208760fbb1e9cef062191db665bf8df`)
                .then(function (response) {
                    return response.json();
                  })
                  .then((response)=>{
                  this.setState({temperature: response.main.temp});
                  this.setState({humidity: response.main.humidity});
                  this.setState({windSpeed: response.wind.speed})
              });
              })
            
          
  }

    render() {
                    const Ktemp = this.state.temperature;
                    const Ftemp = ((Ktemp - 273.15) * (9 / 5) + 32).toFixed(0);

                    return(            
                        <div className="container">
                                <Input onSubmitInput={this.onSubmitInput} />
                                <h3>Location Temperature</h3>
                                <p>Your temperature is {Ftemp} F.</p>
                                <h3>Location Humidity</h3>
                                <p>Your humidity is {this.state.humidity}% .</p>
                                <h3>Location Wind</h3>
                                <p>Your wind speed is {this.state.windSpeed} mph .</p>
                        </div >
            )
    }
}


export default Weather;
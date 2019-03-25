import React from 'react';
import Input from './Input'

class Geocode extends React.Component {
  state={
  
    lat:"",
    lng:"",
    sunrise:"",
    sunset:"",
    temp:"",
    humidity:"",
    windSpeed:""
  }

  updateLocation = event=> {
      this.setState({location:event.target.value})
    }
    
  //updateLatitude = event => {
  //    this.setState({lat:event.target.value})
  //  }

  //updateLongitude = event => {
  //  this.setState({lng:event.target.value}) 
  //  }

    // Get coords from opencage
    onSubmitInput= (location)=> {
        
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=40b6726e5f0045a9bcc9c3aca3b2261e`)
            .then(function (response) {
                return response.json();
              }).then((response)=>{
                this.setState({lat:response.results[0].geometry.lat,lng:response.results[0].geometry.lng},()=>{
//                  fetch(`https://api.sunrise-sunset.org/json?lat=${this.state.lat}&lng=${this.state.lng}&date=today`)
//                  .then(function (response) {
//                        return response.json();
//                      })
//                      .then((data)=>{
//                      this.setState({sunrise: data.results.sunrise});
//                      this.setState({sunset: data.results.sunset});
//                  }); 
                })
 //               fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2208760fbb1e9cef062191db665bf8df`)
 //               .then(function (response) {
 //                   return response.json();
 //                 })
 //                 .then((response)=>{
 //                 this.setState({temperature: response.main.temp});
 //                 this.setState({humidity: response.main.humidity});
 //                 this.setState({windSpeed: response.wind.speed})
 //             });
              })
            
          
  }

    

    render() {
        return (
            <div className="container">
                <Input onSubmitInput={this.onSubmitInput} />
                <h3>Location Latitude</h3>
                <p>Your latitude is {this.state.lat}</p>
                <h3>Location Longitude</h3>
                <p>Your longitude is {this.state.lng}</p>
            </div>
        )
    }
}

export default Geocode;
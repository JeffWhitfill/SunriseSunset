import React from 'react';
import Input from './Input'

class Geocode extends React.Component {
  // set initial state for latitude and longitude
  state={
    lat:"",
    lng:""
  }

  //updateLocation = event=> {
  //    this.setState({location:event.target.value})
  //  }
    // Receive location from input box
    // Get coordinates from opencage API
    onSubmitInput= (location)=> {
        
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=40b6726e5f0045a9bcc9c3aca3b2261e`)
            .then(function (response) {
                return response.json();
              })
            .then((response)=>{
                this.setState({lat:response.results[0].geometry.lat,lng:response.results[0].geometry.lng},()=>{
              }) 
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
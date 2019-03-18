import React from 'react';
import Input from './Input'

class Geocode extends React.Component {

    state={
        lng:"",
        lat:"" 
    }

    // Get coords from opencage
    onSubmitInput= (event)=> {
        event.preventDefault()
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.location}&key=40b6726e5f0045a9bcc9c3aca3b2261e`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
            this.setState({lat: data.results[0].geometry.lat});
            this.setState({lng: data.results[0].geometry.lng});
        });
  }

    

    render() {
        return (
            <div>
                <Input/ >
                <h3>Location Latitude</h3>
                <p>Your latitude is {lat}</p>
                <h3>Location Longitude</h3>
                <p>Your longitude is {lng}</p>
            </div>
        )
    }
}

export default Geocode;
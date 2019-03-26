import React from 'react';
import Input from './Input';

class SunriseSunset extends React.Component {
    // set initial state for sunrise and sunset
    state={
        sunrise:"",
        sunset:"",
    }

    //Get sunrise-sunset.org times
    // get latitude and longitude from geocode fetch
    // use lat and lon to retreive sunset and sunrise data
    onSubmitInput = (location) => {
       fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=40b6726e5f0045a9bcc9c3aca3b2261e`)
            .then(function (response) {
                return response.json();
            }).then((response) => {
                // update state for lat and long
                this.setState({ lat: response.results[0].geometry.lat, lng: response.results[0].geometry.lng }, () => {
                    fetch(`https://api.sunrise-sunset.org/json?lat=${this.state.lat}&lng=${this.state.lng}&date=today`)
                        .then(function (response) {
                            return response.json();
                        })
                        .then((data) => {
                            // update state for sunrise and sunset
                            this.setState({ sunrise: data.results.sunrise });
                            this.setState({ sunset: data.results.sunset });
                        });
                })
            })
    }

    // Print sunrise and sunset to screen

    render() {
        return (
            <div className="container">
                <Input onSubmitInput={this.onSubmitInput} />
                <h3>Location Sunrise</h3>
                <p>Your Sunrise is projected for {this.state.sunrise} UTC</p>
                <h3>Location Sunset</h3>
                <p>Your Sunset is projected for {this.state.sunset} UTC </p>
                <h6>All times are in Coordinated Universal Time (UTC)</h6>
            </div>
        )
    }

}

export default SunriseSunset;
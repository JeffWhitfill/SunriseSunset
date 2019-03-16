import React from 'react';
import sunrisesunset from '../data/sunrisesunset';

import Input from './Input';

class SunriseSunset extends React.Component {

//Get sunrise-sunset.org times
    onSubmitInput= (event)=> {
    event.preventDefault()
    fetch(`https://api.sunrise-sunset.org/json?lat=${this.state.lat}&lng=${this.state.lng}&date=today`)
        .then(function (response) {
              return response.json();
            })
            .then(function (data) {
            this.setState({sunrise :data.results.sunrise});
            this.setState({sunset: data.results.sunset});
        });
    }

    render() {
        return (
            <div>
                <Input />
                <h3>Location Sunrise</h3>
                <p>Your Sunrise is projected for {sunrisesunset.results.sunrise}</p>
                <h3>Location Sunset</h3>
                <p>Your Sunset is projected for {sunrisesunset.results.sunset}</p>
            </div>
            ) 
        }
        
    }

export default SunriseSunset;
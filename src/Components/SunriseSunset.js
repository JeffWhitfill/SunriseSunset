import React from 'react';
import sunrisesunset from '../data/sunrisesunset';

class SunriseSunset extends React.Component {
    render () {
        return (
            <div>
                <h3>Location Sunrise</h3>
                <p>Your Sunrise is projected for {sunrisesunset.results.sunrise}</p>
                <h3>Location Sunset</h3>
                <p>Your Sunset is projected for {sunrisesunset.results.sunset}</p>
            </div>
        ) 
    }
        
    }

export default SunriseSunset;
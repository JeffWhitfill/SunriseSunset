import React from 'react';
import geocode from '../data/geocode';

class Geocode extends React.Component {
    render () {
        return (
            <div>
                <h3>Location Latitude</h3>
                <p>Your latitude is {geocode.results[0].geometry.lat}</p>
                <h3>Location Longitude</h3>
                <p>Your longitude is {geocode.results[0].geometry.lng}</p>
            </div>
        ) 
     }
    }

export default Geocode;
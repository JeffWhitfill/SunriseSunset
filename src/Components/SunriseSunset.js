import React from 'react';
import sunrisesunset from '../data/sunrisesunset';

const SunriseSunset = () => {
        return (
            <li className="suntimes">
                <h3>Location Sunrise</h3>
                <p>Your Sunrise is projected for `{sunrisesunset.sunrise}</p>
                <h3>Location Sunset</h3>
                <p>Your Sunsety is projected for`{sunrisesunset.sunset}</p>
            </li>
        ) 
    }

export default SunriseSunset;
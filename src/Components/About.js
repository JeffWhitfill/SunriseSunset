import React from 'react';

const About = (props) => (
  <div className="main-content">
    <h2>{ props.title }</h2>
    <p>The App is designed to take a location, find its geolocation,i. e. latitude and longitude, fetch the sunrise and sunset times for that location and finally show the weather for that location.</p>
  </div>
);

export default About;

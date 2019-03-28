import React, { Component } from 'react';

class Home extends Component {    
  
  render() {
    return (
      <div className="main-content home">
        <h2 className="bg-success font-italic">Sunrise Sunset App</h2>
        <p>This fun directory is a project for the <em>Javascript-React class</em> at Code Louisville.</p>
        <p>Find out weather details and when the sun rises and sets at a particular location (i/e. at a given latitude and longitude).</p>
        <p>The project is set up for United States locations only.</p>
        <p>Enter location on each page to generate output for that page.</p>
        <p>When you input your location, leave off the word city at the end (e.g. use New York and Salt Lake).</p>
        <p>The temperature will appear before you enter a location.  This is due to a calculation between Kelvin and Fahrenheit (it is not an error).</p>
        <hr />
        
      </div>
    );
  }
}

export default Home;

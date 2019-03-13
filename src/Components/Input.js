import React, { Component } from 'react';

class Input extends Component {
    state={
    location:"",
    date:"",
    lng:"",
    lat:""        
}

render() {
  return (
    <form id="frm1" action="/action_page.php">
      <label>
        Location:
        <input type="text" name="formlocation" value={this.state.location} />
      </label>
        <br />
      <label>
        Date:
        <input type="date" name="formdate" value={this.state.date} />
      </label>
      <input type="submit" value="Submit" />
    </form>
);
}}

// API calls

//Get Coordinates
//fetch (`http://dev.virtualearth.net/REST/v1/Locations?query=${this.state.location}&key=Ai0ie0ek2SBBT16hwRKzadpndjgX6llvBTflWcAluxtpe4tPRnXtnaDC2Rr5ZGTE`);
// Get coords from opencage
//fetch (`https://api.opencagedata.com/geocode/v1/json?q=${this.state.location}&key=40b6726e5f0045a9bcc9c3aca3b2261e`);
//Get sunrise-sunset.org times
//fetch(`https://api.sunrise-sunset.org/json?lat=${this.state.lat}&lng=${this.state.lng}&date=${this.state.date}`);
//Get weather data at location
//fetch(`api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lng}`);



export default Input;
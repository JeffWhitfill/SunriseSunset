import React, { Component } from 'react';

class Input extends Component {
// set initial state for location
  state={
    location: ""
  }
    
// update the state with new location
updateLocation = event=> {
  this.setState({location:event.target.value})
}

// accept new location upon clicking submit button
  onSubmitInput= (event)=> {
    event.preventDefault()
 this.props.onSubmitInput(this.state.location)
      
}

render() {
  return (
    <form id="frm1" onSubmit={this.onSubmitInput}>
      <label>
        Location:
        <input type="text" name="formlocation" value={this.state.location} onChange={this.updateLocation}  />
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
//fetch(`https://api.sunrise-sunset.org/json?lat=${this.state.lat}&lng=${this.state.lng}&date=today`);
//Get weather data at location
//fetch(`api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lng}`);



export default Input;
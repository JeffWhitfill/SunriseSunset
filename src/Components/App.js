import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//App components
import Header from './Header';
import SunriseSunset from './SunriseSunset';
import Weather from './Weather';
import Geocode from './Geocode';


const App = () => (
    <BrowserRouter>
      <div className="container">
        <Header />
        
        <Route exact path="/" component={Home} />
        <Route path="/about" render={ () => <About title='About' /> } />
        <Route path="/SunriseSunset" component={SunriseSunset} />
        <Route path="/Weather" component={Weather} />
        <Route path="/Geocode" component={Geocode} />
      </div>
    </BrowserRouter>
);

export default App;

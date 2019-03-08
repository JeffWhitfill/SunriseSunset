import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
  
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/SunriseSunset">SunriseSunset</NavLink></li>
      <li><NavLink to="/Weather">Weather</NavLink></li>
      <li><NavLink to="/Input">Input</NavLink></li>
      <li><NavLink to="/Geocode">Geocode</NavLink></li>
    </ul>    
  </header>
);

export default Header;

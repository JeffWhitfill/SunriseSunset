import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/sun times">Sun Times</NavLink></li>
      <li><NavLink to="/weather">Weather</NavLink></li>
      <li><NavLink to="/form">Form</NavLink></li>
    </ul>    
  </header>
);

export default Header;

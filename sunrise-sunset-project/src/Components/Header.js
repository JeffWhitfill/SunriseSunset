import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>

   
      <ul className="navbar nav-tabs list-unstyled bg-light navbar-light">
        <li className="nav-item active"><NavLink exact to="/">Home</NavLink></li>
        <li className="nav-item active"><NavLink to="/Geocode">Geocode</NavLink></li>
        <li className="nav-item active"><NavLink to="/SunriseSunset">SunriseSunset</NavLink></li>
        <li className="nav-item active"><NavLink to="/Weather">Weather</NavLink></li>
      </ul>
  
  </header>
);

export default Header;

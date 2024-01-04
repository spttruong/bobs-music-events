import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'
import CompanyLogo from '../images/logo.png'

const Header = () => {
  return (
    <header>
      <div className="logo">
        {/* Make the logo a clickable link to the home page */}
        <NavLink to="/">
          <img src={CompanyLogo} alt="Bob's Ochestra Hall Logo" />
        </NavLink>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
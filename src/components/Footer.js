import React from 'react'
import { NavLink } from 'react-router-dom'
import CompanyLogoCentered from '../images/logo-centered.png'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-blue-300 p-4 text-white">
      
      <div className="logo mb-4">
        {/* Make the logo a clickable link to the home page */}
        <NavLink to="/">
          <img src={CompanyLogoCentered} alt="Bob's Orchestra Hall Logo" />
        </NavLink>
      </div>
      
      <div className='text-gray-900 mb-5'>
        <h4 className='mb-4 text-xl text-black text-center font-bold'>LOCATION</h4>
        
        <div className='text-center'>
          <p>12345 Orchestra Ave</p>
          <p>Seattle, WA</p>
          <p>99999-1234</p>
        </div>
        
        <div className='text-center mt-4'>
          <p>Box Office</p>
          <p>555-555-1234</p>
        </div>
      </div>

      <div className="flex flex-col space-y-2 text-center">
          <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-gray-700 hover:underline"
            }>Home
          </NavLink>
          <NavLink to="/event-calendar" className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-gray-700 hover:underline"
            }>Event Calendar
          </NavLink>
          <NavLink to="/about-us" className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-gray-700 hover:underline"
            }>About Us
          </NavLink>
          <NavLink to="/contact-us" className={({ isActive }) =>
              isActive ? "text-black font-bold" : "text-gray-700 hover:underline"
            }>Contact Us
          </NavLink>
      </div>

      <p className='mt-4 text-black'>&copy; 2024 Bob's Orchestra Hall. All rights reserved.</p>

    </footer>
  );
};

export default Footer;
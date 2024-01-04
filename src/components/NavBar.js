// NavBar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CompanyLogo from '../images/logo.png';
import MobileMenuIcon from '../images/hamburger-menu-icon.svg';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-300 p-4 relative">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo and Home NavLink */}
        <div className="flex items-center">
          <NavLink to="/" className="text-black font-bold text-xl">
            <img src={CompanyLogo} alt="Bob's Orchestra Hall Logo" />
          </NavLink>
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-black font-bold' : 'text-gray-700 hover:underline'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? 'text-black font-bold' : 'text-gray-700 hover:underline'
            }
          >
            All Events
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? 'text-black font-bold' : 'text-gray-700 hover:underline'
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? 'text-black font-bold' : 'text-gray-700 hover:underline'
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden w-8">
          <img
            src={MobileMenuIcon}
            alt="Hamburger Menu Icon"
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Responsive Menu (Displayed on Small Screens) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full right-0 bg-white p-4 w-full">            <NavLink
              to="/"
              className="block mb-2 text-black font-bold hover:text-yellow-700"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/events"
              className="block mb-2 text-black font-bold hover:text-yellow-700"
              onClick={() => setMenuOpen(false)}
            >
              All Events
            </NavLink>
            <NavLink
              to="/about-us"
              className="block mb-2 text-black font-bold hover:text-yellow-700"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us"
              className="block mb-2 text-black font-bold hover:text-yellow-700"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

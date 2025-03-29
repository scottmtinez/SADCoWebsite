import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from "../images/SadCoLogo.png";

function NavBar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('/home');

  useEffect(() => {
    setActiveTab(location.pathname); 
  }, [location]);

  return (
    <div className="NavBar">
      <nav className='NavBar-nav-container'>
        <div className='NavBar-logo'>
          <img src={Logo} className='NavBar-logo' alt="Logo" />
          <div className='NavBar-slogan'>The Happy Tech Company</div>
        </div>
        <ul className='NavBar-nav-links'>
          <li className={`NavBar-link ${activeTab === '/home' ? 'active-tab' : ''}`}>
            <NavLink
              to='/home'
              className={activeTab === '/home' ? 'active-tab' : ''}
            >
              HOME
            </NavLink>
          </li>
          <li className={`NavBar-link ${activeTab === '/contactUs' ? 'active-tab' : ''}`}>
            <NavLink
              to='/contactUs'
              className={activeTab === '/contactUs' ? 'active-tab' : ''}
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;


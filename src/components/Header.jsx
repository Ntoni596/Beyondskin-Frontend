import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import MobileMenu from './MobileMenu';
import { List } from 'react-bootstrap-icons';

const baseUrl = import.meta.env.VITE_BASEURL;

const Header = () => {
  const [logoUrl, setLogoUrl] = useState('');
  useEffect(() => {
    const fetchNavLogo = async () => {
        try {
            const response = await axios.get(`${baseUrl}wp-json/custom/v1/nav-logo`); // Replace with your actual API endpoint URL
            if (response.status === 200) {
                const data = response.data;
                console.log(response.data);
                setLogoUrl(data[0]); // Assuming the logo URL is returned as the first item in the response
            } else {
                console.error('Failed to fetch logo URL');
                setLogoUrl('src/assets/images/BSlogohighres_1.png')
            }
        } catch (error) {
            console.error('Error fetching logo URL', error);
            setLogoUrl('src/assets/images/BSlogohighres_1.png')
        }
    };

    fetchNavLogo();
}, []);



  const [scrolled, setScrolled] = useState(false);
  // declare on and off state for navbar
  const [menuIsOpen, openMenu] = useState(false);
  // toggle the state of openMenu
  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen);
    document.body.classList.toggle('no-scroll');
  }
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Attach the event listeners when the component mounts
    window.addEventListener('scroll', handleScroll);


    // Detach the event listeners when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);

    };
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  const navClass = scrolled ? 'scrolled' : '';

  return (
    <>
      <div id="top-nav" className={navClass}>
        <div className="nav-logo">
          <NavLink to="/">
          <img src={logoUrl} alt="Website Logo" />
          </NavLink>
        </div>
        {/* Desktop Menu */}
        <ul id="menu">
          <li>
            <NavLink to="/about" className="nav-text-link link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/ayurveda" className="nav-text-link link">
              Ayurveda
            </NavLink>
          </li>
          <li>
            <NavLink to="/treatments" className="nav-text-link link">
              Treatments
            </NavLink>
          </li>
          <li>
            <NavLink to="/vouchers" className="nav-text-link link">
              Vouchers
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-text-link link">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-cta">
          <NavLink to="/book">
            <button id="tertiary" className="nav-button">Book Now</button>
          </NavLink>
        </div>

        <div id="menu-container">
          <div id="menu-button" className='show-mobile-menu-button' onClick={toggleMobileMenu}>
            <List id="hamburger-icon"></List>
          </div>
        </div>
      </div>

      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}

    </>
  );
};

export default Header;

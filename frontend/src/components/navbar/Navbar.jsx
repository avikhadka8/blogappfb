import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const user = false;
  return (
    <div className="top">
      {/* left nav bar */}
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-youtube"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
      </div>
      {/* center */}
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem">{user && 'Logout'}</li>
        </ul>
      </div>
      {/* right  */}
      <div className="topRight">
        {user ? (
          <img
            className="image"
            src="https://images.pexels.com/photos/6567953/pexels-photo-6567953.jpeg?cs=srgb&dl=pexels-loifotos-6567953.jpg&fm=jpg&_gl=1*18v5i21*_ga*MTczMTA0OTg5NC4xNjY1MTU4NzU0*_ga_8JE65Q40S6*MTY2Njc5ODg0MC41LjEuMTY2Njc5OTMzNS4wLjAuMA.."
            alt="none"
          />
        ) : (
          <ul className='topList' style={{marginRight:"20px"}}>
            <li className='topListItem' style={{marginRight:"20px"}}>
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className='topListItem'>
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Navbar;

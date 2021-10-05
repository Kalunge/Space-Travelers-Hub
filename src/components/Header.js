import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import logo from '../images/planet.png';

const Header = () => (
  <Router>
    <div className="d-flex justify-content-between pt-3 align-items-center pl-3">
      <ul className="nav">
        <li className="nav-item">
          <img src={logo} alt="logo" className="navLogo" />
        </li>
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link link-dark fs-4 fw-bolder">
            Space Travellers Hub
          </NavLink>
        </li>
      </ul>
      <ul className="nav">
        <li className="nav-item">
          <u>
            <NavLink to="/" className="nav-link">
              Rockets
            </NavLink>
          </u>
        </li>
        <li className="nav-item">
          <u>
            <NavLink to="/" className="nav-link border-end">
              Mission
            </NavLink>
          </u>
        </li>
        <li className="nav-item">
          <u>
            <NavLink to="/profile" className="nav-link">
              My profile
            </NavLink>
          </u>
        </li>
      </ul>
    </div>
  </Router>
);

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Header = () => (
  <>
    <div className="d-flex justify-content-between pt-3 align-items-center pl-3 mb-5">
      <ul className="nav">
        <li className="nav-item">
          <img src={logo} alt="logo" className="navLogo" />
        </li>
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active" className="nav-link link-dark fs-4 fw-bolder">
            Space Travellers Hub
          </NavLink>
        </li>
      </ul>
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/rockets" activeClassName="active" className="nav-link">
            Rockets
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/missions" activeClassName="active" className="nav-link">
            Missions
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" activeClassName="active" className="nav-link">
            My profile
          </NavLink>
        </li>
      </ul>
    </div>
  </>
);

export default Header;

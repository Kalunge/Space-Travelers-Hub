import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/planet.png';

const Header = () => (
  <section>
    <div className="d-flex justify-content-between pt-3">
      <ul className="nav">
        <li className="nav-item">
          <img src={logo} alt="logo" />
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link link-dark fs-4 fw-bolder">
            Space Travellers Hub
          </Link>
        </li>
      </ul>
      <ul className="nav">
        <li className="nav-item">
          <u>
            <Link to="/" className="nav-link">
              Rockets
            </Link>
          </u>
        </li>
        <li className="nav-item">
          <u>
            <Link to="/" className="nav-link border-end">
              Mission
            </Link>
          </u>
        </li>
        <li className="nav-item">
          <u>
            <Link to="/" className="nav-link">
              My profile
            </Link>
          </u>
        </li>
      </ul>
    </div>
  </section>
);

export default Header;

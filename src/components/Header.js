import { React, Link } from 'react';

const Header = () => (
  <div>
    <section>
      <div className="d-flex justify-content-between pt-3">
        <ul className="nav">
          <li className="nav-item">
            <img src="./images/planet.png" alt="logo" />
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link link-dark fs-4 fw-bolder">
              Space Travellers Hub
            </Link>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <u>
              <Link to="/about" className="nav-link border-end">
                Rockets
              </Link>
            </u>
          </li>
          <li className="nav-item">
            <u>
              <Link to="/calculator" className="nav-link border-end">
                Mission
              </Link>
            </u>
          </li>
          <li className="nav-item">
            <u>
              <Link to="/Quotes" className="nav-link border-end">
                My profile
              </Link>
            </u>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div className="d-flex justify-content-between pt-3">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link link-dark fs-4 fw-bolder">
              Math Magicians
            </Link>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <u>
              <Link to="/about" className="nav-link border-end">
                Home
              </Link>
            </u>
          </li>
          <li className="nav-item">
            <u>
              <Link to="/calculator" className="nav-link border-end">
                Calculator
              </Link>
            </u>
          </li>
          <li className="nav-item">
            <u>
              <Link to="/Quotes" className="nav-link border-end">
                Quotes
              </Link>
            </u>
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export default Header;

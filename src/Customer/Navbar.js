import React from "react";
import "../style/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
const logo = require("../images/log1.png");
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="helloworld">
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/trips">Trips</NavLink>
            </li>
            <li>
              <NavLink to="/feedback">Feedback</NavLink>
            </li>
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              {/* <NavLink to="/home"></NavLink> */}
              <a href="#services"> About</a>
            </li>
            <li>
              <NavLink to="/bookings">My Tickets</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>

            {/* <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Trip</a>
            </li>
            <li>
              <a href="#">Feedback</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li> */}
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
          <div className="logo" style={{ display: "inline-block" }}>
            {/* <img src={logo} className="logo1" alt="" /> */}
            Musafir Mahal
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

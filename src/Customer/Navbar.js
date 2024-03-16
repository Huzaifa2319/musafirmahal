import React from "react";
import "../style/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
const logo = require("../images/log1.png");
const Navbar = ({ isLogin, setLogin }) => {
  const navigate = useNavigate();
  return (
    <>
      {isLogin ? (
        <div className="helloworld">
          <nav className="navbar">
            <div className="navbar-container containerx">
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
                  <a href="#services"> About</a>
                </li>
                <li>
                  <NavLink to="/bookings">Tickets</NavLink>
                </li>
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>

                <li>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      localStorage.removeItem("token");
                      setLogin(false);
                      navigate("/login");
                    }}
                  >
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                    Logout
                  </div>
                </li>
              </ul>
              <img src={logo} className="logo logo1" alt="" />
            </div>
          </nav>
        </div>
      ) : (
        <>
          <div className="helloworld">
            <nav className="navbar">
              <div className="navbar-container containerx">
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
                  <li
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <a href="#services"> About</a>
                  </li>

                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </ul>
                <img src={logo} className="logo logo1" alt="" />
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;

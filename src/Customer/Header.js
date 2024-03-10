import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../style/Header.css";
import { useNavigate } from "react-router-dom";

const log1 = require("../images/log1.png");
const Header = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar1">
      <div className="container1">
        <img src={log1} className="logo1" alt="error 69" />
        <div className="menu-icon1" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements1  ${showNavbar && "active"}`}>
          <ul>
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
              <NavLink to="/contact">My Tickets</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            {/* <li>
              <h3>
                <i class="fa fa-sign-out" aria-hidden="true"></i>
              </h3>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

export default Header;

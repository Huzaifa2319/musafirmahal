import React from "react";
import "../style/Footer.css";
import { Link } from "react-router-dom";
const log3 = require("../images/log3.png");
const Footer = () => {
  const isLogin = true;
  return (
    <>
      {isLogin ? (
        <footer className="footer">
          <div className="footer-left col-md-4 col-sm-6">
            <p className="about">
              <span> About the company</span> Musafir Mahal is dedicated to
              redefining the travel experience in Pakistan. Through our online
              platform, we facilitate seamless planning and booking for both
              domestic and international travelers, presenting a wide array of
              options tailored to diverse budgets and preferences. By
              consolidating offerings from multiple travel agencies, we empower
              customers with the ability to make informed decisions. Our
              overarching objective is to streamline the travel process and
              bolster Pakistan's tourism sector, thereby catalyzing economic
              growth.
            </p>
            <div className="icons">
              <a
                href="https://www.facebook.com/profile.php?id=61552243900801&mibextid=ZbWKwL"
                target="blank"
              >
                <i className="fa fa-facebook"></i>
              </a>

              <a
                href="https://instagram.com/musafirmahal?igshid=NjIwNzIyMDk2Mg=="
                target="blank"
              >
                <i className="fa fa-instagram"></i>
              </a>

              <a
                href="https://instagram.com/musafirmahal?igshid=NjIwNzIyMDk2Mg=="
                target="blank"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="footer-center col-md-4 col-sm-6">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span> LandMark 3 H-13</span> Isalamabad, Pakistan
              </p>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <p> +923165365272</p>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <Link to="#"> musafirmahal@gmail.com</Link>
              </p>
            </div>
          </div>
          <div className="footer-right col-md-4 col-sm-6">
            <h2>
              <img src={log3} alt="error 69" className="logo2" />
              {/* Musafir<span> Mahal</span> */}
            </h2>
            <p className="menu">
              <Link to="#"> Home</Link> |<Link to="#"> About</Link> |
              <Link to="#"> Services</Link> |<Link to="#"> Portfolio</Link> |
              <Link to="#"> News</Link> |<Link to="#"> Contact</Link>
            </p>
            <p className="name"> Musafir Mahal &copy; 2024</p>
          </div>
        </footer>
      ) : (
        <h6>.</h6>
      )}
    </>
  );
};

export default Footer;

import React from "react";
import "../style/Gallery.css";
import mem1 from "../images/mem1.jpeg";
import mem2 from "../images/mem2.jpeg";
import mem3 from "../images/mem3.jpeg";
import mem4 from "../images/mem4.jpeg";
const Gallery = () => {
  return (
    <>
      <hr />
      <div className="container bootstrap snippets bootdey">
        <div className="row text-center">
          <div className="col-sm-12 col-md-12 col-md-12">
            <h2>We Make Memories</h2>
            <h2>Our Team</h2>
            <p>
              Our <span className="highlight">experienced</span> and{" "}
              <span className="highlight">dedicated</span> team provide these
              services with a smile.
            </p>
          </div>
        </div>
      </div>
      <div className="gal">
        <div className="container2">
          <div className="box">
            <div className="imgBx">
              <img src={mem1} alt="loading" />
            </div>
            <div className="content">
              <div>
                <h2>Vaneeza Nazim Dar</h2>
                <p>Cofounder/Operations manager</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={mem2} alt="loading" />
            </div>
            <div className="content">
              <div>
                <h2>Muhammad Shahzaib Asif</h2>
                <p>Co founder/Graphic and media manager</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={mem3} alt="loading" />
            </div>
            <div className="content">
              <div>
                <h2>Mehreen Nadeem</h2>
                <p>Cofounder/Graphic designer</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={mem4} alt="loading" />
            </div>
            <div className="content">
              <div>
                <h2>Naail Kashif</h2>
                <p>Co founder/Marketing manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

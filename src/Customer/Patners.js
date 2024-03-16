import React, { useEffect } from "react";
import "../style/Aboutus.css";
const p1 = require("../Patners/1.png");
const p2 = require("../Patners/2.png");
const p3 = require("../Patners/3.jpeg");
const p4 = require("../Patners/4.png");

const Patners = () => {
  const run = () => {
    const photos = Array.from(document.getElementsByClassName("photo"));
    const photoWrapper = document.getElementById("photoWrapper");
    let count = 0;
    photos.forEach((photo) => {
      count++;
      if (count % 2) {
        photo.classList.add("even");
      }
    });
    photoWrapper.addEventListener("scroll", () => {
      photos.forEach(checkPosition);
    });
    function checkPosition(photo) {
      if (photo.getBoundingClientRect().right - 4 <= 0) {
        photo.remove();
        photoWrapper.append(photo);
        photoWrapper.scrollLeft = 0;
        return;
      }
    }
    function infiniteScroll() {
      photoWrapper.scrollLeft++;
      requestAnimationFrame(infiniteScroll);
    }
    infiniteScroll();
  };

  useEffect(() => {
    run();
  });

  return (
    <>
      <div style={{ margin: "3%" }}>
        <div className="row text-center">
          <div className="col-sm-12 col-md-12 col-md-12">
            <h2>Our Patners</h2>
            <p>
              These are <span className="highlight">Musafir Mahal's</span> Loyal
              Patners
            </p>
          </div>
          <div className="patners">
            <div class="photo-wrapper" id="photoWrapper">
              <div class="photo">
                <img src={p1} alt="loading..." />
              </div>
              <div class="photo">
                <img src={p2} alt="loading..." />
              </div>
              <div class="photo">
                <img src={p3} alt="loading..." />
              </div>
              <div class="photo">
                <img src={p4} alt="loading..." />
              </div>
              <div class="photo">
                <img src={p1} alt="loading..." />
              </div>
              <div class="photo">
                <img src={p2} alt="loading..." />
              </div>
              <div class="photo">
                <img src={p3} alt="loading..." />
              </div>
              <div class="photo">
                <img src={p4} alt="loading..." />
              </div>
              <div class="photo">
                <img src={p1} alt="loading..." />
              </div>
              <div class="photo">
                <img src={p2} alt="loading..." />
              </div>
              <div class="photo">
                <img src={p3} alt="loading..." />
              </div>
              <div class="photo">
                <img src={p4} alt="loading..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Patners;

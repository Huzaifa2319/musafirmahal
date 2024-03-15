import React from "react";
// import { Link } from "react-router-dom";
import vid from "../images/vid1.mp4";
import vid2 from "../images/vid2.mp4";
import "../style/Main_vid.css";
import Mission from "./Mission";
import Gallery from "./Gallery";
import Map from "./Map";
import Patners from "./Patners";
import GuestForm from "./GuestForm";
const Main = () => {
  return (
    <>
      <div className="textC">
        <h1>Welcome to</h1>
        <h1>Musafir Mahal</h1>
      </div>

      <div className="main vid1">
        <video src={vid} autoPlay loop muted />
      </div>
      <div className="main vid2">
        <video src={vid2} autoPlay loop muted />
      </div>
      <Patners />
      <hr />
      <Mission />
      <Gallery />

      <Map />
    </>
  );
};

export default Main;

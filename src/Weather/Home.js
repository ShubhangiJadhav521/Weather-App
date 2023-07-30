import React from "react";
import "./home.css";
import Img from "../images/sunrain.png";
import CurrentLocation from "./currentLocation";
import { Link } from "react-router-dom";
import Nav from './Nav.js';

function Home(props) {
  return (
    <>
    {/* <Nav/> */}
    <div className="main-div" style={{ backgroundColor: props.isBlackBackground ? 'white' : 'rgb(24, 24, 26)', color: props.isBlackBackground ?  'rgb(24, 24, 26)':'white' }}>
      <div className="imgdiv">
        <img src={Img} alt="weather" />
      </div>
      <div className="content">
        <h2>Discover the Weather in your city</h2>
        <p>Get to know your weather maps and radar precipitation forecast</p>
        <Link to="/CurrentLocation">
          <button className="btn">Get Started</button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Home;

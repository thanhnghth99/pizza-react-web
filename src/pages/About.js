import React from "react";
import MultiplePizzas from "../assets/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Pizza is the most loved pizza restaurant chain in the world.
        Pizza is proud to be present in 100 different countries starting from 2016. <br />
        This marks a prominent milestone to demonstrate the brand’s commitment to deliver
        customers around the world the highest-quality pizza & professional service. <br />
        </p>
      </div>
    </div>
  );
}

export default About;

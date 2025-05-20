import React from "react";
import "./Hero.css";
import herobg from "../../assets/hero-bg.svg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="background-img">
        <img src={herobg} alt="" />
      </div>
      <div className="hero-content">
        <h1>
          We Make Great Looking <span>Websites </span>For Your Brand....
        </h1>
        <p>Aaryalabs-Digital Solutions Tailored For Your Sucess</p>
        <div className="hero-connect">Connect With Us</div>
      </div>
    </div>
  );
};

export default Hero;

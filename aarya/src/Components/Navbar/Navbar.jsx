import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/aarya-cropped.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenu(sectionId);
  };

  return (
    <div className="navbar">
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("home");
        }}
      >
        <img src={logo} alt="Aarya Logo" />
      </a>

      <ul className="nav-menu">
        <li>
          <a
            href="#home"
            className={menu === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={menu === "about" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={menu === "services" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className={menu === "feedback" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("feedback");
            }}
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={menu === "contact" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>

      <a
        href="#contact"
        className="nav-connect"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("contact");
        }}
      >
        Connect With Us
      </a>
    </div>
  );
};

export default Navbar;

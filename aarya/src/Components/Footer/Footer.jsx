import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="/about">About Us</a>
            <a href="/products">Products</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
          <p className="copyright">© 2025 Aaryalabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

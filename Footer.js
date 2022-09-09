import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__left">
        <img
          className="footer__left-image"
          src="https://i.ibb.co/HTLZ6yY/Code-Capsules-logo-dark-Mode.png"
          alt="Code Capsules logo"
        />
        <h1 className="footer__left-header">Code Capsules</h1>
      </div>

      <div className="footer__right">
        <div className="footer__right-wrapper">
          <div className="footer__right-list-wrapper">
            <h6 className="footer__right-header">Product</h6>
            <ul className="footer__right-list">
              <li className="footer__right-links">Features</li>
              <li className="footer__right-links">Security</li>
              <li className="footer__right-links">Business</li>
              <li className="footer__right-links">Case Studies</li>
              <li className="footer__right-links">Pricing</li>
              <li className="footer__right-links">Resources</li>
            </ul>
          </div>

          <div className="footer__right-list-wrapper">
            <h6 className="footer__right-header">Platform</h6>
            <ul className="footer__right-list">
              <li className="footer__right-links">Features</li>
              <li className="footer__right-links">Security</li>
              <li className="footer__right-links">Business</li>
              <li className="footer__right-links">Case Studies</li>
              <li className="footer__right-links">Pricing</li>
              <li className="footer__right-links">Resources</li>
            </ul>
          </div>

          <div className="footer__right-list-wrapper">
            <h6 className="footer__right-header">Support</h6>
            <ul className="footer__right-list">
              <li className="footer__right-links">Features</li>
              <li className="footer__right-links">Security</li>
              <li className="footer__right-links">Business</li>
              <li className="footer__right-links">Case Studies</li>
              <li className="footer__right-links">Pricing</li>
              <li className="footer__right-links">Resources</li>
            </ul>
          </div>

          <div className="footer__right-list-wrapper">
            <h6 className="footer__right-header">Company</h6>
            <ul className="footer__right-list">
              <li className="footer__right-links">Features</li>
              <li className="footer__right-links">Security</li>
              <li className="footer__right-links">Business</li>
              <li className="footer__right-links">Case Studies</li>
              <li className="footer__right-links">Pricing</li>
              <li className="footer__right-links">Resources</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

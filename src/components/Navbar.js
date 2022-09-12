import React from "react";
import "./Navbar.css";
// import "../images/Code_Capsules_logo-darkMode";

function Navbar(props) {
  return (
    <>
      {/* NAVBAR STARTS HERE */}
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#141B25",
          color: "white",
          width: "100%",
          height: "75px",
          fontFamily: "Roboto",
        }}
      >
        <div
          className="navbar__left"
          style={{
            justifyContent: "flex-start",
          }}
        >
          <ul
            className="navbar__links-left"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              listStyle: "none",
            }}
          >
            <li className="navbar__links">All Capsules</li>
            <li className="navbar__links">Community</li>
            <li className="navbar__links active">Status</li>
          </ul>
        </div>

        <div className="logo">
          <img
            src="https://i.ibb.co/HTLZ6yY/Code-Capsules-logo-dark-Mode.png"
            alt="Code Capsules logo"
            style={{
              paddingRight: 24,
            }}
          />
        </div>

        <div className="navbar__right">
          <ul
            className="navbar__links-right"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              listStyle: "none",
            }}
          >
            <li className="navbar__links">Hosting</li>
            <li className="navbar__links">Cloud</li>
            <li className="navbar__links">Technology</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

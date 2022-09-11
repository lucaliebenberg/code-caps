import React from "react";
import "./Content.css";
import Card from "./Card";
import "./Card.css";

function Content() {
  return (
    <div>
      <div className="content__container">
        {/* <div className="content__banner">
          <span class="fa-regular fa-check check"></span>
          <h1 className="content__header">All Systems Operational</h1>
        </div> */}
        <div className="content">
          <h1 className="content__header">Current Status</h1>
          <div className="content__main">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

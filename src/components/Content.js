import React from "react";
import "./Content.css";
import Card from "./Card";
import "./Card.css";

function Content(props) {
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
            <Card title="Git Operations" status="Normal" />
            <Card title="Webhooks" status="Normal" />
            <Card title="Pull Requests" status="Normal" />
            <Card title="Packages" status="Normal" />
            <Card title="Codespaces" status="Normal" />
            <Card title="API Requests" status="Normal" />
            <Card title="Issues" status="Normal" />
            <Card title="Actions" status="Normal" />
            <Card title="Pages" status="Normal" />
            <Card title="Copilot" status="Normal" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

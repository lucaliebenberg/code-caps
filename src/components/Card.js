import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div>
      <div className="card__container">
        <div className="card__left">
          <div className="card__flex-left">
            <h3 className="card__left-title">{props.title}</h3>
            <span className="fa fa-info-circle info"></span>
          </div>
          <p className="card__left-status">{props.status}</p>
        </div>

        <div className="card__right">
          <div className="card__right-status">
            <i className="fa fa-check-circle circle"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

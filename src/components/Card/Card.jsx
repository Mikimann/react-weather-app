import React from "react";
import "../Card/Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h1 className="city">{props.city}</h1>
      <h3 className="country">{props.country}</h3>
      <h1 className="temperature">{props.temperature} &deg;C</h1>
      <h3 className="sky">{props.sky}</h3>
    </div>
  );
};

export default Card;

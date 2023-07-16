import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img
          src={require(`../assets/img/${props.image}`)}
          alt=""
          style={{
            width: "70%",
            height: "70%",
            objectFit: "contain",
            // alignSelf: "flex-end",
          }}
        />
      </div>
      <div className="card-name">{props.name}</div>
      <div className="card-description">{props.discription}</div>
    </div>
  );
};

export default Card;

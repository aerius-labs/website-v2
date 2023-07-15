import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="cardContainer">
      <div className="cardImageContainer">
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
      <div className="cardName">{props.name}</div>
      <div
        className="cardDescription"
        style={{ fontSize: "10px", textAlign: "center", width: "77%" }}
      >
        {props.discription}
      </div>
    </div>
  );
};

export default Card;

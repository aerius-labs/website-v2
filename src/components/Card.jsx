import React from "react";
import "./Card.css";
import { Button } from "@mui/material";

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
      {props.link && (
          <Button
              variant="outlined"
              style={{
                width: "fit-content",
                margin: "auto",
                marginTop: "5px",
                border: "2px solid #cf447f",
                transform: "translateY(5px)",
                background: "linear-gradient(to bottom, #cf447f, purple)",
                color: "white",
                fontFamily: "Unispace",
                transition: "background 0.3s ease",
              }}
              onClick={() => {
                window.open(props.link, "_blank");
              }}
            >
              WhitePaper
            </Button>
      )}
    </div>
  );
};

export default Card;

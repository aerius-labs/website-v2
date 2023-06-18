import React from "react";
import planet from "../asserts/img/trusted_by_planet.png";
import "./TrustedBy.css";

const TrustedBy = () => {
  return (
    <div className="container1">
      <div>
        <div style={{ display: "flex", height: "10vw" }}>
          <img src={planet} style={{ width: "11%" }} />
          <div
            style={{
              fontFamily: "Conthrax",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "43px",
              letterSpacing: "0.2em",
              color: "#CF447F",
              width: "75%",
              textAlign: "center",
              marginBottom: "8%",
            }}
          >
            Trusted by
          </div>
        </div>
        <div
          style={{
            width: "70%",
            height: "auto",
            border: "1px solid #CF447F",
            textAlign: "left",
            borderRadius: "20px",
            fontFamily: "Unispace",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "25px",
            letterSpacing: "0.2em",
            color: "#FFFFFF",
            padding: "5%",
            margin: "auto 10%",
          }}
        >
          At Aerius Labs, we pride ourselves on serving our customers with the
          best solutions possible. We have collaborated with some of the top
          names in the industry to provide you with high-quality products and
          services suitable for your business needs
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;

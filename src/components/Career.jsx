import React from "react";
// import planet from "../asserts/img/about_planet.png";
import "./Career.css";

const Career = () => {
  return (
    <div className="container4" id="career">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "70vh",
          marginBottom: "15%",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Conthrax",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "43px",
              letterSpacing: "0.2em",
              color: "#CF447F",
              width: "100%",
              marginTop: "15%",
              marginBottom: "8%",
            }}
          >
            CAREERS
          </div>
        </div>

        <div
          style={{
            width: "60%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            border: "1px solid #CF447F",
            alignContent: "center",
            borderRadius: "20px",
            fontFamily: "Unispace",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "25px",
            letterSpacing: "0.2em",
            color: "#FFFFFF",
            flexDirection: "column",
            paddingRight: "5%",
            paddingLeft: "5%",
            paddingTop: "1%",
            paddingBottom: "2%",
          }}
        >
          We are always looking to add talented individuals to our team. Please
          stay tuned for any upcoming opportunities.
          <div
            style={{
              width: "10%",
              height: "5vh",
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              border: "1px solid #CF447F",
              alignContent: "center",
              borderRadius: "20px",
              marginTop: "2%",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            height: "auto",
            marginBottom: "2%",
            textAlign: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Career;

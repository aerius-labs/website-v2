import React from "react";
import planet from "../asserts/img/about_planet.png";
import "./About.css";

const About = () => {
  return (
    <div className="container2" id="about">
      <div>
        <div
          style={{
            display: "flex",
            height: "45vh",
            marginBottom: "2%",
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
              marginLeft: "10%",
              marginTop: "15%",
              marginBottom: "8%",
            }}
          >
            ABOUT US
          </div>
          <img
            src={planet}
            style={{ width: "15%", height: "35%", marginTop: "15%" }}
          />
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
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "30px",
            letterSpacing: "0.2em",
            color: "#FFFFFF",
            padding: "5%",
            margin: "0% 10%",
          }}
        >
          Aerius Labs is where cryptography, blockchain, and zero-knowledge
          proofs (ZK) converge to shape the future of secure systems.
          <br />
          <br />
          Our team of experts specializes in cutting-edge technologies like
          Plonky2, Halo2, and Nova, bringing expertise to the realm of ZK
          proofs.
          <br />
          <br />
          With a relentless pursuit of innovation, we strive to build trust,
          privacy, and efficiency into every solution we create.
        </div>
      </div>
    </div>
  );
};

export default About;

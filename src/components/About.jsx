import React from "react";
import planet from "../asserts/img/about_planet.png";
import "./About.css";

const About = () => {
  return (
    <div className="container2" id="about">
      <div>
        <div className="about-con">
          <div className="about">ABOUT US</div>
          <img
            src={planet}
            style={{
              width: "15vw",
              height: "10vw",
              marginTop: "15%",
              zIndex: 1,
            }}
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
            fontWeight: "700",
            fontSize: "16px",
            letterSpacing: "0.2em",
            color: "#FFFFFF",
            padding: "5%",
            margin: "auto 10%",
            zIndex: 1,
            position: "relative",
            lineHeight: "25px",
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

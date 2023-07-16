import React from "react";
import planet from "../assets/img/about_planet.png";
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
        <div className="about-description">
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

import React from "react";
// import planet from "../assets/img/about_planet.png";
import "./Services.css";
import ServicesCard from "./Card";
import services_planet from "../assets/img/services_img.png";

const services_data = [
  {
    name: "R&D",
    discription:
      "Whether it is leveraging an anonymous network, ZKPs, MPC or any other privacy technique, we can assist your team in integrating these tools into your product’s initial prototyping phase",
    descFontSize: "16px",
    image: "services1.png",
  },
  {
    name: "Consulting",
    discription:
      "We provide expert consulting by creating catered implementations for clients who want to integrate ZK or cryptography into their solutions, guiding organizations to unlock the potential of secure digital solutions",
    descFontSize: "16px",
    image: "services2.png",
  },
  {
    name: "Auditing",
    discription:
      "We offer thorough analysis and verification of zero-knowledge circuits and smart contracts for enhanced security and reliability",
    descFontSize: "16px",
    image: "services3.png",
  },
];

const Services = () => {
  return (
    <div className="container4" id="services">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "auto",
            textAlign: "center",
          }}
        >
          <div className="services">SERVICES</div>
          <img
            src={services_planet}
            style={{ width: "15%", height: "15%", marginTop: "15%", zIndex: 1 }}
          />
        </div>

        <div className="services-data">
          {services_data.map((i, index) => (
            <>
              <ServicesCard {...i} />
              {index !== services_data.length - 1 && (
                <div style={{ width: "15%" }}></div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

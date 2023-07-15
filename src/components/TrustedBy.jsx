import React from "react";
import planet from "../assets/img/trusted_by_planet.png";
import "./TrustedBy.css";

const TrustedBy = () => {
  return (
    <div className="container1">
      <div className="trusted-box">
        <div className="increaseSize">
          <img src={planet} className="trusted-planet" />
          <div className="trusted-by">Trusted by</div>
        </div>
        <div className="trusted_by_box">
          <div className="mobile-heading">Trusted by</div>
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

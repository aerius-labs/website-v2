import { Button } from "@mui/material";
import React from "react";
import "./Career.css";

const Career = () => {
  return (
    <div className="container5" id="career">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "15%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "auto",
            textAlign: "center",
          }}
        >
          <div className="careers">CAREERS</div>

          <div className="careers-description">
            We are always looking to add talented individuals to our team.
            Please stay tuned for any upcoming opportunities.
            {/* <div
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
          ></div> */}
            {/* <Button>button</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

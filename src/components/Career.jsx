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
            <Button
              variant="outlined"
              style={{
                width: "fit-content",
                margin: "auto",
                marginTop: "20px",
                border: "2px solid #cf447f",
                transform: "translateY(5px)",
                background: "linear-gradient(to bottom, #cf447f, purple)",
                color: "white",
                fontFamily: "Unispace",
                transition: "background 0.3s ease",
              }}
              onClick={() => {
                window.open("https://hallowed-crayfish-844.notion.site/Jobs-at-Aerius-9a9f7b75d06f437a895d0103ef9a3d8c", "_blank");
              }}
            >
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
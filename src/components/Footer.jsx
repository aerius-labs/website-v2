import React from "react";
import telegram from "../asserts/img/telegram.png";
import mail from "../asserts/img/mail.png";
import twitter from "../asserts/img/twitter.png";
import github from "../asserts/img/github.png";
import discord from "../asserts/img/discord.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container4" id="footer">
      <div
        style={{
          position: "relative",
          textAlign: "center",
          backgroundColor: "black",
          borderTop: "1px solid #CF447F",
          zIndex: 1,
          height: "20vh",
        }}
      >
        <div
          style={{
            fontFamily: "Conthrax",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "43px",
            letterSpacing: "0.2em",
            color: "#CF447F",
            paddingBottom: "2%",
          }}
        >
          CONNECT WITH US
        </div>
        <div style={{ height: "5vh", zIndex: 1 }}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={telegram} className="image" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={mail} className="image" />
          </a>
          <a
            href="https://github.com/Aerius-Labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} className="image" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={discord} className="image" />
          </a>
          <a
            href="https://twitter.com/AeriusLabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} style={{ height: "35px" }} />
          </a>
        </div>
        <hr style={{ width: "90%" }} />
        <div style={{ color: "#999A9B" }}>© 2023 Aerius Labs, Ltd.</div>
      </div>
    </div>
  );
};

export default Footer;

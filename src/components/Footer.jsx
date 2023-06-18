import React from "react";
import telegram from "../asserts/img/telegram.png";
import mail from "../asserts/img/mail.png";
import twitter from "../asserts/img/twitter.png";
import github from "../asserts/img/github.png";
import discord from "../asserts/img/discord.png";
import logo from "../asserts/img/Aerius_logo.png";

// const footer_data = [
//   {
//     name: "R&D",
//     discription:
//       "Whether it is leveraging an anonymous network, ZKPs, MPC or any other privacy technique, we can assist your team in integrating these tools into your product’s initial prototyping phase",
//     descFontSize: "16px",
//     image: "services1.png",
//   },
//   {
//     name: "Consulting",
//     discription:
//       "We provide expert consulting by creating catered implementation for clients who want to integrate ZK or cryptography into their solutions, guiding organizations unlock the potential of secure digital solutions",
//     descFontSize: "16px",
//     image: "services2.png",
//   },
//   {
//     name: "Auditing",
//     discription:
//       "We offer thorough analysis and verification of zero-knowledge circuits and smart contracts for enhanced security and reliability",
//     descFontSize: "16px",
//     image: "services3.png",
//   },
// ];

const Footer = () => {
  return (
    <div className="container4" id="footer">
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#1D1D1F",
          borderTop: "1px solid #CF447F",

          height: "20vh",
        }}
      >
        {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "10vh",
          alignItems: "center",
        }}
      >
        <img src={logo} style={{ height: "70%" }} />
        <div
          style={{
            fontFamily: "Conthrax",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "43px",
            color: "#CF447F",
            width: "auto",
            alignSelf: "center",
          }}
        >
          Aerius Labs
        </div>
      </div> */}

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
        <div style={{ height: "5vh" }}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={telegram} style={{ marginRight: "10%", height: "40%" }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={mail} style={{ marginRight: "10%", height: "40%" }} />
          </a>
          <a
            href="https://github.com/Aerius-Labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} style={{ marginRight: "10%", height: "40%" }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={discord} style={{ marginRight: "10%", height: "40%" }} />
          </a>
          <a
            href="https://twitter.com/AeriusLabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} style={{ height: "40%" }} />
          </a>
        </div>
        <hr style={{ width: "90%" }} />
        <div style={{ color: "#999A9B" }}>© 2023 Aerius Labs, Ltd.</div>
      </div>
    </div>
  );
};

export default Footer;

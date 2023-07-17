import React from "react";
import telegram from "../assets/img/telegram.png";
import medium from "../assets/img/medium.png";
import twitter from "../assets/img/twitter.png";
import github from "../assets/img/github.png";
import discord from "../assets/img/discord.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container6" id="footer">
      <div className="footer-content">
        <div className="footer">CONNECT WITH US</div>
        <div style={{ zIndex: 1 }}>
          <a 
            href="https://t.me/rahulghangas" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={telegram} className="image" />
          </a>
          <a
            href="https://blog.aeriuslabs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={medium} className="image" />
          </a>
          <a
            href="https://github.com/Aerius-Labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} className="image" />
          </a>
          <a
            href="https://twitter.com/AeriusLabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} className="twitter" />
          </a>
        </div>
        <hr style={{ width: "90%" }} />
        <div className="copyright">© 2023 Aerius Labs, Ltd.</div>
      </div>
    </div>
  );
};

export default Footer;

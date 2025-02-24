import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span style={{color:"black"}}>
          asilbekxoliyorov441@gmail.com
        </span>
        <div className="f-icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/asilbek-xoliyorov-58127a2aa/"
          >
            <BsLinkedin style={{ fontSize: "88px", color: "white" }} />
          </a>
          <a target="_blank" href="https://t.me/Xoliyorov_AsiIbek">
            <BsTelegram style={{ fontSize: "88px", color: "white" }} />
          </a>
          <a target="_blank" href="https://github.com/AsilbekXoliyorov441">
            <BsGithub style={{ fontSize: "88px", color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

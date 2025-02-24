import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/my-image-transparent.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { BsTelegram } from "react-icons/bs";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section id="intro">
      <div className="Intro container" id="Intro">
        {/* left name side */}
        <div className="i-left">
          <div className="i-name">
            {/* yahan change hy darkmode ka */}
            <span style={{ color: darkMode ? "white" : "" }}>
              Assalomu alaykum! I Am
            </span>
            <span>Asilbek Xoliyorov</span>
            <span>
              Frontend Developer with about 1 year of experience in web
              designing and development, producting the Quality work
            </span>
          </div>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Hire me</button>
          </Link>
          {/* social icons */}
          <div className="i-icons">
            <a target="_blank" href="https://github.com/AsilbekXoliyorov441">
              <img src={Github} alt="github" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/asilbek-xoliyorov-58127a2aa/"
            >
              <img src={LinkedIn} alt="linkedin" />
            </a>
            <a target="_blank" href="https://t.me/Xoliyorov_AsiIbek">
              <BsTelegram style={{ fontSize: "88px", color: "orange" }} />
            </a>
          </div>
        </div>
        {/* right image side */}
        <div className="i-right">
          {/* <img src={Vector1} alt="" /> */}
          {/* <img src={Vector2} alt="" /> */}
          <img
            width={600}
            style={{
              borderRadius: "500px",
              background: "orange",
              objectFit: "cover",
              objectPosition: "top",
            }}
            src={boy}
            alt=""
          />
          {/* animation */}
          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji}
            alt=""
          />

          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatinDiv img={crown} text1="Frontend " text2="Developer" />
          </motion.div>

          {/* animation */}
          <motion.div
            initial={{ left: "9rem", top: "18rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            className="floating-div"
          >
            {/* floatinDiv mein change hy dark mode ka */}
            {/* <FloatinDiv img={thumbup} text1="Best Design" text2="Award" /> */}
          </motion.div>

          <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

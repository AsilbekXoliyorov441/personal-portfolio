import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Asilbek_Xoliyorov_Resume from './Asilbek_Xoliyorov_Resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <section id="service" style={{padding:"90px 0 60px 0"}}>
      <div className="services container" id="services">
        {/* left side */}
        <div className="awesome">
          {/* dark mode */}
          <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
          <span>services</span>
          <spane>
            I create modern and interactive web applications. Each project is{" "}
            <br />
            fast, flexible, and user-friendly.
          </spane>
          <a href={Asilbek_Xoliyorov_Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        {/* right */}
        <div className="cards">
          {/* first card */}
          <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
          >
            <Card
              emoji={HeartEmoji}
              heading={"Frontend Mentor"}
              detail={
                "Online , Individual , Html , Css , Bootstrap , Tailwind , JavaScript , React , NextJs"
              }
            />
          </motion.div>
          {/* second card */}
          <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
          >
            <Card
              emoji={Glasses}
              heading={"Frontend Developer"}
              detail={
                "Html, Css, Scss, Bootstrap , Tailwind, Trello , JavaScript, React, Redux , Zustand , Nextjs , TypeScript"
              }
            />
          </motion.div>
          {/* 3rd */}
          <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
          >
            <Card
              emoji={Humble}
              heading={"Economist"}
              detail={
                "I am studying at Tashkent State University of Economics in 5 degree yet"
              }
              color="rgba(252, 166, 31, 0.45)"
            />
          </motion.div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Services;

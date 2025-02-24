import React, { useContext } from "react";
import "./Works.css";
import Limsa from "../../img/limsa_2021_logo.jpg";
import Getter from "../../img/Getter.jpg";
import Front from "../../img/front.jpg";
import Reacts from "../../img/react.jpg";
import Next from "../../img/next.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <section id="works">
      <div className="works container" id="works">
        {/* left side */}
        <div className="w-left">
          <div className="awesome">
            {/* dark Mode */}
            <span style={{ color: darkMode ? "white" : "" }}>
              Works for All these
            </span>
            <span>Companies</span>
            <spane>
              Getter – Innovatsion texnologiyalar asosida dasturiy yechimlar{" "}
              <br />
              ishlab chiqadigan kompaniya. Bu yerda men frontend dasturchi
              sifatida <br />
              foydalanuvchilarga qulay va interaktiv veb-ilovalar yaratishda
              ishtirok etdim.
              <br />
              <br />
              Limsa – Texnologik mahsulotlar va xizmatlar taqdim etuvchi <br />
              kompaniya. Men bu yerda samarali va tezkor veb-interfeyslar ishlab
              chiqish, <br /> shuningdek, UI/UX tajribasini yaxshilash ustida
              ishladim.
            </spane>
            <Link to="contact" smooth={true} spy={true}>
              <button className="button s-button">Hire Me</button>
            </Link>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>

          {/* right side */}
        </div>
        <div className="w-right">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle"
          >
            <div className="w-secCircle">
              <img src={Getter} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Reacts} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Front} alt="" />
            </div>{" "}
            <div className="w-secCircle">
              <img src={Next} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Limsa} alt="" />
            </div>
          </motion.div>
          {/* background Circles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </section>
  );
};

export default Works;

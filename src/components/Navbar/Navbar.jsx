import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <footer style={{position:"fixed" , top:"0" , width:"100%" , background:"black" , zIndex:"10"}}>
      <div className="n-wrapper container" id="Navbar">
        {/* left */}
        <div className="n-left">
          <div className="n-name">Asilbek</div>
        </div>
        {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true}>
                  Serivces
                </Link>
              </li>
              <li>
                <Link to="works" spy={true} smooth={true}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true}>
                  Protfolio
                </Link>
              </li>
              <li>
                <Link to="testimonial" spy={true} smooth={true}>
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>
          <Link to="contact" spy={true} smooth={true}>
            <button className="button n-button">Contact</button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default navbar;

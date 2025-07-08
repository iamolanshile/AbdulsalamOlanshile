import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/react.png";
import Portfolio2 from "../../assets/java.png";
import Portfolio3 from "../../assets/wordpress.png";
import Portfolio4 from "../../assets/hubspot.jpg";
import Portfolio5 from "../../assets/css.jpg";
import Portfolio6 from "../../assets/html.png";
import { Link } from "react-scroll";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I specialize in building pixel-perfect, responsive web applications
        using modern technologies like React, Next.js, and WordPress, helping
        businesses achieve their goals with a strong online presence.
      </span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="React Project" className="worksImg" />
        <img src={Portfolio2} alt="Java Project" className="worksImg" />
        <img src={Portfolio3} alt="WordPress Project" className="worksImg" />
        <img src={Portfolio4} alt="HubSpot Project" className="worksImg" />
        <img src={Portfolio5} alt="CSS Project" className="worksImg" />
        <img src={Portfolio6} alt="HTML Project" className="worksImg" />
      </div>
      <Link to="contact" smooth={true} duration={500}>
        <button className="workBtn">See More</button>
      </Link>
    </section>
  );
};

export default Works;

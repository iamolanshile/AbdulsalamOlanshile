import React from "react";
import "./intro.css";
import bg from "../../assets/myimg.jpeg";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Abdulsalam Abdulkabir Olanshile</span>
          <br />
          Full-Stack Developer
        </span>
        <p className="introPara">
          I’m a skilled Full-Stack Developer with over three years of experience
          creating responsive, user-friendly web applications using JavaScript,
          React, Next.js, Node.js, and WordPress.
          <br />I specialize in creating visually appealing and user-friendly
          websites.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;

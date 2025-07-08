import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> What I do </span>
      <br />
      <span className="skillDesc">
        I’m a skilled Full-Stack Developer with expertise in creating
        responsive, user-friendly web applications. Proficient in JavaScript,
        React, Next.js, Node.js, WordPress, and HubSpot, with a strong focus on
        detail and modern development practices.{" "}
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Full-Stack Development</h2>
            <p>
              Building scalable web applications with JavaScript, React,
              Next.js, and Node.js.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frontend Development</h2>
            <p>
              Creating responsive and visually appealing user interfaces using
              React, HTML, CSS, and modern design principles.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>WordPress & HubSpot</h2>
            <p>
              Developing and managing websites using WordPress and HubSpot,
              focusing on performance, SEO, and user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react'
import "./intro.css";
import bg from "../../assets/myImage.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span><br />
                <span className="introText"> I'm <span className="introName"> Abdulsalam Olanshile </span> <br />website Disigner</span>
                <p className="introPara">I am a skilled web designer with experience in creating<br />visually appearing and user-friendly websites.</p>
                <Link><button className='btn'><img src={btnImg} alt="hire" className="btnimg" />Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro
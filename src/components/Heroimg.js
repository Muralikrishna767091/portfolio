import "./HeroimgStyles.css"

import React from 'react'
import introimg from "../assets/img1.jpeg"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={introimg} alt="Introimg"/>
        </div>
        <div className="content">
          <p>
            HI, I'M A STUDENT
          </p>
          <br/>
          <h1>
            Full Stack Developer
          </h1>
          <br/>
          <Link to="/project" className="btn">projects</Link>
          {/* <br/> */}
          <Link to="/contact" className="btn btn-light">contact</Link>

        </div>
    </div>
  )
}

export default Heroimg
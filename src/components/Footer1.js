import "./footerStyles.css"

import React from 'react';
import {FaHome,FaPhone,FaMailBulk, FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa"

const Footer1 = () => {
  return (
    <>
    <h1>
         jmnhfmhdnmhfyjdfhm
        </h1>
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="locatiom">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                    <p>11-33-947/b,vengalraonagar</p>
                    <p>kavali.</p>

                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    </h4>
                </div>

            </div>
            <div className="right">
                <h4>
                    About the college
                </h4>
                <p>
                    This is the college which i studied my engineering
                </p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"2rem"}}/>
                </div>

            </div>

        </div>
    </div>
    </>
  )
}

export default Footer1
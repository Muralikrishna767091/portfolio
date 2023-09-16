
import "./NavbarStyles.css"

import React ,{useState} from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar =()=>{
    const[click,setClick]= useState(false);
    const handle=()=> setClick(!click)

    const[color,setColor]= useState(false);
    const changeColor=()=> {
        if(window.scroll >=100)
        {
            setColor(true);
        }
        else{
            setColor(false);
        }
    }

    window.addEventListener("scroll",changeColor);
    


    return (
        <div className={color ? "header header-bg" : "header" }>
            <Link to="/">
                <h1>
                    portfolio
                </h1>
              
            </Link>
            <ul className={click? "nav-menu active":"nav-menu"}>
                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    <Link to="/project">project</Link>
                </li>
                <li>
                    <Link to="/About">About </Link>
                </li>
                <li>
                    <Link to="/contact">contact </Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handle}>
                {click ? (<FaTimes size={20} style={{color:"#fff"}}/>) : <FaBars size={20} style={{color:"#fff"}}/>}
                


            </div>
        </div>
    )
}
export default Navbar
import React from "react";
import {Link} from 'react-router-dom';
import '../CSS/NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <div className="links">
                {/* The Link anchor tags have a built-in function for react to interecept server requests in order to render linked components quicker without contacting the server. */}
                <Link to="/home">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
                {/* <a href="/">Home</a>
                <a href="/about">About</a> */}
            </div>

            <div className="banner_bottom"> 

            </div>
        </nav>
    )
}

export default NavBar
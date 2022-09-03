import React from "react";
import { Link } from 'react-router-dom'

export const UpperHead = ()=> {
    return (
        <div className="upper-head-container">
            <img className="right-arrow-icon" src="./images/vector.png" alt="arrow" />
            <p className="latest-update-text">Latest Updates Get latest updates by suscribing to
                our newletters1
            </p>
            <img className="clock-icon" src="./images/clock.png" alt="clock" />
            <p className="time">Mon - Sat 9:00 - 18:00</p>
            <div className="social-icon-container">
                <img className="social-icon" src="./images/facebook.png" alt="social media" />
                <img className="social-icon" src="./images/twitter.png" alt="social media" />
                <img className="social-icon" src="./images/linkedin.png" alt="social media" />
                <img className="social-icon" src="./images/youtube.png" alt="social media" />
            </div>
            

        </div>
    )
}

export const Navbar = ()=> {
    return (
        <div className="Navbar">
            <h2 className="logo">LOGO</h2>
            <div className="quick-support">
                <img className="call-support-image" src="./images/headphones.png" alt="call suport" />
                <span className="call-support-text-number">
                    <h4>GET QUICK SUPPORT</h4>
                    <h4>+2347049493053</h4>
                </span>
            </div>
            <ul className="nav-links">
                <li><Link to="/" >HOME</Link></li>
                <li><Link to="/equipment" >EQUIPMENT LIST</Link></li>
                <li><Link to="/about" >ABOUT US</Link></li>
                <li><Link to="/contact" >CONTACT US</Link></li>
            </ul>
        </div>
    )
}
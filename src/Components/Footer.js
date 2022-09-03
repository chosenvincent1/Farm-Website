
import React from "react";
import { Link } from 'react-router-dom';


export const ContactSection = ()=> {
    return (
        <div className='contact-section-footer'>
            <h3 className='first-text'>We Help Industry To Utilize The Heavy Equipment Work Better</h3>
            <img className="call-icon" src="./images/call-icon.png" alt="call suport" />
            <h3 className='second-text'>Get Quick Support +2347049473053</h3>
            <Link to="/contact" className="contact-btn">
                <p className='contact-btn-text'>Contact Us</p>
                <img className="contact-btn-icon" src="./images/arrow-right-circle.png" alt="call suport" />
            </Link>
            {/* <div className='contact-btn'>
                <p className='contact-btn-text'>Contact Us</p>
                <img className="contact-btn-icon" src="./images/arrow-right-circle.png" alt="call suport" />
            </div> */}
        </div>

    )
}

export const Footer = ()=> {
    return(
        <footer className="footer">
            <div className="newsletter-container">
                <p className="empty"></p>
                <p className="newsletter">Newsletter Subscription Get Latest Deals From E-Tinga</p>
                <input className="email" type="email" placeholder="Enter Email..." />
                <input className="subscribe" type="submit" value="SUBSCRIBE" />
            </div>
            <hr />

            <div className="about-useful-link-container">
                <div className="about-e-tinga">
                    <h4>ABOUT E-TANGA</h4>
                    <div className="lines">
                        <div className="line-one"></div>
                        <div className="line-two"></div>
                        <div className="line-three"></div>
                    </div>
                    
                    <p>TingA is a project of Quipbank Trust Limited that employs modern technology channels to allow farmers access farm mechanization.</p>
                </div>
                <div className="useful-links">
                    <h4>USEFUL LINKS</h4>
                    <br />
                    <br />
                    <ul>
                        <li>About E-Tinga</li>
                        <li>Equipment List</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="terms-condition-container">
               @ <span className="orange">2021</span> <span className="green">E-Tinga</span> - Renting Farm Equipments.
               Terms & Conditions
            </div>
        </footer>
    )
}
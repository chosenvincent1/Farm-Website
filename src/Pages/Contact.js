
import React from "react";
import { UpperHead, Navbar} from "../Components/Navbar";
import { ContactSection, Footer } from "../Components/Footer";
import { Link } from "react-router-dom";

const Contact = ()=> {
    return (
        <div className="Contact">
            <UpperHead />
            <Navbar />

            <section className="first-contact-section">
                <h1>Contact Us</h1>
                <div className="first-contact-section-btn">
                    <Link to="/" className="home-btn">Home</Link>
                    <Link to="/contact" className="contact-btn">Contact Us</Link>
                </div>
            </section>
            
            <section className="second-contact-section">
                <div className="contact-details">
                    <h1>Contact Details</h1>
                    <div className="img-text-container">
                        <img src="./images/location.png" alt="Location" />
                        <p>HeadOffice Address Thika, Kiambu Kenya</p>
                    </div>
                    <div className="img-text-container">
                        <img src="./images/phone-forwarded.png" alt="Phone" />
                        <p>For Rental Support +254717255460 / +254717255635</p>
                    </div>
                    <div className="img-text-container">
                        <img src="./images/globe.png" alt="Globe" />
                        <p>The Office Hours Mon - Sat 9.00 - 18.00</p>
                    </div>
                    <div className="img-text-container">
                        <img src="./images/mail.png" alt="Mail" />
                        <p>Send Us Email info@etinga.co.ke</p>
                    </div>
                </div>
                <form className="send-message-container">
                    <h2>Send A Message</h2>
                    <p>Your email address will not be published. Required fields are marked with *</p>
                    <div className="name-email">
                        <input type="text" className="name-input" placeholder="Name..." required />
                        <input type="email" placeholder="Email..." required />
                    </div>
                    <input type="text" placeholder="Subject..." required />
                    <textarea placeholder="Your Message... "/>
                    <button className="submit-btn">Send Message</button>
                </form>
            </section>

            {/* <section className="third-contact-section">
                <img src="./images/map.png" />
            </section> */}

            <ContactSection />
            <Footer />

        </div>
    )
}

export default Contact
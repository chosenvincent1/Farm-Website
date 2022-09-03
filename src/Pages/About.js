
import React from "react";
import { UpperHead, Navbar} from "../Components/Navbar";
import { ContactSection, Footer } from "../Components/Footer";
import { Link } from 'react-router-dom';

const About = ()=> {
    return (
        <div className="About">
            <UpperHead />
            <Navbar />

            <section className="first-about-section">
                <h1>About Us</h1>
                <div className="first-about-section-btn">
                    <Link to="/" className="home-btn">Home</Link>
                    <Link to="/about" className="about-btn">About Us</Link>
                </div>
            </section>

            <section className="second-about-section">
                <p>Dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mau massa, eleifend et purus vel feugiat rutrum . Cras vitae est vel ipsum fau bus fermentum a ultricies urna cum sociis.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut sed bibendum leo. Mauris ma massa eleifend et purus vel feugiat rutrum nulla cras vitae est vel ipsum faucibus ferme aultricies urna cum sociis natoque penatibus.</p>

                <p>Famur sit amet consectetur adipiscing elit ut sed bibenum leo. Mauris mauris as sa eleifend et purus vel feugiat rutrum nulla.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut sed bibendum leo mauris massa, eleifend et purus vel, feugiat rutrum nulla cras vitae est vel ipsum faucibus ferm aultricies urna dum sociis natoque penatibus et magnis.</p>

                <ul>
                    <li className="first-list">Phasellus sit amet velit auctor turpis rhoncus.</li>
                    <li className="second-list">Phasellus sit amet velit auctor turpis rhoncus.</li>
                    <li className="third-list"> Phasellus sit amet velit auctor turpis rhoncus.</li>
                    <li className="fourth-list"> Phasellus sit amet velit auctor turpis rhoncus.</li>
                </ul>

                <p>Dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mau massa, eleifend et purus vel feugiat rutrum nulla. Cras vitae est vel ipsum fau bus fermentum a ultricies urna cum sociis.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut sed bibendum leo. Mauris ma massa eleifend et purus vel feugiat rutrum nulla cras vitae est vel ipsum faucibus ferme aultricies urna cum sociis natoque penatibus.</p>

                <p>Famur sit amet consectetur adipiscing elit ut sed bibenum leo. Mauris mauris as sa eleifend et purus vel feugiat rutrum nulla.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut sed bibendum leo mauris massa, eleifend et purus vel, feugiat rutrum nulla cras vitae est vel ipsum faucibus ferm aultricies urna dum sociis natoque penatibus et magnis.</p>

                <div className="experience-machineries-customers">
                    <div className="item experience">
                        <h1 className="number">2</h1>
                        <h1>Years of Experience</h1>
                    </div>
                    <div className="item machineries">
                        <h1 className="number">100</h1>
                        <h1>Machineries</h1>
                    </div>
                    <div className="item customers">
                        <h1 className="number">200</h1>
                        <h1>Customers</h1>
                    </div>
                </div>
            </section>

            <ContactSection />
            <Footer />

        </div>
    )
}

export default About
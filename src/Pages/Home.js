import React from "react";
import { Navbar, UpperHead } from "../Components/Navbar";
import { ContactSection, Footer } from "../Components/Footer";

const Home = ()=> {
    return (
        <div className="Home">
            <UpperHead />
            <Navbar />

            <section className="first-home-section">
                <h1>your one-stop source for all equipment rental needs</h1>
                <div className="search-input-container">
                    <input type="text" className="search-input" placeholder="Search for something..." />
                    <div className="search-btn-text">
                        <img className="search-icon" src="./images/search.png" alt="search" />
                        <p className="search-text">Search</p>
                    </div>
                </div>
                <p>Top-Of-The-Line Equipment Ready At Flexible Rates Around</p>

                <div className="find-equipment-container">
                    <h1>Find the right equipment</h1>
                    <div className="find-equipment-input-btn">
                        <input type="text" placeholder="Equipment Name..." />
                        <input type="text" placeholder="Rental Duration Date..." />
                        <div className="find-equipment-btn">
                            <p>find equipment</p>
                            <img src="./images/arrow-right-circle.png" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="second-home-section">
                <p>We Promise To Find You The Right Equipment</p>
                <h2>Browse Machinery Categories</h2>
                <div className="machinery-image-container">
                    <div className="machinery-image">
                        <img src="./images/excavator.png" alt="excavator" />
                        <p>Exclavator</p>
                    </div>
                    <div className="machinery-image">
                        <img src="./images/scissor-lift.png" alt="scissor-lift" />
                        <p>SCISSOR LIFT</p>
                    </div>
                    <div className="machinery-image">
                        <img src="./images/boom-lift.png" alt="boom-lift" />
                        <p>Boom Lift</p>
                    </div>
                    <div className="machinery-image">
                        <img src="./images/fork-lift.png" alt="fork-lift" />
                        <p>Fork Lift</p>
                    </div>
                    <div className="machinery-image">
                        <img src="./images/compaction.png" alt="compaction" />
                        <p>Compaction</p>
                    </div>
                    <div className="machinery-image">
                        <img src="./images/roller.png" alt="roller" />
                        <p>Roller</p>
                    </div>
                </div>
            </section>

            <section className="third-home-section">
                <img src="./images/img-about.png" alt="image-about" />
                <div className="about">
                    <p>About E-tinga Equipments Rental</p>
                    <h2>We Offer Smarter & More Affordable Access To Rent Farm Equipment</h2>
                    <div className="about-lines">
                        <div className="line-one"></div>
                        <div className="line-two"></div>
                        <div className="line-three"></div>
                    </div>
                    <p>Aiusmod tempor incididunt ut labore sed dolore magna aliquay dnim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea reprehen deritin voluptate.</p>
                    <div className="facilities-innovations">
                        <div className="facilities-less-expensive">
                            <p className="bold">The Facilities Less Expensive</p>
                            <p className="not-bold">Velit esse cillum dolore ipsum eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="inovation-heavy-fleets">
                            <p className="bold">Innovating The Heavy Fleets</p>
                            <p className="not-bold">Velit esse cillum dolore ipsum eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fourth-home-section">
                <img src="./images/machine.png" />
                <div className="hire-equipment">
                    <h2>Worried About The Idling Yard?</h2>
                    <p>Start hiring our equipment(s) today!</p>
                    <button className="btn">LEARN MORE</button>
                </div>
            </section>

            <div className="docer-lines"></div>

            <ContactSection />

            <div className="docer-lines"></div>
            
            <Footer />
        </div>
            
    )
}

export default Home
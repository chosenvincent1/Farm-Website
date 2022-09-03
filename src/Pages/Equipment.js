
import React from "react";
import { Link } from "react-router-dom";
import { UpperHead, Navbar } from "../Components/Navbar";
import RentalPrice from "../Components/Equipment/RentalPrice";
import {ContactSection, Footer} from "../Components/Footer";


const Equipment = ()=> {
    return (
        <div className="Equipment">
            <UpperHead />
            <Navbar />

            <section className="first-equipment-section">
                <h1>Excavators</h1>
                <div className="first-equipment-section-btn">
                    <Link to="/" className="home-btn" >Home</Link>
                    <button>Category</button>
                    <button>Excavators</button>
                </div>
            </section>

            <section className="second-equipment-section">
                <div className="first-container catergories">
                    <h1>Categories</h1>
                    <ul>
                        <li>Excavators</li>
                        <li>Scissor Lift</li>
                        <li>Boomlift</li>
                        <li>Forklift</li>
                        <li>Compaction</li>
                        <li>Roller</li>
                    </ul>
                </div>

                <div className="second-container">
                    <RentalPrice />
                    <RentalPrice />
                    <RentalPrice />
                </div>
            </section>

            <ContactSection />
            <Footer />
        </div>
    )
}

export default Equipment
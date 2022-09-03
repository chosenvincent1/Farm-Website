
import React from "react";

const RentalPrice = ()=> {
    return (
        <div className="declan-buckley-price-container">
            <div className="declan-buckley-container">
                <h1>Declan Buckley</h1>
                <img src="./images/wrist-watch.png" />
                <span className="first-span">ksh 20000.00 / day</span>
                <span>ksh 48.00 / week</span>
                <span className="last">ksh 12.00 / month</span>
                <p>Two Way Delivery: Ksh 18.00</p>
                <div className="brand-container">
                    <ul className="first-brand">
                        <li>Brand: Delectus suscipit C</li>
                        <li>Manufacture Year: 1985</li>
                        <li>Digging Depth: 22 M</li>
                    </ul>
                    <ul className="second-brand">
                        <li>Brand: Delectus suscipit C</li>
                        <li>Manufacture Year: 1985</li>
                        <li>Digging Depth: 22 M</li>
                    </ul>
                </div>
            </div>
            <div className="price-container">
                <div className="price">
                    <h2>Total Rental Price</h2>
                    <p>Incl. Taxes</p>
                    <h2>Ksh 685.00</h2>
                    <p className="line-through">Ksh 152.00</p>
                </div>
                <button>Reserve</button>
            </div>
        </div>
    )
}

export default RentalPrice
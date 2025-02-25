import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./index.css";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <h1 className="logo">Travel Unbounded</h1>
          <div className="nav-links">
            <Link to="/"><button className="nav-button">Home</button></Link>
            <div
              className="dropdown"
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
            >
              <button className="nav-button">Destinations</button>

              {showPopup && (
                <div className="popup">
                    <div className="destination-section">
                      <h1 className="popup-title">India</h1>
                      <ul className="places-list">
                        <li className="places">Kerala</li>
                        <li className="places">Himachal</li>
                        <li className="places">Andaman</li>
                        <li className="places">Bandipur</li>
                        <li className="places">Kabini</li>
                        <li className="places">Corbett</li>
                        <li className="places">Ranthambore</li>
                        <li className="places">Bandhavgarh</li>
                      </ul>
                    </div>
                    <div className="destination-section">
                      <h1 className="popup-title">International</h1>
                      <div className="international-places">
                      <ul className="places-list">
                        <li className="places">Kenya</li>
                        <li className="places">Magical Kenya</li>
                        <li className="places">Vietnam</li>
                        <li className="places">Bali</li>
                        <li className="places">Nepal</li>
                        <li className="places">Bhutan</li>
                        <li className="places">Iceland</li>
                        <li className="places">Tanzania</li>
                        </ul>
                        <ul className="places-list">
                        <li className="places">Singapore</li>
                        <li className="places">Greece</li>
                        <li className="places">Turkey</li>
                        <li className="places">Dubai</li>
                        <li className="places">Malaysia</li>
                        <li className="places">Switzerland</li>
                        <li className="places">Netherlands</li>
                      </ul>
                      </div>
                    </div>
                  </div>
              )}
            </div>

            <Link to="/leisurePackage"><button className="nav-button">Leisure Packages</button></Link>
            <button className="nav-button">Wildlife Packages</button>
            <button className="nav-button">Blogs</button>
            <Link to="/aboutus" ><button className="nav-button">About Us</button></Link>
            <button className="nav-button">Contact Us</button>
            <Link to="/bookingform"><button className="nav-button book-now">Book Now</button></Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

import React, { useState } from "react";
import "./index.css";
import Header from "../Header";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaChild, FaUsers, FaPlane, FaBed, FaClock, FaKey } from "react-icons/fa";

const HolidayBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    holidayType: "",
    destination: "",
    adults: "",
    kids: "",
    travelDate: "",
    stayPreference: "",
    stayDuration: "",
    phoneNumber: "",
    otp: "",
  });

  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendOtp = () => {
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    setOtpSent(true);
    alert("OTP sent successfully!");
  };

  const verifyOtp = () => {
    if (formData.otp === "1234") {
      alert("OTP Verified!");
    } else {
      alert("Invalid OTP, please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Confirmed!");
  };

  return (
    <>
      <Header />
      <div className="main-bg">
      <div className="booking-form-container">
        <h2 className="form-title">Book Your Dream Holiday Today!</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <label className="form-label">Full Name</label>
          <div className="form-group">
            <FaUser className="icon" />
            <input name="name" placeholder="Enter your name" required onChange={handleChange} className="form-input" />
          </div>
          <label className="form-label">Email</label>
          <div className="form-group">
            <FaEnvelope className="icon" />
            <input name="email" type="email" placeholder="Enter your email" required onChange={handleChange} className="form-input" />
          </div>
          <label className="form-label">Holiday Type</label>
          <div className="form-group">
            <FaPlane className="icon" />
            <select name="holidayType" required onChange={handleChange} className="form-select">
              <option value="" disabled selected>Choose Holiday Type</option>
              <option>Adventure</option>
              <option>Luxury</option>
              <option>Beach</option>
            </select>
          </div>
          <label className="form-label">Destination</label>
          <div className="form-group">
            <FaPlane className="icon" />
            <select name="destination" required onChange={handleChange} className="form-select">
              <option value="" disabled selected>Choose Destination</option>
              <option>Maldives</option>
              <option>Switzerland</option>
              <option>Dubai</option>
            </select>
          </div>
          <label className="form-label">Number of Adults</label>
          <div className="form-group">
            <FaUsers className="icon" />
            <input name="adults" type="number" min="1" placeholder="Enter number of adults" required onChange={handleChange} className="form-input" />
          </div>
          <label className="form-label">Kids Above 5 Years</label>
          <div className="form-group">
            <FaChild className="icon" />
            <input name="kids" type="number" min="0" placeholder="Number of kids" onChange={handleChange} className="form-input" />
          </div>
          <label className="form-label">Travel Date</label>
          <div className="form-group">
            <FaCalendarAlt className="icon" />
            <input name="travelDate" type="date" required onChange={handleChange} className="form-input" />
          </div>
          <label className="form-label">Stay Preference</label>
          <div className="form-group">
            <FaBed className="icon" />
            <select name="stayPreference" required onChange={handleChange} className="form-select">
              <option value="" disabled selected>Choose Stay Preference</option>
              <option>Hotel</option>
              <option>Resort</option>
              <option>Villa</option>
            </select>
          </div>
          <label className="form-label">Stay Duration</label>
          <div className="form-group">
            <FaClock className="icon" />
            <select name="stayDuration" required onChange={handleChange} className="form-select">
              <option value="" disabled selected>Choose Stay Duration</option>
              <option>3 Days</option>
              <option>5 Days</option>
              <option>7 Days</option>
            </select>
          </div>
          <label className="form-label">Contact Number</label>
          <div className="form-group">
            <FaPhone className="icon" />
            <input name="phoneNumber" placeholder="Enter Contact Number" required onChange={handleChange} className="form-input" />
          </div>

          <button type="button" onClick={sendOtp} className="otp-button">Send OTP</button>

          {otpSent && (
            <>
              <label className="form-label">Enter OTP</label>
              <div className="form-group">
                <FaKey className="icon" />
                <input name="otp" placeholder="Enter OTP" required onChange={handleChange} className="form-input" />
              </div>
              <button type="button" onClick={verifyOtp} className="verify-button">Verify OTP</button>
            </>
          )}

          <button type="submit" className="submit-button book-now">Book Now</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default HolidayBookingForm;

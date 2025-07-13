// src/components/ShippingPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShippingPage.css"; // You can style this to match your layout

const ShippingPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    address: "",
    city: "",
    pinCode: "",
    phone: "",
    country: "India",
    state: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    // You can store this in localStorage or global state for later use
    localStorage.setItem("shippingInfo", JSON.stringify(form));
    navigate("/payment"); // Navigate to payment step
  };

  return (
    <div className="shipping-container">
      <h2>Shipping Details</h2>
      <form>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="pinCode"
          placeholder="PIN Code"
          value={form.pinCode}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <select name="country" value={form.country} onChange={handleChange}>
          <option>India</option>
        </select>
        <select name="state" value={form.state} onChange={handleChange}>
          <option>Uttar Pradesh</option>
          <option>Maharashtra</option>
          <option>Delhi</option>
          <option>Karnataka</option>
        </select>
        <button type="button" className="continue-btn" onClick={handleContinue}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default ShippingPage;

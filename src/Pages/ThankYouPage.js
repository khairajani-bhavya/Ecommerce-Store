// src/components/ThankYouPage.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ThankYouPage.css";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Destructure passed state
  const { amountPaid, orderId, email } = location.state || {};

  return (
    <div className="thankyou-container">
      <div className="thankyou-icon">✅</div>

      <div className="thankyou-message">
        <h2>Thank You for Your Purchase!</h2>
        <p>Your payment was successful and your order has been placed.</p>
      </div>

      <div className="order-details">
        <p><strong>Order ID:</strong> {orderId || "ORD123456"}</p>
        <p><strong>Email:</strong> {email || "user@example.com"}</p>
        <p><strong>Total Amount:</strong> ₹{amountPaid?.toLocaleString() || "0"}</p>
      </div>

      <button className="continue-btn" onClick={() => navigate("/")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default ThankYouPage;

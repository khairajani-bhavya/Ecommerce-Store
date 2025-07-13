// src/components/PaymentPage.js
import React from "react";
import "./PaymentPage.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const PaymentPage = ({ cart, user, setCart }) => {
  const navigate = useNavigate(); // ✅ Correct: called inside component

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const loadRazorpayScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: totalAmount * 100,
      currency: "INR",
      name: "My E-Commerce Store",
      description: "Order Payment",
      handler: function (response) {
  // ✅ Show toast
  toast.success("✅ Payment Successful!", {
    position: "top-center",
    autoClose: 3000,
  });

  // ✅ Clear cart
  if (typeof setCart === "function") {
    setCart([]);
  }

  // ✅ Immediately redirect to Thank You page
  navigate("/thank-you", {
    state: {
      amountPaid: totalAmount,
      orderId: "ORD" + Math.floor(100000 + Math.random() * 900000),
      email: user?.email || "john@example.com",
    },
  });


      },
      prefill: {
        name: user?.name || "John Doe",
        email: user?.email || "john@example.com",
        contact: user?.phone || "9999999999",
      },
      theme: {
        color: "#ff6f00",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="payment-container">
      <h2>Confirm Payment</h2>

      <div className="user-info">
        <h3>User Details</h3>
        <p><strong>Name:</strong> {user?.name || "John Doe"}</p>
        <p><strong>Email:</strong> {user?.email || "john@example.com"}</p>
        <p><strong>Phone:</strong> {user?.phone || "9999999999"}</p>
      </div>

      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} × {item.quantity} = ₹{(item.price * item.quantity).toLocaleString()}
            </li>
          ))}
        </ul>
        <p className="total">Total: ₹{totalAmount.toLocaleString()}</p>
      </div>

      <button className="pay-button" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;

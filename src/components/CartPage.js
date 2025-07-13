// src/components/CartPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();

  // Subtotal per item
  const getSubtotal = (item) => item.price * item.quantity;

  // Total amount
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.images?.[0] || item.image} alt={item.name} className="cart-img" />
                    <div>
                      <p>{item.name}</p>
                      <p>Price: ₹{item.price}</p>
                      <button className="remove-btn" onClick={() => removeFromCart(item.name)}>
                        Remove
                      </button>
                    </div>
                  </td>
                  <td>
                    <button onClick={() => updateQuantity(item.name, "dec")}>-</button>
                    <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.name, "inc")}>+</button>
                  </td>
                  <td>₹{getSubtotal(item).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
          <h3 style={{ textAlign: "right" }}>Gross Total: ₹{total.toLocaleString()}</h3>
          <div style={{ textAlign: "right" }}>
            <button className="checkout-btn" onClick={() => navigate("/shipping")}>
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

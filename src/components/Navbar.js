// Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// Ensure this is imported

const Navbar = ({ isLoggedIn, setShowSidebar }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ECOMMERCE</Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
      
        <li><Link to="/login">Login / Signup</Link></li>
      </ul>

      <div className="navbar-icons">
        {/* 🛒 Cart Icon */}
        <div
          className="navbar-cart-icon"
          onClick={() => navigate("/cart")}
          title="Cart"
        >
          🛒 <span className="cart-label">Cart</span>
        </div>

        {/* 👤 Profile Icon */}
        {isLoggedIn && (
          <div
            className="navbar-profile-icon"
            onClick={() => setShowSidebar(true)}
            title="Profile"
          >
            👤
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

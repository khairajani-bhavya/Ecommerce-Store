import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-download">
          <p><strong>DOWNLOAD OUR APP</strong></p>
          <p>Download App for Android and<br />iOS mobile phone</p>
        </div>

        <div className="footer-brand">
          <h1>ECOMMERCE.</h1>
          <p>Your one-stop shop for the best products across all categories. Fast delivery, best prices, and quality assurance.</p>
        </div>

        <div className="footer-socials">
          <p><strong>Follow Us</strong></p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>

      <div className="footer-extra">
        <div className="footer-about">
          <h4>About Us</h4>
          <p>We are an innovative e-commerce platform delivering top-tier products with exceptional service across India.</p>
        </div>
        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Main Street, New Delhi, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 ECOMMERCE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

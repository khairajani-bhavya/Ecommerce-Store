import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Sidebar from "./components/Sidebar";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/CartPage";
import ShippingPage from "./components/ShippingPage";
import PaymentPage from "./Pages/PaymentPage";
import ThankYouPage from "./Pages/ThankYouPage"; 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // ✅ Persist cart in localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to cart logic with duplicate prevention
  const addToCart = (product, redirectToCart = false, navigate) => {
  setCart((prevCart) => {
    const existingIndex = prevCart.findIndex((item) => item.name === product.name);

    if (existingIndex !== -1) {
      const updatedCart = [...prevCart];
      updatedCart[existingIndex].quantity += 1;
      return updatedCart;
    } else {
      // ✅ Ensure price is a number and quantity starts at 1
      return [...prevCart, { ...product, price: Number(product.price), quantity: 1 }];
    }
  });

  if (redirectToCart && navigate) {
    navigate("/cart");
  }
};

  // ✅ Remove item from cart
  const removeFromCart = (productName) => {
    setCart((prev) => prev.filter((item) => item.name !== productName));
  };

  // ✅ Update quantity
  const updateQuantity = (productName, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === productName
          ? {
              ...item,
              quantity: type === "inc" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setShowSidebar={setShowSidebar} />

      {showSidebar && (
        <Sidebar setShowSidebar={setShowSidebar} setIsLoggedIn={setIsLoggedIn} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="hero-section">
                <HeroSection />
              </div>
              <div
                id="products-section"
                style={{ padding: "100px 20px", backgroundColor: "#f9f9f9" }}
              >
                <h2>Our Products</h2>
                <ProductGrid />
              </div>
             <div id="footer-section">
        <Footer />
      </div>
            </>
          }
        />

        <Route path="/products" element={<ProductGrid />} />
       
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              setCart={setCart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />

        <Route path="/shipping" element={<ShippingPage cart={cart} />} />
     <Route
  path="/payment"
  element={<PaymentPage cart={cart} setCart={setCart} />}
/>
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </>
  );
}

export default App;

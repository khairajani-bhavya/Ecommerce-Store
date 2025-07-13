// src/components/ProductDetail.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./ProductGrid";
import "./ProductDetail.css";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products[id];
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState(product?.images?.[0] || product?.image);

  if (!product) return <h2>Product not found</h2>;

  const handleBuyNow = () => {
    // Optional: Store selected product to localStorage or context if needed
    navigate("/shipping");
  };

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product, true, navigate); // 👈 true = navigate to cart
    }
  };

  return (
    <div className="amazon-detail-page">
      <div className="product-detail">
        {/* Product Images */}
        <div className="product-image">
          <img className="main-img" src={mainImage} alt={product.name} />
          <div className="thumbnails">
            {(product.images || [product.image]).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`thumbnail ${mainImage === img ? "active" : ""}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="rating">
            {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)} ({product.reviews} Reviews)
          </p>
          <h2 className="price">₹{product.price.toLocaleString()}</h2>

          <p className="delivery">
            FREE delivery by <b>{product.delivery || "Wednesday, July 17"}</b>
          </p>

          <p className={`stock ${product.inStock ? "in" : "out"}`}>
            Status: <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
          </p>

          <div className="actions">
            <button className="buy-now" onClick={handleBuyNow} disabled={!product.inStock}>
              Buy Now
            </button>
            <button className="add-to-cart" onClick={handleAddToCart} disabled={!product.inStock}>
              Add to Cart
            </button>
          </div>

          <div className="description">
            <h3>About this item</h3>
            <ul>
              {product.description?.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

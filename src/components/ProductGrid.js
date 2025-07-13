import React, { useState } from "react";
import { Link } from "react-router-dom";

export const products = [
  {
    name: "WWE 2k20",
    image: "https://m.media-amazon.com/images/I/81mAxEmatDL.jpg",
    price: 1500,
    rating: 3,
    reviews: 1,
    category: "Games",
    description: [
      "Experience the most realistic wrestling action with enhanced graphics.",
      "Play with WWE legends and modern superstars.",
      "Enjoy new storylines and backstage interactions."
    ],
    delivery: "Wednesday, July 17",
    inStock: true,
  },
  {
    name: "Apple MacBook Pro (8GB RAM, 256GB SSD)",
    image: "https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg",
    price: 160000,
    rating: 5,
    reviews: 1,
    category: "Laptop",
    description: [
      "Apple M1 chip delivers amazing performance and efficiency.",
      "256GB SSD ensures fast app launches and quick boot times.",
      "Retina display offers stunning visuals for professional use."
    ],
    delivery: "Monday, July 15",
    inStock: false,
  },
  {
    name: "Trigger Unisex Shoes Puma Black",
    image: "https://m.media-amazon.com/images/I/517NUpFyEbL._SY300_QL15_.jpg",
    price: 4499,
    rating: 5,
    reviews: 1,
    category: "Footwear",
    description: [
      "Comfortable and stylish shoes for both men and women.",
      "Perfect for running, workouts, and casual wear.",
      "Breathable material with excellent grip."
    ],
    delivery: "Tuesday, July 16",
    inStock: true,
  },
  {
    name: "OnePlus 9 Pro 12 GB RAM",
    image: "https://m.media-amazon.com/images/I/71ZDY57yTQL._SL1500_.jpg",
    price: 24000,
    rating: 4,
    reviews: 1,
    category: "Smartphones",
    description: [
      "Flagship OnePlus performance with Snapdragon 888 processor.",
      "120Hz Fluid AMOLED display for smooth visuals.",
      "Supports Warp Charge for ultra-fast charging."
    ],
    delivery: "Friday, July 19",
    inStock: true,
  },
  {
    name: "Men's Polo T-shirt",
    image: "https://m.media-amazon.com/images/I/61kHoFE8mAL._UY1100_.jpg",
    price: 699,
    rating: 4,
    reviews: 1,
    category: "Tops",
    description: [
      "Classic polo design with comfortable fit.",
      "Made with breathable cotton material.",
      "Perfect for office or casual outings."
    ],
    delivery: "Thursday, July 18",
    inStock: true,
  },
  {
    name: "Women's Black Dress",
    image: "https://m.media-amazon.com/images/I/61xgXT-TCEL._UY1100_.jpg",
    price: 1899,
    rating: 4,
    reviews: 1,
    category: "Attire",
    description: [
      "Elegant black dress perfect for evening wear.",
      "Flattering fit with soft and stretchable fabric.",
      "Ideal for parties and special occasions."
    ],
    delivery: "Saturday, July 20",
    inStock: true,
  },
  {
    name: "Canon EOS 5D DSLR Camera",
    image: "https://m.media-amazon.com/images/I/81Ydm1BbOZL.jpg",
    price: 245000,
    rating: 5,
    reviews: 1,
    category: "Camera",
    description: [
      "Professional-grade DSLR for high-resolution photography.",
      "Full-frame sensor with 30.4 MP resolution.",
      "Ideal for both studio and outdoor shoots."
    ],
    delivery: "Sunday, July 21",
    inStock: false,
  },
  {
    name: "Boat Rockerz 450 Wireless Headphones",
    image: "https://m.media-amazon.com/images/I/61S2z5PwUqL._UF350,350_QL80_.jpg",
    price: 1499,
    rating: 4,
    reviews: 2,
    category: "Audio",
    description: [
      "Up to 15 hours of playback on a single charge.",
      "Immersive sound with powerful bass.",
      "Lightweight and foldable design."
    ],
    delivery: "Tomorrow",
    inStock: true,
  },
  {
    name: "Samsung Galaxy Tab S7",
    image: "https://m.media-amazon.com/images/I/71CXhVhpM0L._UF1000,1000_QL80_.jpg",
    price: 55999,
    rating: 5,
    reviews: 3,
    category: "Tablet",
    description: [
      "High-resolution display for stunning visuals.",
      "Supports S-Pen for seamless drawing and note-taking.",
      "Powerful processor and long battery life."
    ],
    delivery: "Tuesday, July 16",
    inStock: true,
  },
  {
    name: "Amazon Echo Dot (4th Gen)",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._SL1500_.jpg",
    price: 3499,
    rating: 4,
    reviews: 5,
    category: "Smart Home",
    description: [
      "Smart speaker with Alexa voice assistant.",
      "Control smart devices, play music, and set alarms hands-free.",
      "Compact design fits any room."
    ],
    delivery: "Wednesday, July 17",
    inStock: true,
  }
];

const ProductGrid = () => {
  const [price, setPrice] = useState(250000);
  const [rating, setRating] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchPrice = product.price <= price;
    const matchRating = product.rating >= rating;
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    return matchPrice && matchRating && matchCategory;
  });

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="product-grid-wrapper" style={{ display: "flex", padding: "20px" }}>
      {/* Filter Section */}
      <aside className="filter-sidebar" style={{ width: "250px", paddingRight: "20px" }}>
        <h3>Filters</h3>

        <div className="filter-section">
          <label>Price: Up to ₹{price}</label>
          <input
            type="range"
            min="0"
            max="250000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div className="filter-section">
          <label>Categories</label>
          {categories.map((cat) => (
            <div key={cat}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              <label>{cat}</label>
            </div>
          ))}
        </div>

        <div className="filter-section">
          <label>Rating Above: {rating}★</label>
          <input
            type="range"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
        </div>
      </aside>

      {/* Product Grid */}
      <div className="product-grid-container" style={{ flex: 1 }}>
        <h2>Our Products</h2>
        <div className="product-grid" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {filteredProducts.map((product, idx) => (
            <Link to={`/product/${idx}`} key={idx} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="product-card" style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <h4>{product.name}</h4>
                <p className="rating">
                  {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)} ({product.reviews} Reviews)
                </p>
                <p className="price">₹{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;

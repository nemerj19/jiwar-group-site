import React from "react";
import "./Products.css";

const products = [
  {
    title: "Logistics",
    image: "/images/logistics.jpg", // or placeholder URL
  },
  {
    title: "Manpower",
    image: "/images/manpower.jpg",
  },
  {
    title: "Business Services",
    image: "/images/business.jpg",
  },
  {
    title: "Car Rentals",
    image: "/images/car.jpg",
  },
];

function Products() {
  return (
    <div className="products-section" id="products">
      <h2>Our Services</h2>
      <div className="product-grid">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

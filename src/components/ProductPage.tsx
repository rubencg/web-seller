import React from 'react';
import './ProductPage.css';

const ProductPage = ({ product }: { product: { image: string; name: string; price: number; description: string; } }) => {
  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image-section">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
          />
        </div>
        
        <div className="product-details-section">
          <h1 className="product-name">{product.name}</h1>
          <div className="product-price">
            ${product.price}
          </div>
          <p className="product-description">
            {product.description}
          </p>
          <button className="add-to-cart-button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

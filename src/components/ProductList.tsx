import React from 'react';
import { Link } from 'react-router-dom';
import {Product} from '../types';
import './ProductList.css';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  
  return (
    <div className="product-list-container">
      <h1 className="product-list-title">We are selling!</h1>
      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <div className="product-card-image">
              <img src={product.assets.filter(c => c.type == "image")[0].url} alt={product.name} />
            </div>
            <div className="product-card-info">
              <h2 className="product-card-name">{product.name}</h2>
              <p className="product-card-price">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
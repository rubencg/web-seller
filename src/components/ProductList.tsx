import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { formatDate } from '../utils';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">We are selling!</h1>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <div className="ratio ratio-4x3">
                  <img
                    src={product.assets.find((a) => a.type === 'image')?.url}
                    alt={product.name}
                    className="card-img-top object-fit-cover"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text mb-1">
                    <span className="fw-bold">${product.price}</span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className="text-muted ms-2 text-decoration-line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Bought on: {formatDate(product.dateBought)}</small>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

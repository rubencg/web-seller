import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import productsData from './products.json';
import Product from './types';

const ProductPageWrapper = () => {
  const { id } = useParams();
  const product = productsData.products.find(p => p.id === id);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  return <ProductPage product={product} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList products={productsData.products} />} />
        <Route path="/product/:id" element={<ProductPageWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
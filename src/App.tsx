import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import productsData from './products.json';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList products={productsData.products} />} />
        <Route path="/product/:id" element={<ProductPage product={productsData.products[0]} />} />
      </Routes>
    </Router>
  );
}

export default App;
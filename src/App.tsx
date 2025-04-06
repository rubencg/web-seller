import React from 'react'
import ProductPage from './components/ProductPage';
import productsData from './products.json';
import Product from './types';

const App = () => {
    const product = productsData.products[0] as Product; // Get the first product

    return (
        <div className="App">
        <ProductPage product={product} />
        </div>
    );
}

export default App
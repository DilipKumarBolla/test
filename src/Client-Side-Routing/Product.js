
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import ProductInfo from './ProductInfo';

function Product() {
  const [products] = useState([
    { id: 1, name: 'Banana', price: 100 },
    { id: 2, name: 'Apple', price: 200 },
    { id: 3, name: 'Grape', price: 300 },
    { id: 4, name: 'Tamoto', price: 400 },
    { id: 5, name: 'Pineapple', price: 500 },
    { id: 6, name: 'Potato', price: 500 },
  ]);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {/* <Link to={`/product/${product.id}`}>{product.name}</Link> */}
            <Link state={product} to={`${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet/>
    </div>
  );
}

export default Product;

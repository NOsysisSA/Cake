import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AllProduct from '../AllProduct';
import products from '../../data/Products';
import './styles/catalog.css';

function Catalog() {
  return (
    <div id='catalog' className='catalog'>
      <h1 id='catalog'>Catalog</h1>
      <Routes>
        <Route path='/' element={<LimitedProducts />} />
        <Route path='/allproducts' element={<AllProduct />} />
      </Routes>
    </div>
  );
}

function LimitedProducts() {
  return (
    <div className='products'>
      {products.slice(0, 6).map((product) => (
        <div className='product' key={product.id}>
          <h1>{product.name}</h1>
          <img width={350} height={250} src={product.img} alt={product.name} />
          <div className='info'>
            <p>{product.price} UAN/kg</p>
          </div>
        </div>
      ))}
      <div  className='button-more'>
        <Link className='more' to='/allproducts'>More</Link>
      </div>
    </div>
  );
}

export default Catalog;

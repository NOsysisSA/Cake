import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/Products';
import './content/styles/catalog.css';

function AllProduct() {
  return (
    <div className='products'>
      {products.map((product) => (
        <div className='product' key={product.id}>
          <h1>{product.name}</h1>
          <img width={350} height={250} src={product.img} alt={product.name} />
          <p>{product.price} UAN/kg</p>
        </div>
      ))}
      <div className='button-less'>
          <Link className='less' to='/'>Less</Link>
      </div>
    </div>
  );
}

export default AllProduct;

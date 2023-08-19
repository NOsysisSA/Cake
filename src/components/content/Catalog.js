import React from 'react'
import products from '../../data/Products'
import './styles/catalog.css'
function Catalog() {
  return (
    <div id='catalog' className='catalog'>
        <h1 id="catalog">Catalog</h1>
        <div className='products'>
        {products.slice(0, 6).map(products => (
            <div className='product' key={products.id}>
                <h1>{products.name}</h1>
                <img width={350} height={250} src={products.img}/>
                <p>{products.price} UAN/kg</p>
            </div>
        ))}
        </div>
          <div className='button-more'>  
            <a href='#'>More</a>
          </div>
    </div>
  )
}


export default Catalog
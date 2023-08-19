import React from 'react'
import { FiCheck } from "react-icons/fi";
import './styles/delivery.css'
function Delivery() {
  return (
    <div id="delivery" className='delivery'>
      <div className='info'>
        <h1>Payment and delivery</h1>
        <h2>Payment method</h2>
        <p>{<FiCheck/>} By card online</p>
        <p>{<FiCheck/>} Cash on delivery</p>
        <h2>Method of delivery</h2>
        <p><FiCheck/> Pickup 11 Tranavskogo St.</p>
        <p><FiCheck/> Courier in Ternopil</p>
      </div>
      <div className='photo-position'>
        <img src='https://nahirna-cake.com.ua/_next/image?url=%2Fassets%2Fmap.webp&w=1080&q=75'/>
      </div>
    </div>
  )
}

export default Delivery
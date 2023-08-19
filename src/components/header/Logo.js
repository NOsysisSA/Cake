import React from 'react';
import './styles/logo.css'
function Logo() {
  const srcImg = "https://nahirna-cake.com.ua/assets/logo.svg";
  return (
    <div className='logo'>
      <img src={srcImg} alt='logo' />
    </div>
  );
}

export default Logo;

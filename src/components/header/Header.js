import React from 'react'
import Logo from './Logo'
import Links from './Links'
import Counter from './Counter'
import './styles/header.css'
function Header({ handleLinkClick }) {
  return (
    <header className='header'>
      <Logo/>
      <Links handleLinkClick={handleLinkClick}/>
      <Counter/>
    </header>
  )
}

export default Header
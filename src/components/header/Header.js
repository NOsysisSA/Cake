import React from 'react'
import Logo from './Logo'
import Links from './Links'
import Counter from './Counter'
import './styles/header.css'
function Header() {
  return (
    <header className='header'>
      <Logo/>
      <Links/>
      <Counter/>
    </header>
  )
}

export default Header
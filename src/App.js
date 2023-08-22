import React from 'react'
import './styles/app.css'
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import {BrowserRouter} from 'react-router-dom'
function App() {
  
  const handleLinkClick = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className='app'>
      <BrowserRouter> 
        <Header handleLinkClick={handleLinkClick}/>
        <Content handleLinkClick={handleLinkClick}/>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
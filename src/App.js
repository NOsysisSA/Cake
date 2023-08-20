import React from 'react'
import './styles/app.css'
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
function App() {
  const handleLinkClick = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className='app'>
      <Header handleLinkClick={handleLinkClick}/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
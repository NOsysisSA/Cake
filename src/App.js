import React from 'react'
import './styles/app.css'
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
function App() {
  
  return (
    <div className='app'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
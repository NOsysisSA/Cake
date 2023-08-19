import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './styles/index.css'

function MyApp(){
  return(
    <div className='main'>
      <App/>
    </div>
  )
}

const app = ReactDOMClient.createRoot(document.getElementById("root"))
app.render(<MyApp />)
import React from 'react'
import Delivery from './Delivery'
import Catalog from './Catalog'
import About from './About'
import Intro from './Intro'
function Content() {
  return (
    <div>
        <Intro/>
        <About/>
        <Catalog/>
        <Delivery/>
    </div>
  )
}

export default Content
import React from 'react'
import Delivery from './Delivery'
import Catalog from './Catalog'
import About from './About'
import Intro from './Intro'
function Content( {handleLinkClick, hendClickForUpdatePrice, hendClickForUpdateNum} ) {
  return (
    <div>
        <Intro handleLinkClick={handleLinkClick}/>
        <About/>
        <Catalog hendClickForUpdateNum={hendClickForUpdateNum} hendClickForUpdatePrice={hendClickForUpdatePrice}/>
        <Delivery/>
    </div>
  )
}

export default Content
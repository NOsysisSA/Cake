import React from 'react'
import './styles/link.css'
function Links({ handleLinkClick }) {
  return (
    <div className='links'>
        <div className='link'>
            <a onClick={() => handleLinkClick('#about')} >About me</a>
        </div>
        <div className='link'>
            <a onClick={() => handleLinkClick('#catalog')} >Cataloge</a>
        </div>
        <div className='link'>
            <a onClick={() => handleLinkClick('#delivery')} >Delivery</a>
        </div>   
        <div className='link'v>
            <a onClick={() => handleLinkClick('#footer')} >Contacts</a>
        </div>
            
    </div>
  )
}

export default Links
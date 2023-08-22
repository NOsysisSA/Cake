import React from 'react'
import Logo from '../header/Logo'
import './styles/footer.css'
function footer(scrollToSection) {
  return (
    <div id="footer" className='footer'>
        <div className='footer-social-networks'>
            <h2>Social networks</h2>
            <a className='social-networks' href='https://www.instagram.com/viktoriia.nahirna/'><img src='https://nahirna-cake.com.ua/_next/image?url=%2Fassets%2Ficons%2Fsocial%2Finstagram.png&w=48&q=75'/></a>
            <a className='social-networks' href='https://t.me/Nahirna_Vika'><img src='https://nahirna-cake.com.ua/_next/image?url=%2Fassets%2Ficons%2Fsocial%2Ftelegram.png&w=48&q=75'/></a>
            <a className='social-networks' href='viber://chat?number=%2B380961682394'><img src='https://nahirna-cake.com.ua/_next/image?url=%2Fassets%2Ficons%2Fsocial%2Fviber.png&w=48&q=75'/></a>
            <a className='social-networks' href='https://m.me/viktoria.nosova.18'><img src='https://nahirna-cake.com.ua/_next/image?url=%2Fassets%2Ficons%2Fsocial%2FfbMessenger.png&w=48&q=75'/></a>
        </div>
    </div>
  )
}

export default footer
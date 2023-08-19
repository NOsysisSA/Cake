import React from 'react'
import './styles/about.css'

function About() {
  return (
    <div id='about' className='about'>
        <div className='photo'>
            <img width={316} height={210} src='https://nahirna-cake.com.ua/_next/image?url=%2Fassets%2Fabout-left.webp&w=640&q=75'/>
        </div>
        <div className='portret'>
        <img width={415} height={615} src='https://nahirna-cake.com.ua/_next/image?url=%2Fassets%2Fabout-center.webp&w=828&q=75'/>
        </div>
        <div className='info'>
            <h3>I am Nagirna Viktoria, chef confectioner</h3>
            <p>invite you to visit my site and choose your favorite cheesecak
            use only natural and high-quality ingredients. I am very partic
            about the quality and freshness of my desserts, so ever
            heesecake is made with real love
            On the site you will find various flavors and sizes, so ever
            customer will find their favorite option, in addition, I am alw
            cady to help you choose the best option.</p>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

 const Header = () => {
  return (

    <header>
      <div className="container header__container">
        <div className="info">
        <h5>Hello i'm</h5>
        <h1>Ritu Jadhav</h1>
        <h5 className="text-light">
          FullStack Developer
        </h5>
        <CTA/>
        </div>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}


export default Header;
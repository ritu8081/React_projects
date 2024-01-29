import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'


 const App=()=> {
  return (

    <>
  <Header/>
  <Nav/>
  <About/>
  <Experience/>
  <Services/>
  <Portfolio/>
  <Testimonials/>
  <Contact/>
  <Footer/> 

  


    </>
  )
}


export default App;
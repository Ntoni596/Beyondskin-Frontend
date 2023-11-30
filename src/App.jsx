import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Treatments from './pages/Treatments'
import Vouchers from './pages/Vouchers'
import Contact from './pages/Contact'
import  useCustomizer  from './hooks/useCustomizer'

function App() {
  const {
    navTextColor, mobileNavColor, 
    mobileNavTextColor, footerColor, footerTextColor, 
    primaryColor, secondaryColor, tertiaryColor, 
    bodyFont, headingFont} = useCustomizer();
  
  useEffect(() => {
    document.getElementById('footer').style.backgroundColor = `${footerColor}`;
    document.getElementById('top-nav').style.color = `${navTextColor}`;
    document.getElementById('footer').style.color = `${footerTextColor}`;
    document.getElementById('top-nav').style.fontFamily = `${headingFont}`;
    document.body.style.fontFamily = `${bodyFont}`;


  })
 
  return (
    <>
      <BrowserRouter>
        <Header/>
        <div className='page-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/ayurveda' element={<Home />} />
            <Route path='/treatments' element={<Treatments />} />
            <Route path='/vouchers' element={<Vouchers />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/book' Component={() => {
              window.location.href = 'https://bookings.gettimely.com/beyondskin1/bb/book';
            }} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

import React, { useState,useEffect } from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/main_hero'
import Social from './Component/Social'
import About from './Component/About'
import Worked from './Component/worked'
import Portfolio from './Component/Portfolio'
import Contact from './Component/Contact'

import './App.css'
function App(){
  
  const [offset, setOffset] = useState(0);
  const [about, setAbout] =useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)      
    }
  }, []);

  console.log(offset); 
    return (
      <div className="body">
        {/* Body Content */}
        <Social  />
        <Navbar />
        <main className="pang">
        <Hero />
       <About />
        <Worked />
        <Portfolio />
        <Contact />
        </main>
      </div>
    )
  }

  export default App

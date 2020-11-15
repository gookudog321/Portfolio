import React, { useState,useEffect } from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/main_hero'
import Social from './Component/Social'
import About from './Component/About'
import Worked from './Component/worked'
import Portfolio from './Component/Portfolio'
import Contact from './Component/Contact'


import * as loadingData from "./loading.json";
import * as successData from "./success.json";


import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
// import Test from './Component/Test'

import './App.css'
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: successData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function App(){

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          setLoading(true);
          setTimeout(() => {
            setSuccess(true);
          }, 1000);
        });
    }, 1500);
  }, []);
  
  
  return (
    <>
     {!success ? (
       <FadeIn>
       <div style={{ display: "flex" }}>
         {!loading ? (
           <Lottie options={defaultOptions} height={500} width={500} />
         ) : (
           <Lottie options={defaultOptions2} height={500} width={500} />
         )}
       </div>
     </FadeIn>
   ) : (
      <div className="body">
                {/* Body Content */}
        <Social  />
        
        <Navbar />
        <main className="pang">
        <Hero />
       <About />
       {/* <Test /> */}
        <Worked />
        <Portfolio />
        <Contact />
        </main>
      </div>
   )}
      </>
    )
  }

  export default App

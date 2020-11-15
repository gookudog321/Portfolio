import React, {useState, useEffect}from 'react'
import { debounce } from  './helpers';  
import './Navbar.css'
function Navbar() {
    const [click , setClick] = useState(false);
    const [button, setButton]= useState(true)
    const [open , setOpen]= useState(true);
    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () =>setClick(false)

        const showButton = () =>{
            if(window.innerWidth<=960){

            }else{
                setClick(false)
            }
        };
    
    useEffect (() => {
        showButton()
    }, []);

    const scroll = () =>{
        if(window.pageYOffset>0){
            setOpen(false)
        }else{
            setOpen(true)
        }
    };

    console.log(window.pageYOffset)
    

    const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);  

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    transition: 'top 0.6s' 
  }
    useEffect(() => {
        scroll()
    }, []);
    window.addEventListener('resize', showButton)
    window.addEventListener('scroll', scroll)
    return (
        <>
          <header style={{ ...navbarStyles, top: visible ? '0' : '-100px' }} className={open ? '' :'open-n'}>
                <nav data-wow-offset="10" data-wow-onAnimationIteration="2">
                    <div onClick={closeMobileMenu} className="logo"><a href="#">B</a></div>
                    <div onClick={handleClick} className="nav-btn">
                        <ion-icon name={click ? 'close-outline' : 'menu-outline'}></ion-icon>
                    </div>
                    <div>
                        <ul className={click ? 'nav-menu open' :'nav-menu'}>
                            <li onClick={closeMobileMenu} className="animate__animated animate__backInDown animate__delay-04s"><a href="#"><span>01.</span>About</a></li>
                            <li onClick={closeMobileMenu} className="animate__animated animate__backInDown animate__delay-06s"><a href="#"><span>02.</span>Experience</a></li>
                            <li onClick={closeMobileMenu} className="animate__animated animate__backInDown animate__delay-08s"><a href="#"><span>03.</span>Work</a></li>
                            <li onClick={closeMobileMenu} className="animate__animated animate__backInDown animate__delay-01s"><a href="#"><span>04.</span>Contact</a></li>
                            <li onClick={closeMobileMenu} className="animate__animated animate__backInDown animate__delay-012s"><a href="#"><b>Resume</b></a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
        )
    }
    
    export default Navbar






// import React, { Component, useState, useEffect } from 'react'
// import './Navbar.css'

// export default class Navbar extends Component {
    
//     render() {
//         const [click , setClick] = useState(false);

//         const handleClick = () =>setClick(!click);
//         const closeMobileMenu = () =>setClick(false)

//         const showButton = () =>{
//             if(window.innerWidth<=960){
//                 setButton(false)
//             }else{
//                 setButton(true)
//             }
//         };
    
//         useEffect (() => {
//             showButton()
//         }, []);
    
//         window.addEventListener('resize', showButton)
//         return (
//             <header>
//                 <nav data-wow-offset="10" data-wow-onAnimationIteration="2">
//                     <div onClick={closeMobileMenu} className="logo"><a href="#">B</a></div>
//                     <div onClick={handleClick} className="nav-btn">
//                         <ion-icon name="menu-outline"></ion-icon>
//                     </div>
//                     <div>
//                         <ul className="nav-menu">
//                             <li className="animate__animated animate__backInDown animate__delay-04s"><a href="#"><span>01.</span>About</a></li>
//                             <li className="animate__animated animate__backInDown animate__delay-06s"><a href="#"><span>02.</span>Experience</a></li>
//                             <li className="animate__animated animate__backInDown animate__delay-08s"><a href="#"><span>03.</span>Work</a></li>
//                             <li className="animate__animated animate__backInDown animate__delay-01s"><a href="#"><span>04.</span>Contact</a></li>
//                             <li className="animate__animated animate__backInDown animate__delay-012s"><a href="#"><b>Resume</b></a></li>
//                         </ul>
//                     </div>
//                 </nav>
//             </header>
//         )
//     }
// }

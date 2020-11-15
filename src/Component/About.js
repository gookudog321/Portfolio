import React, {useEffect, useState } from 'react'
import './about.css'
import nopphon from '../image/nopphon.jpg'
  
function About(){

    const [offset, setOffset] = useState(false);
    const scroll = () =>{
        if(window.pageYOffset > 50){
            setOffset(false)
        }else{
            setOffset(true)
        }
    };

    useEffect(() => {
        scroll()
    }, []);
    window.addEventListener('scroll', scroll)
        return (
            <section id="about" className={offset ?'mx ' :'mx animate__animated animate__zoomInUp'}>
                <div className="about-me">
                    <div>
                        <h2 className="h-text">About Me</h2>
                        <p >Hello! I'm Brittany, a software engineer based in Boston, MA.</p>
                        <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
                        <p>Shortly after graduating from <a className="a" href="https://www.ccis.northeastern.edu">Northeastern University</a>, I joined the engineering team at <a className="a"  href="https://www.upstatement.com">Upstatement</a> where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
                        <p>Here are a few technologies I've been working with recently:</p>
                        <ul className="about-me-skill">
                            <li><ion-icon name="caret-forward-outline"></ion-icon>HTML5 & CSS3</li>
                            <li><ion-icon name="caret-forward-outline"></ion-icon>PHP</li>
                            <li><ion-icon name="caret-forward-outline"></ion-icon>Java Script</li>
                            <li><ion-icon name="caret-forward-outline"></ion-icon>React Js</li>
                        </ul>
                    </div>
                    <div className="main-poster">
                        <img className="poster" src="https://picsum.photos/200/200" /> 
                    </div>
                </div>
            </section>
        )
    }
    export default About

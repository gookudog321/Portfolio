import React, { useEffect,useState } from 'react'
import '../Component/contact.css'

function Contant(){
        
    const [offset, setOffset] = useState(false);
    const scroll = () =>{
        if(window.pageYOffset > 2829){
            setOffset(false)
        }else{
            setOffset(true)
        }
    };

    useEffect(() => {
        scroll()
    }, []);
    window.addEventListener('scroll', scroll)
    return(
        <>
        <section id="contact" className={offset ?'contant ' :'contant '}>
        <div className="contant-main">
                    <p className="h-text">Contact Me</p>
                </div>
                <h1>Get In Touch</h1>
                <p></p>
                <button><a href="mailto:noppon321111@gmail.com" >Say Hello</a></button>
        </section>

        </>
    )
}

export default Contant
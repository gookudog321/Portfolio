import React, { useEffect,useState } from 'react'
import '../Component/contact.css'

function Contant(){
        
    const [offset, setOffset] = useState(false);
    const scroll = () =>{
        if(window.pageYOffset > 4000){
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
        <section className={offset ?'contant ' :'contant animate__animated animate__zoomInUp'}>
        <div className="contant-main">
                    <p className="h-text">What’s Next?</p>
                </div>
                <h1>Get In Touch</h1>
                <p>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <button>Say Hello</button>
        </section>

        </>
    )
}

export default Contant
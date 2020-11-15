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
                        <p>คนที่จะประสบผลสำเร็จได้เรื่อยๆ จะต้องมุ่งมั่นทำสิ่งที่จำเป็นต้องทำ ทำในเวลาที่เหมาะสม และให้ได้ผลลัพธ์อย่างที่มันควรจะเป็น ต้องทำงานทุกอย่างให้ได้ตามมาตรฐาน หลังจากงานสำเร็จก็ต้องรักษามาตรฐานนั้นไว้หรือปรับปรุงทำให้มันดียิ่งขึ้น อย่ามั่นใจมากเกินไปและอย่ายึดติดอยู่กับความสำเร็จเดิมๆ</p>
                        <p>ความผิดพลาดเป็นเรื่องที่หลีกเลี่ยงไม่ได้ เพราะว่าเราต้องเสี่ยง ปัญหาไม่ได้อยู่ที่ความผิดพลาด แต่เราต้องวิเคราะห์มันและหาทางแก้ไข <b className="a">เราต้องแยกให้ออกว่าตัวเราไม่ใช่ความผิดพลาดที่เราทำ</b> แต่ Ego จะทำให้เรามองว่าตัวเราคือความผิดพลาดและจะทำให้เรามองเห็นแค่ความสำเร็จและความล้มเหลว</p>
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

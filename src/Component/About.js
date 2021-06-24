import React, {useEffect, useState } from 'react'
import './about.css'
import nopphon from '../image/nopphon.jpg'
  
function About(){

    const skill =[
        {
            id : 'HTML5 & CSS3'
        },
        {
            id : 'PHP'
        },
        {
            id : 'SQL'
        },
        {
            id: 'Java Script'
        },
        {
            id: 'React JS'
        },
        {
            id: 'Bootstrap'
        }
    ]
    const skills = skill.map((datas) => 
<li><ion-icon name="caret-forward-outline"></ion-icon>{datas.id}</li>)

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
            <section id="about" className={offset ?'mx ' :'mx '}>
                <div className="about-me">
                    <div>
                        <h2 className="h-text">About Me</h2>
                        <p className="indent">สวัสดีคับผมทำงานเกี่ยวกับ Implement & Tester อยู่แถวกรุงเทพ รามอินทรา ชื่นชอบเว็บไซต์ที่ออกแบบ UX/UI ที่แบบเล่นแล้วว้าว !!  เป้าหมายในอนาคต การสร้างแอปพลิเคชัน และการเขียนภาษาใหม่ๆ</p>
                        <p className="indent">ช่วงที่กำลังศึกษาที่ <a target="_blank" href="https://www.cmru.ac.th/" className="a">มหาวิทยาลัยราชภัฏเชียงใหม่</a> ผมเริ่มสนใจเกี่ยวกับการเขียนโค้ด และได้สร้างและพัฒนาตัวเองอยู่ตลอดนี้เป็นภาษาที่เคยใช้ และกำลังศึกษา <a href="https://reactjs.org/" target="_blank" className="a">React JS</a> เพิ่มเติม...</p>
                        <ul className="about-me-skill">
                            {skills}
                        </ul>
                    </div>
                    <div className="main-poster">
                        <img className="poster" src={nopphon} /> 
                    </div>
                </div>
            </section>
        )
    }
    export default About

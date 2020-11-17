import React, { Component } from 'react'
import './main_hero.css'

export default class main_hero extends Component {
    render() {
        return (
            <section className="main-hero">
                <div className="animate__animated animate__backInLeft animate__delay-015s">
                    Hello I'm Ball
                </div>

                <div className="animate__animated animate__backInLeft animate__delay-020s">
                    <h2 className="big-heading ">Nopphon Hwalingta.</h2>
                </div>
                <div className="animate__animated animate__backInLeft animate__delay-025s">
                    <h3 className="big-heading">I build things for the web.</h3>
                </div>

                <div className="animate__animated animate__backInLeft animate__delay-030s">
                    <p className="font-t">สวัสดีคับผมทำงานเกี่ยวกับ Implement & Tester อยู่แถวกรุงเทพ รามอินทรา ชื่นชอบการขียนโค้ด ,ดีดกีตาร์ลงๆ ขึ้นๆ ลงขึ้น</p>
                </div>

                <div className="animate__animated animate__backInLeft animate__delay-035s">
                    <a href="mailto:noppon321111@gmail.com">Contact me</a>
                </div>
            </section>
        )
    }
}

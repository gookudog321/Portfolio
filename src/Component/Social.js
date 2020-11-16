import React, { Component } from 'react'
import './social.css'

export default class Social extends Component {
    render() {
        return (
            <>
                <div className="social-m animate__animated animate__backInLeft animate__delay-040s">
                    <ul className="social-line">
                        <li><a target="_blank" href="https://github.com/gookudog321"><ion-icon name="logo-github"></ion-icon></a></li>
                        <li><a target="_blank"  href="https://www.facebook.com/profile.php?id=100004003782563"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a target="_blank"  href="https://www.instagram.com/0o_ball_o0/"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a target="_blank"  href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li></li>
                    </ul>
                </div>
                <di className="social-g animate__animated animate__backInRight animate__delay-040s">
                    <p><a href="mailto:noppon321111@gmail.com" >Nopphon321111@gmail.com</a></p>
                    <p className="social-line2"></p>
                </di>
            </>
        )
    }
}

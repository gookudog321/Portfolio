import React, { Component } from 'react'
import './social.css'

export default class Social extends Component {
    render() {
        return (
            <>
                <div className="social-m animate__animated animate__backInLeft animate__delay-040s">
                    <ul className="social-line">
                        <li><a href="#"><ion-icon name="logo-github"></ion-icon></a></li>
                        <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li></li>
                    </ul>
                </div>
                <di className="social-g animate__animated animate__backInRight animate__delay-040s">
                    <p>Nopphon321@gmail.com</p>
                    <p className="social-line2"></p>
                </di>
            </>
        )
    }
}

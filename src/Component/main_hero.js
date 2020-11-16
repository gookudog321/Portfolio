import React, { Component } from 'react'
import './main_hero.css'

export default class main_hero extends Component {
    render() {
        return (
            <section className="main-hero">
                <div className="animate__animated animate__backInLeft animate__delay-015s">
                    Hello i'm Nopphon
                </div>

                <div className="animate__animated animate__backInLeft animate__delay-020s">
                    <h2 className="big-heading ">Brittany Chiang.</h2>
                </div>
                <div className="animate__animated animate__backInLeft animate__delay-025s">
                    <h3 className="big-heading">I build things for the web.</h3>
                </div>

                <div className="animate__animated animate__backInLeft animate__delay-030s">
                    <p>I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
                </div>

                <div className="animate__animated animate__backInLeft animate__delay-035s">
                    <a href="mailto:noppon321111@gmail.com">Get In Touch</a>
                </div>
            </section>
        )
    }
}

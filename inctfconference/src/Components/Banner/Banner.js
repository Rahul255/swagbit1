import React from 'react'
import './Banner.css'
import Slide from 'react-reveal/Slide';

function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <Slide left><div className="title">Cybersecurity Hacking Contest</div></Slide>
                <Slide right><div className="paragraph">This is a national level hacking contest organized by team bi0s</div></Slide>
                <div className="buttons">
                    <Slide left><button className="button">Login Now</button></Slide>
                    <Slide right><button className="button">Register Now</button></Slide>
                </div>
            </div>
            
        </div>
    )
}

export default Banner

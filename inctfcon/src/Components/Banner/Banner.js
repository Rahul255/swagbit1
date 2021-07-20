import React from 'react'
import './Banner.css';
import image from '../../images/bb1.png'
import Fade from 'react-reveal/Fade';

function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <Fade left>
                <h1 className="title">Hacking Contest</h1>
                </Fade>
                <Fade right>
                <h1 className="description">InCTFCon</h1>
                </Fade>
                <div className="banner_buttons" style={{ display: "flex" }}>
                    <button className="button" style={{ marginLeft: "auto" }}> Play </button>
                    <button className="button" style={{ marginRight: "auto" }}> Register</button>
                </div>
            </div>
            
            <div></div>
            <div className="fade_bottom"></div>
         </div>
    )
}

export default Banner

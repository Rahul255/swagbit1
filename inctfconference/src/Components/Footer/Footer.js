import React from 'react'
import './Footer.css'
import logo from '../../images/logomain.png';

function Footer() {

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="logo">
                            <img src={logo} alt="logo"></img>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div></div>
                <br/> <br/> <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="middle">
                            <h2>Get In Touch</h2>
                            <a className="btn facebook" href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn twitter" href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="btn google" href="#">
                                <i className="fab fa-google"></i>
                            </a>
                            <a className="btn instagram" href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="btn youtube" href="#">
                                <i className="fab fa-youtube"></i>
                            </a>

                        </div>
                    </div>
                </div>
                <br/> <br/> <br/>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="copyright">© InCTF 2020 - 2021. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

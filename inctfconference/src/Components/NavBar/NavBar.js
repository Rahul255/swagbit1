import React from 'react'
import './NavBar.css'
import Logo from '../../images/logomain.png'

function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" src={Logo} alt="Netflix Logo"/>
            <div className="nav-right">
                <span className="right">Contact Us</span>
                <span className="right">Mentors</span>
                <span className="right">About</span>
                <span className="right">Home</span>
            </div>
            <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/>
        </div>
    )
}

export default NavBar

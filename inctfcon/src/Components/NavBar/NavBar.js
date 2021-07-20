import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './NavBar.css';
import logo from '../../images/logo.png';

function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Netflix Logo"/>
            <div className='navbar__title navbar__item' src={logo}></div>
            <div className='navbar__item'>About Us</div>
            <div className='navbar__item'>Contact</div>
            <div className='navbar__item'>Help</div>        
    
        </div>
    )
}

export default NavBar
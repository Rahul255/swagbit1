import React,{useState,useEffect} from 'react'
import './NavBar.css'
import Logo from '../../images/logomain.png'

function NavBar() {
    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if(window.scrollY>100){
            setShow(false)
        }else{
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',controlNavbar)
        return () => {
            window.removeEventListener('scroll',controlNavbar)
        }
    }, [])
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

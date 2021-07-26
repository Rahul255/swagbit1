import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Banner from '../Components/Banner/Banner'
import About from '../Components/About/About'
import Goals from '../Components/Goal/Goals'
import Footer from '../Components/Footer/Footer'
import EndProgram from '../Components/EndProgram/EndProgram'
import Sponsor from '../Components/Sponsor/Sponsor'
import Organizers from '../Components/Organizers/Organizers'

function Home() {
    return (
        <div>
            <NavBar />  
            <Banner />
            <About />
            <EndProgram />
            <Goals />
            <Sponsor />
            <Organizers/>
            <Footer />
        </div>
    )
}

export default Home

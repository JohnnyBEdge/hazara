import React, {useState, useEffect} from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';
import WhoWeAre from '../components/who-we-are';
import WhatWeDo from '../components/what-we-do';
import HowToHelp from '../components/how-to-help';
import Footer from '../components/footer';
import EventsTable from '../components/EventsTable';
import Hero from '../components/Hero';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };



    return (
        <>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
            <Navbar toggleMenu={toggleMenu}/>
            <Hero/>
            {/* <WhoWeAre />
            <WhatWeDo/>
            <HowToHelp/>
            <Footer/> */}
        </>
    )
}

export default Home;

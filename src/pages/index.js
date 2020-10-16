import React, {useState} from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';
import WhoWeAre from '../components/who-we-are';
import WhatWeDo from '../components/what-we-do';
import HowToHelp from '../components/how-to-help';
import Footer from '../components/footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
            <Navbar toggleMenu={toggleMenu}/>
            <WhoWeAre />
            <WhatWeDo/>
            <HowToHelp/>
            <Footer/>
        </>
    )
}

export default Home;

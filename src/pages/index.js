import React, {useState, useEffect} from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';
import WhoWeAre from '../components/who-we-are';
import WhatWeDo from '../components/what-we-do';
// import HowToHelp from '../components/how-to-help';
import Footer from '../components/footer';
import EventsTable from '../components/EventsTable';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
// import {WhoWeAre, WhatWeDo, HowToHelp} from '../components/InfoSection/data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };
    const toggleModal = () => {
        setOpenModal(!openModal)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
            <Navbar toggleMenu={toggleMenu}/>
            <Hero/>
            <WhoWeAre openModal={openModal} toggleModal={toggleModal}/>
            <WhatWeDo openModal={openModal} toggleModal={toggleModal}/>
            {/* <InfoSection {...WhoWeAre}/>
            <InfoSection {...WhatWeDo}/>
            <InfoSection {...HowToHelp}/> */}
            {/* <WhoWeAre />
            <HowToHelp/>
            <Footer/> */}
        </>
    )
}

export default Home;

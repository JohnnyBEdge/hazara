import React, {useState, useEffect} from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';
import WhoWeAre from '../components/who-we-are';
import WhatWeDo from '../components/what-we-do';
import HowToHelp from '../components/how-to-help';
import Footer from '../components/footer';
import EventsTable from '../components/EventsTable';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Modal from '../components/Modal';
import Donate from '../components/Donate';
import Events from '../components/Events';
import DonateModal from '../components/DonateModal'


const Home = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openDonate, setOpenDonate] = useState(false);
    const [modalData, setModalData] = useState();


    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };
    const toggleModal = () => {
        setOpenModal(!openModal)
    };
    const toggleDonate = () => {
        setOpenDonate(!openDonate)
        console.log("DONATE MODAL", openDonate)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
            <Navbar toggleMenu={toggleMenu} toggleDonate={toggleDonate} />
            <Hero/>
            <WhoWeAre 
                openModal={openModal} 
                toggleModal={toggleModal}
                setModalData={setModalData} />
            <WhatWeDo 
                openModal={openModal} 
                toggleModal={toggleModal} 
                setModalData={setModalData} />
            <Modal openModal={openModal} toggleModal={toggleModal} {...modalData} />
            <HowToHelp/>
            <Events/>
            <Donate/>
            <DonateModal openDonate={openDonate} toggleDonate={toggleDonate} />
            <Footer/> 
        </>
    )
}

export default Home;

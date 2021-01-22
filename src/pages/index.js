import React, {useState, useContext} from 'react';
// import {EventsContext} from '../Context/EventsContext'
import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';
import WhoWeAre from '../components/who-we-are';
import WhatWeDo from '../components/what-we-do';
import HowToHelp from '../components/how-to-help';
import Footer from '../components/footer';
import Hero from '../components/Hero';
import Modal from '../components/Modal';
import Donate from '../components/Donate';
import Events from '../components/Events';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState();
    const [modalTypeCard, setModalTypeCard] = useState(false);



    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };
    const toggleModal = () => {
        setOpenModal(!openModal)
    };
    const toggleModalType = () => {
        setModalTypeCard(!modalTypeCard)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
            <Navbar toggleMenu={toggleMenu} />
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
            <HowToHelp  
                setModalData={setModalData}
                toggleModal={toggleModal}
                toggleModalType={toggleModalType}
                modalTypeCard={modalTypeCard}
                modalData={modalData} />
            <Events/>
            <Donate/>
            <Footer/> 
        </>
    )
}

export default Home;

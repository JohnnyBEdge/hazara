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


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState();


    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };
    const toggleModal = () => {
        setOpenModal(!openModal)
        // console.log("MODAL: ",openModal)
        // console.log(modalData)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
            <Navbar toggleMenu={toggleMenu}/>
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
            {/* <Footer/>  */}
        </>
    )
}

export default Home;

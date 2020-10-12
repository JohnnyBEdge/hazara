import React, {useState} from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
            <Navbar toggleMenu={toggleMenu}/>
        </>
    )
}

export default Home;

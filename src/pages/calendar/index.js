import React from 'react';
import Calendar from '../../components/calendar/Calendar';
import Footer from '../../components/footer';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';
import {
    CalendarContainer,
    PageTitle
} from './CalendarElements';

const CalendarPage = () => {
    return (
        <>
            
            <Sidebar 
            // isOpen={isOpen} toggleMenu={toggleMenu}
            />
            <Navbar 
            // toggleMenu={toggleMenu}
            />
            <CalendarContainer>
            <PageTitle>Events</PageTitle>
                <Calendar/>
            </CalendarContainer>
            <Footer/>  
        </>
    )
}

export default CalendarPage

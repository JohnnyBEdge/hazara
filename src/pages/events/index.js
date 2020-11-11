import React from 'react';
import Calendar from '../../components/calendar/Calendar';
import Footer from '../../components/footer';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';
import CalendarList from '../../components/calendar/CalendarList'
import {
    CalendarContainer,
    PageTitle,
    EventsList,
    Event
} from './EventElements';

const Events = () => {
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
            {/* <EventsList>
                    <Event>Event</Event>
                    <Event>Event</Event>
                    <Event>Event</Event>
                    <Event>Event</Event>
                </EventsList> */}
            <Footer/>  
        </>
    )
}

export default Events

import React from 'react';
import Calendar from '../calendar/Calendar';
import Footer from '../footer';
import Sidebar from '../Sidebar';
import Navbar from '../navbar';


import {
    CalendarContainer,
    PageTitle,
    EventsList,
    Event
} from './EventElements';

const Events = (eventsData) => {

    console.log("FROM EVENTS", eventsData)
    return (
        <>  
            <CalendarContainer id="events">
                <PageTitle>Events</PageTitle>
                <Calendar eventsData={eventsData}/>
            </CalendarContainer>
        </>
    )
}

export default Events;

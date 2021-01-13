import React, { useContext } from 'react';
import {EventsContext} from '../../Context/EventsContext'
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

const Events = () => {

    // const eventsData = useContext(EventsContext);
    // console.log("FROM EVENTS", eventsData)

    return (
        <>  
            <CalendarContainer id="events">
                <PageTitle>Events</PageTitle>
                <Calendar />
                {/* <Calendar eventsData={eventsData}/> */}
            </CalendarContainer>
        </>
    )
}

export default Events;

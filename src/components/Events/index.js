import React from 'react';
import Calendar from '../calendar/Calendar';


import {
    CalendarContainer,
    PageTitle
} from './EventElements';

const Events = () => {

    return (
        <>  
            <CalendarContainer id="events">
                <PageTitle>Events</PageTitle>
                <Calendar />
            </CalendarContainer>
        </>
    )
}

export default Events;

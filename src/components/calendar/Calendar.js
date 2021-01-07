import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {CalContainer} from './CalendarElements';

export default function Calendar({eventsData}) {
console.log("CALENDAR", eventsData.eventsData)

    const handleEventClick = (info) => {
        console.log(info.event.extendedProps.description)
        alert(`Event: ${info.event.desc}`)
    }
    return (
        <CalContainer>
            <FullCalendar
                height="auto"
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={eventsData.eventsData}
                eventClick={(e)=> handleEventClick(e)}                
            />
        </CalContainer>
    )
}

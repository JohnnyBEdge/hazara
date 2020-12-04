import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './calendar.css';

export default function Calendar({eventsData}) {
console.log("CALENDAR", eventsData.eventsData)

    const handleEventClick = (info) => {
        console.log(info.event.extendedProps.description)
        alert(`Event: ${info.event.desc}`)
    }
    return (
        <div id="cal_container">
            <FullCalendar
                id="cal_style"
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={eventsData.eventsData}
                
                eventClick={(e)=> handleEventClick(e)}
                backgroundColor="white"
                
            />
        </div>
    )
}

import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './calendar.css';

export default function Calendar() {

    const handleEventClick = (info) => {
        console.log(info.event.extendedProps.description)
        alert(`Event: ${info.event.title}` )
    }
    return (
        <div id="cal_container">
            <FullCalendar
                id="cal_style"
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={[
                    { title: 'event 1', date: '2020-11-01'},
                    { title: 'event 2', date: '2020-11-02'},
                    { title: 'event 3', start: '2020-11-02', end:'2020-11-05' },
                    { title: 'BCH237',
                        start: '2020-11-12T10:30:00',
                        end: '2020-11-12 T11:30:00',
                    },
                    { title: 'event 4', date: '2020-11-16', description: 'desc'},
                  ]}
                
                eventClick={(e)=> handleEventClick(e)}
                backgroundColor="white"
                
            />
        </div>
    )
}

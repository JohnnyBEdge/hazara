import React, {useState, useContext} from 'react';
import {EventsContext} from '../../Context/EventsContext'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {
    CalContainer, EventModal, Title, 
    Date, Desc
} from './CalendarElements';

export default function Calendar() {
// export default function Calendar({eventsData}) {

    const eventsData = useContext(EventsContext);

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [desc, setDesc] = useState('');
    const [clicked, setClicked] = useState('')

    const toggleModal = () => {
        setOpen(!open);
    }
    
    const handleEventClick = async (info) => {
        // console.log("TITLE",eventsData.events.filter(id => id._id === info.event._def.extendedProps._id) )
        const clicked = eventsData.events.filter(id => id._id === info.event._def.extendedProps._id);
        console.log("CLICKED", clicked)    
        await setTitle({clicked})
        // await console.log("TITLE", title)  
        // await setDesc(clicked.desc)
        // await console.log("DESC", desc)  
        // await setDate(clicked.date)
        // await console.log("DATE", date)  
        // await toggleModal();
    }

    return (
        <CalContainer >
            <FullCalendar
                height="auto"
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={eventsData.events}
                // events={eventsData.eventsData}
                eventClick={(e)=> handleEventClick(e)}                
            />
            <EventModal open={open}>
                <Title>{title}</Title>
                <Date>{date}</Date>
                <Desc>{desc}</Desc>
            </EventModal>
        </CalContainer>
    )
}

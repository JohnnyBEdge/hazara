import React, {useState, useContext} from 'react';
import {EventsContext} from '../../Context/EventsContext'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {
    CalContainer, EventModal, Title, 
    Date, Desc, Close
} from './CalendarElements';

export default function Calendar() {

    const eventsData = useContext(EventsContext);

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [desc, setDesc] = useState('');

    const toggleModal = () => {
        setOpen(!open);
    }
    
    const handleEventClick = (e) => {
        setTitle(e.event._def.title)
        setDesc(e.event._def.extendedProps.desc)
        setEventDate(e.event._instance.range.start.toLocaleString("en-US"))
        toggleModal();
    }
    // const handleEventClick = (e) => {
    //     const clicked = eventsData.events.filter(id => id._id === e.event._def.extendedProps._id)[0];
    //     setTitle(clicked.title)
    //     setDesc(clicked.desc)
    //     setEventDate(clicked.date)
    //     toggleModal();
    // }

    return (
        <CalContainer >
            <FullCalendar
                height="auto"
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={eventsData.events}
                eventClick={(e)=> handleEventClick(e)}                
            />
            <EventModal open={open}>
                <Close onClick={toggleModal}>X</Close>
                <Title>{title}</Title>
                <Date>{eventDate}</Date>
                <Desc>{desc}</Desc>
            </EventModal>
        </CalContainer>
    )
}

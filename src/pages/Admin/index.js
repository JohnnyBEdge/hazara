import React from 'react';
import EventsTable from '../../components/EventsTable';

const Admin = ({events, setEvents}) => {

    return (
        <div>
            
            <EventsTable events={events} setEvents={setEvents}/>
            
        </div>
    )
}

export default Admin

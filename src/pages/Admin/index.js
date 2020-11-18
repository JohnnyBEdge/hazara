import React from 'react';
import EventsTable from '../../components/EventsTable';
import Login from '../Login'

const Admin = ({events, setEvents}) => {

    return (
        <div>
            
            <EventsTable events={events} setEvents={setEvents}/>
            <Login />
        </div>
    )
}

export default Admin

import React from 'react';
import EventsTable from '../../components/EventsTable';

const Admin = (props) => {

    return (
        <div>
            
            <EventsTable events={props.events}/>
            
        </div>
    )
}

export default Admin

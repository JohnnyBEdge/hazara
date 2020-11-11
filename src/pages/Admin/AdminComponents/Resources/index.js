import React, {useState, useEffect} from 'react';
import {Admin, Resource} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import CreateEvent from '../CreateEvent';
import EditEvent from '../EditEvent';
import EventList from '../EventList';

const Resources = () => {

    const [events, setEvents] = useState([])

    async function getEvents(){
        await fetch(`https://localhost:5005/api/events`)
           .then(res => res.json())
           .then(res => {
               setEvents(res);
           })
           .then(console.log("events ",events))
   };

    // const dataProvider = fakeDataProvider({
    //     events: [
    //         { id: 0, name: 'Hello, world!', body:"test body" },
    //         { id: 1, name: 'FooBar' },
    //     ]
    // })
    useEffect(() => {
        getEvents();
    }, []);

    return (
        <Admin dataProvider={simpleRestProvider('https://localhost:5005/api/events')}>
            <Resource 
                name='events' 
                list={EventList} 
                create={CreateEvent}
                edit={EditEvent} />
        </Admin>
    )
}

export default Resources

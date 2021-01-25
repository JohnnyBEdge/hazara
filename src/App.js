import React, {useState, useEffect, useMemo} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Contact from './pages/contact';
import Admin from './pages/Admin';
import { EventsContext } from './Context/EventsContext';
import {getEvents} from './api/EventsAPI';


function App() {

  const [events, setEvents] = useState([]);
  
  const providerValue = useMemo(() => ({events, setEvents}), [events, setEvents])

  useEffect(() => {
      getEvents().then((eventsData) => {
        setEvents(eventsData.data);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <EventsContext.Provider value={providerValue}>
          <Route path='/contact' component={Contact} exact/>
          <Route path='/' component={Home} exact />
          <Route path='/admin/events' component={Admin} exact />
      </EventsContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;


          
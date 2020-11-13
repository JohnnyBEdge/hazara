import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Contact from './pages/contact';
import Events from './pages/events';
import Admin from './pages/Admin';
import Donate from './pages/donate';
// import Calendar from './pages/calendar';

function App() {

  const [events, setEvents] = useState([]);

  async function getEvents(){
      const res = await fetch(`http://localhost:5005/api/events`);
      res.json()
      .then(res => setEvents(res))
  };


  useEffect(() => {
      getEvents();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={Contact} exact />
        <Route path='/events' component={Events} exact />
        <Route path='/admin' render={(props) => (
          <Admin {...props} events={events} setEvents={setEvents} exact />
        )}/>
        <Route path='/events' component={Events} exact />

        {/* <Route path='/donate' component={Donate} exact /> */}
      </Switch>
      {/* <Home id="home"/> */}
    </Router>
  );
}

export default App;

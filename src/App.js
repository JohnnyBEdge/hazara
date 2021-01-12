import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Contact from './pages/contact';
import Admin from './pages/Admin';
import Login from './pages/Login';
// import {Auth} from 'aws-amplify';
import Events from './components/Events';
import { EventsContext } from './Context/EventsContext';
import {getEvents} from './api/EventsAPI';
import {authCheck} from './api/amplifyAuth';



// import Calendar from './pages/calendar';

function App() {

  const [events, setEvents] = useState([]);
  // const [isAuthenticating, setIsAuthenticating] = useState(true);
  // const [authenticated, setAutheticated] = useState(false);
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [authProps, setAuthProps] = useState(null);

   useEffect(() => {
      getEvents().then((eventsData) => {
        setEvents(eventsData.data);
      });
      
      authCheck().then((authData) => {
        setAuthProps(authData);
      });
      
  }, []);

  return (
    <Router>
      <Switch>
        <EventsContext.Provider value={{events, setEvents}}>
          <Route path='/contact' component={Contact} exact auth={authProps}/>
          <Route path='/' render={(props) => 
            <Home 
              // eventsData={events} 
              exact auth={authProps}{...props} />
          }/>
          {/* <Route path='/admin/login' component={Login} exact auth={authProps}/> */}
          <Route path='/admin/events' render={(props) => 
            <Admin 
              eventsData={events} 
              setEvents={setEvents} 
              exact auth={authProps}{...props} />
        }/>
      </EventsContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;


          
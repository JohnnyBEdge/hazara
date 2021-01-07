import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Contact from './pages/contact';
import Admin from './pages/Admin';
import Login from './pages/Login';
import {Auth} from 'aws-amplify';
import Events from './components/Events';


// import Calendar from './pages/calendar';

function App() {

  const [events, setEvents] = useState([]);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [authenticated, setAutheticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const getEvents = async () => {
    try{
      const res = await fetch('http://localhost:5005/api/events');
      const data = await res.json();
      await setEvents(data);
    } catch(err){
      console.log("ERROR:",err)
    }
  }

 const authCheck =  async ()  => {
    try {
      const session = await Auth.currentSession();
      setAutheticated(true);
      console.log("SESSION",session);
      const authUser = await Auth.currentAuthenticatedUser();
      console.log("USER",authUser)
      setUser(authUser);
    } catch(error) {
      if (error !== 'No current user') {
        console.log(error);
      }
    }
    setIsAuthenticating(false);
  };

  const authProps = {
    user: user,
    authenticated: authenticated,
    isAuthenticating: isAuthenticating
  };


   useEffect(() => {
      getEvents();
      authCheck();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path='/contact' component={Contact} exact auth={authProps}/>
        <Route path='/' render={(props) => 
          <Home eventsData={events} exact auth={authProps}{...props} />
        }/>
        {/* <Route path='/admin/login' component={Login} exact auth={authProps}/> */}
        <Route path='/admin/events' render={(props) => 
          <Admin eventsData={events} setEvents={setEvents} exact auth={authProps}{...props} />
        }/>

      </Switch>
    </Router>
  );
}

export default App;


          
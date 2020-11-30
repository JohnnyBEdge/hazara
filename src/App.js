import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Contact from './pages/contact';
import Events from './pages/events';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Donate from './pages/donate';
import {Auth} from 'aws-amplify'


// import Calendar from './pages/calendar';

function App() {

  const [events, setEvents] = useState([]);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [authenticated, setAutheticated] = useState(false);
  const [user, setUser] = useState(null);

  async function getEvents(){
      const res = await fetch(`http://localhost:5005/api/events`);
      res.json()
      .then(res => setEvents(res))
  };

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
  }


  useEffect(() => {
      getEvents();
      authCheck();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact auth={authProps}/>
        <Route path='/contact' component={Contact} exact auth={authProps}/>
        <Route path='/events' component={Events} exact auth={authProps}/>
        <Route path='/admin/login' component={Login} exact auth={authProps}/>
        <Route path='/admin/events' render={(props) => (
          <Admin {...props} events={events} setEvents={setEvents} exact auth={authProps}/>
        )}/>
        <Route path='/events' component={Events} exact auth={authProps}/>

        {/* <Route path='/donate' component={Donate} exact /> auth={authProps}*/}
      </Switch>
      
      {/* <Home id="home"/> */}
    </Router>
  );
}

export default App;

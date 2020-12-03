import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Contact from './pages/contact';
import Events from './pages/events';
import Admin from './pages/Admin';
import Login from './pages/Login';
import DonatePage from './pages/donate';
import {Auth} from 'aws-amplify'


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
      console.log("data from app.js",data)
    } catch(err){
      console.log("ERROR:",err)
    }
  }
  // const handleEvents = (events) => {
  //   setEvents(events)
  // };

  // async function getEvents(){
  //   await fetch(`http://localhost:5005/api/events`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setEvents(data);
  //       console.log("DATA", data)
  //     })
  // }

  // async function getEvents(){
  //   let res = await fetch(`http://localhost:5005/api/events`);
  //   if(res.status === 200){
  //     let data = await res.json();
  //     setEvents(...data);
  //     console.log("DATA",data)
  //   } else {
  //     throw new Error(res.status)
  //   }
  // }
  // async function getEvents(){
  //   const res = await fetch(`http://localhost:5005/api/events`);
  //   const data = await res.json()
  //     .then(data => setEvents(data))
  //     console.log("RES", data)
  // };

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
        <Route path='/' component={Home} exact auth={authProps}/>
        <Route path='/contact' component={Contact} exact auth={authProps}/>
        <Route path='/events' component={Events} exact auth={authProps}/>
        <Route path='/admin/login' component={Login} exact auth={authProps}/>
        <Route path='/admin/events' render={(props) => (
          <Admin eventsData={events} setEvents={setEvents} exact auth={authProps}{...props} />
        )}/>
        {/* <Route path='/events' component={Events} exact auth={authProps}/> */}

        <Route path='/donate' component={DonatePage} exact auth={authProps} /> 
      </Switch>
      
      {/* <Home id="home"/> */}
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Contact from './pages/contact';
import Events from './pages/events';
import Admin from './pages/admin';
import Donate from './pages/donate';
import Calendar from './pages/calendar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={Contact} exact />
        <Route path='/events' component={Events} exact />
        <Route path='/admin' component={Admin} exact />
        <Route path='/calendar' component={Calendar} exact />
        {/* <Route path='/donate' component={Donate} exact /> */}
      </Switch>
      {/* <Home id="home"/> */}
    </Router>
  );
}

export default App;

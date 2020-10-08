import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="temp">
        
      </div>
    </Router>
  );
}

export default App;

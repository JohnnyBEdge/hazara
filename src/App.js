import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <div className="temp">
        
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      units: [],
      displayUnits: [],
      currentUser: {},
      currentAdmin: {},
    }
  }



  render() {
    return (
      <Router>
        <Navbar />
      </Router>
    )
  }
}

export default App;

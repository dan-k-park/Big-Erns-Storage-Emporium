import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      units: [],
      displayUnits: [],
      currentUser: {},
      admin: false
    }
  }

  render() {
    return (
      <Router>
        <Navbar currentUser={this.state.currentUser} admin={this.state.admin} />
        <Route exact path='/login' render={() => <Login />} />
      </Router>
    )
  }
}

export default App;

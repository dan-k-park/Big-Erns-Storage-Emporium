import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomePage from './components//HomePage/HomePage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      units: [],
      displayUnits: [],
      currentUser: {
        firstName: 'Ernie',
        lastName: 'Johnson',
        email: 'bigern@gmail.com',
        password: 'admin1',
        admin: true
      },
      admin: false
    }
  }

  componentDidMount() {
    if (this.state.currentUser.admin) {
      this.setState({
        admin: true
      })
    }
  }



  render() {
    return (
      <Router>
        <Navbar currentUser={this.state.currentUser} admin={this.state.admin} />
        <Route exact path='/' render={() => <HomePage />} />
      </Router>
    )
  }
}

export default App;

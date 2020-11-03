import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import HomePage from './HomePage/HomePage';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Login from './Login/Login';

class App extends Component {
  componentDidMount() {
    // see export statement to see why fetchUser is available as props
    this.props.fetchUser()
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path='/login' render={() => <Login />} />
      </Router>
    )
  }
}

export default connect(null, actions)(App);
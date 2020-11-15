import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import Dashboard from './dashboard/Dashboard'
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <Router>
        <Header />
        <Route exact path ='/' component={Dashboard}/>
      </Router>
    )
  }
}

export default connect(null, actions)(App);
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    // see export statement to see why fetchUser is available as props
    this.props.fetchUser()
  }

  render() {
    return (
      <Router>
        <Header />
      </Router>
    )
  }
}

export default connect(null, actions)(App);
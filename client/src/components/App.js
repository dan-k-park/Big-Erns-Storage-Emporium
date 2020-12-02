import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import Dashboard from './dashboards/Dashboard'
import LocationNew from './locations/LocationNew';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css'
import AdminDashboard from './dashboards/AdminDashboard';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <Header />
        <Route exact path ='/' component={Dashboard}/>
        <Route exact path ='/locations/new' component={LocationNew}/>
        <Route exact path='/admin' component={AdminDashboard} />
      </Router>
    )
  }
}

export default connect(null, actions)(App);
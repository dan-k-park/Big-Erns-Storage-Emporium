import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {

  state = { admin: false }

  componentDidMount() {
    // see export statement to see why fetchUser is available as props
    this.props.fetchUser()
  }

  // change dashboard depending on whether the user is an admin or tenant
  // renderContent() {
  //   switch (this.props.admin) {
  //     case true:
  //       return <AdminDashboard />;
  //     case false:
  //       return <UserDashboard />;
  //     default:
  //       return <UserDashboard />;
  //   }
  // }

  render() {
    return (
      <Router>
        <Header />
        <Route exact path ='/' component={AdminDashboard}/>
      </Router>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(App);
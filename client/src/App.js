import React, { Component } from 'react';
import HomePage from './components/HomePage'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      units: [],
      currentUser: {}
    }
  }

  render() {
    return (
      <HomePage />
    )
  }
}

export default App;

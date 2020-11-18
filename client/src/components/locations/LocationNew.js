import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import LocationForm from './LocationForm';
import LocationFormReview from './LocationFormReview';

class LocationNew extends Component {
  state = { showFormReview: false};

  componentDidMount() {
    // create something here that runs something in the backend to check if user is an admin
  }

  renderContent() {
    if (this.state.showFormReview) {
      return <LocationFormReview onCancel={() => this.setState({ showFormReview: false })} />
    }
    return <LocationForm onLocationSubmit={() => this.setState({ showFormReview: true })} />
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'locationForm'
})(LocationNew);
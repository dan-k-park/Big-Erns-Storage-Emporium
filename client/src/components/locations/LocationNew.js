import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions'
import LocationForm from './LocationForm';
import LocationFormReview from './LocationFormReview';

class LocationNew extends Component {
  state = { showFormReview: false};

  componentDidMount() {
    this.props.checkAdmin();
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

function mapStateToProps({ auth }) {
  return { auth } // identical key value pair { auth: auth } = { auth }
}

LocationNew = connect(
  mapStateToProps,
  actions
)(LocationNew)

export default reduxForm({
  form: 'locationForm'
})(withRouter(LocationNew));
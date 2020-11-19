import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions'
import LocationForm from './LocationForm';

const LocationFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    )
  })

  return (
    <div>
      <h5>Confirm Your Entries</h5>
      {reviewFields}
      <button onClick={onCancel}>
        Back
      </button>
      <button onClick={() => actions.submitLocation(formValues, history)}>
        Create Location
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return { formValues: state.form.locationForm.values }
}

export default connect(mapStateToProps, actions)(withRouter(LocationFormReview))
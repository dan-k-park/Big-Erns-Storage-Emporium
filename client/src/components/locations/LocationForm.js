import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import LocationField from './LocationField';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import formFields from './formFields';

class LocationForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return <Field key={name} component={LocationField} type='text' label={label} name={name} />
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onLocationSubmit)}>
          {this.renderFields()}
          <Link to='/'>Cancel</Link>
          <button type='submit'>Next</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'locationForm',
  destroyOnUnmount: false
})(LocationForm);
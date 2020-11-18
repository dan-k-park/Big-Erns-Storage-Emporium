import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import LocationField from './LocationField';
import { Container } from 'react-bootstrap';
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
      <Container>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to='/'>Cancel</Link>
          <button type='submit'>Next</button>
        </form>
      </Container>
    )
  }
}

export default reduxForm({
  form: 'locationForm',
  destroyOnUnmount: false
})(LocationForm);
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Container, Row, Col } from 'react-bootstrap';
import LocationField from './LocationField';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import formFields from './formFields';

class LocationForm extends Component {
  renderTextFields() {
    return _.map(formFields, ({ label, name }) => {
      return <Field key={name} component={LocationField} type='text' label={label} name={name} />
    })
  }

  // renderTextField() {
  //   <Form.Control />
  // }

  render() {
    return (
      <Container fluid={true}>
        <form onSubmit={this.props.handleSubmit(this.props.onLocationSubmit)}>
          <Row>
            <Col sm={6}>
              <Field
                label="Address Line 1"
                type="text"
                name="add1"
                component={LocationField}
              />
              <Field
                label="Address Line 2"
                type="text"
                name="add2"
                component={LocationField}
              />
              <Field
                label="Number of 25 sq ft Units"
                component={LocationField}
                type="number"
                name="twentyfive"
              />
              <Field
                label="Number of 75sq ft Units"
                type="number"
                name="seventyfive"
                component={LocationField}
              />
              <Field
                label="Number of 150sq ft Units"
                type="number"
                name="onefifty"
                component={LocationField}
              />
              <Link to='/'>Cancel</Link>
              <button type='submit'>Next</button>
            </Col>
            <Col sm={6} style={{ marginTop: '8%' }}>
              Google maps rendering
          </Col>
          </Row>
        </form>
      </Container>
    )
  }
}

export default reduxForm({
  form: 'locationForm',
  destroyOnUnmount: false
})(LocationForm);
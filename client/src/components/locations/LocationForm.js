import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Container, Row, Col } from 'react-bootstrap';
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
      <Container fluid={true}>
        <Row>
          <Col sm={6} style={{ marginTop: '8%' }}>
          <form onSubmit={this.props.handleSubmit(this.props.onLocationSubmit)}>
          {this.renderFields()}
          <Link to='/'>Cancel</Link>
          <button type='submit'>Next</button>
        </form>
          </Col>
          <Col sm={6} style={{ marginTop: '8%' }}>
            Google maps rendering
          </Col>
        </Row>
       
      </Container>
    )
  }
}

export default reduxForm({
  form: 'locationForm',
  destroyOnUnmount: false
})(LocationForm);
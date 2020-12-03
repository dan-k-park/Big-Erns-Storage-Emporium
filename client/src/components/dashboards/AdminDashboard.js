import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap';
import { fetchUnits, fetchTenants } from '../../actions';

class AdminDashboard extends Component {

  componentDidMount() {
    this.props.fetchUnits();
  }

  renderUnitInfo() {
    let rentedUnits = 0;
    this.props.units.forEach(unit => {
      if (unit.rented) {
        rentedUnits++
      }
    })
    return <ListGroup.Item>Units Rented {rentedUnits}/{this.props.units.length}</ListGroup.Item>
  }

  renderTenantInfo() {

  }

  render() {
    return (
      <ListGroup horizontal>
        <ListGroup.Item>Tenants</ListGroup.Item>
        <ListGroup.Item>{this.renderUnitInfo()}</ListGroup.Item>
        <ListGroup.Item>Outstanding Payments</ListGroup.Item>
      </ListGroup>
    )
  }
}

function mapStateToProps({ units }) {
  return { units };
}

export default connect(mapStateToProps, { fetchUnits })(AdminDashboard);
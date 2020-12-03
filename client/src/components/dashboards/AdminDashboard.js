import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap';
import { fetchUnits, fetchTenants } from '../../actions';

class AdminDashboard extends Component {

  componentDidMount() {
    this.props.fetchUnits();
    this.props.fetchTenants();
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
  return <ListGroup.Item>Tenants {this.props.tenants.length}</ListGroup.Item>
  }

  render() {
    return (
      <ListGroup horizontal>
        {this.renderTenantInfo()}
        {this.renderUnitInfo()}
        <ListGroup.Item>Outstanding Payments</ListGroup.Item>
      </ListGroup>
    )
  }
}

function mapStateToProps({ units, tenants }) {
  return { units, tenants };
}

export default connect(mapStateToProps, { fetchUnits, fetchTenants })(AdminDashboard);
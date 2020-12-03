import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, CardGroup, Card, Col, Row } from 'react-bootstrap';
import { Square } from 'react-bootstrap-icons';
import { fetchUnits, fetchTenants } from '../../actions';

class AdminDashboard extends Component {

  componentDidMount() {
    this.props.fetchUnits();
    this.props.fetchTenants();
  }

  renderUnitInfo() {
    return (
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            Units
          </Card.Title>
          <Card.Text>
            <Square />{this.props.units.length}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

  renderRentedUnitInfo() {
    let rentedUnits = 0;
    this.props.units.forEach(unit => {
      if (unit.rented) {
        rentedUnits++
      }
    })
    return (
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            Ongoing Rentals
          </Card.Title>
          <Card.Text>
            <Square />{rentedUnits}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

  renderTenantInfo() {
    return (
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            Tenants
          </Card.Title>
          <Card.Text>
            {this.props.tenants.length}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

  renderOutstandingPaymentInfo() {
    let outstandingPayments = 0;
    this.props.tenants.forEach(tenant => {
      if (tenant.hasRental && !tenant.hasPaid) {
        outstandingPayments++;
      }
    })
    return (
      <Card className="text-center">
        <Card.Body>
          <Card.Title>
            Outstanding Payments
          </Card.Title>
          <Card.Text>
            {outstandingPayments}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col>
        <CardGroup>
          {this.renderUnitInfo()}
          {this.renderTenantInfo()}
          {this.renderRentedUnitInfo()}
          
        </CardGroup>
          </Col>
          <Col>
        {this.renderOutstandingPaymentInfo()}
          </Col>

        </Row>
      </Container>
    )
  }
}

function mapStateToProps({ units, tenants }) {
  return { units, tenants };
}

export default connect(mapStateToProps, { fetchUnits, fetchTenants })(AdminDashboard);
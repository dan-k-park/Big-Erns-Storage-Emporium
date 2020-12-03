import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, CardGroup, Card, Col, Row } from 'react-bootstrap';
import { CashStack, ListCheck, PeopleFill, HouseDoorFill } from 'react-bootstrap-icons';
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
          <Card.Subtitle>
            Units
          </Card.Subtitle>
          <Card.Text>
            <HouseDoorFill className='icons' /><h3>{this.props.units.length}</h3>
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
          <Card.Subtitle>
            Ongoing Rentals
          </Card.Subtitle>
          <Card.Text>
            <ListCheck className='icons' /><h3>{rentedUnits}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

  renderTenantInfo() {
    return (
      <Card className="text-center">
        <Card.Body>
          <Card.Subtitle>
            Tenants
          </Card.Subtitle>
          <Card.Text>
            <PeopleFill className='icons' /><h3>{this.props.tenants.length}</h3>
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
          <Card.Subtitle>
            Outstanding Payments
          </Card.Subtitle>
          <Card.Text>
            <CashStack className='icons' /><h3>{outstandingPayments}</h3>
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
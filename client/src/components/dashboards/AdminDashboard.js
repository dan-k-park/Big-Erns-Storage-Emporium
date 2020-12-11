import React, { Component } from 'react';
import MapContainer from '../MapContainer';
import LocationNew from '../locations/LocationNew'
import StatsCard from './StatsCard';
import { connect } from 'react-redux';
import { Button, Container, CardGroup, Card, Col, Jumbotron, Row } from 'react-bootstrap';
import { CashStack, ListCheck, PeopleFill, HouseDoorFill } from 'react-bootstrap-icons';
import { fetchUnits, fetchTenants, fetchAdmins, fetchLocations } from '../../actions';

class AdminDashboard extends Component {

  componentDidMount() {
    this.props.fetchUnits();
    this.props.fetchTenants();
    this.props.fetchAdmins();
    this.props.fetchLocations();
  }

  renderUnitInfo() {
    return (
      <StatsCard icon={<HouseDoorFill className='icons'/>} name='Units' value={this.props.units.length} />
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
      <StatsCard icon={<ListCheck className='icons'/>} name='Ongoing Rentals' value={rentedUnits} />
    )
  }

  renderTenantInfo() {
    const tenantCount = this.props.tenants.length
    return (
      <StatsCard icon={<PeopleFill className='icons'/>} name='Tenants' value={tenantCount} />
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
      <StatsCard icon={<CashStack className='icons'/>} name='Outstanding Payments' value={outstandingPayments} />
    )
  }

  renderLocations() {
    return this.props.locations.map(location => {
      return (
      <Card key={location.id}>
        <Card.Header>{location.name}</Card.Header>
        <Card.Body>
          <Card.Title>{location.address}</Card.Title>
          <Card.Text>
            25sq ft Units: {location.num25}<br/>
            75sq ft Units: {location.num75}<br/>
            150sq ft Units: {location.num150}<br/>
          </Card.Text>
          <Button variant="primary">View More</Button>
        </Card.Body>
      </Card>
      )
    }
  )
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col md={8}>
            <CardGroup>
              {this.renderUnitInfo()}
              {this.renderTenantInfo()}
              {this.renderRentedUnitInfo()}

            </CardGroup>
          </Col>
          <Col md={4}>
            {this.renderOutstandingPaymentInfo()}
          </Col>
        </Row>
        <Row style={{ marginTop: '5%' }}>
          <Col md={6}>
            <Jumbotron fluid>
              <LocationNew />
            </Jumbotron>
          </Col>
          <Col md={6}>
            <Jumbotron fluid>
              {this.renderLocations()}
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron fluid>
              <MapContainer />
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps({ units, tenants, admins, locations }) {
  return { units, tenants, admins, locations };
}

export default connect(mapStateToProps, { fetchUnits, fetchTenants, fetchAdmins, fetchLocations })(AdminDashboard);
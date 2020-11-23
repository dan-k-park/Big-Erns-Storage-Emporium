import React, { Component } from 'react';
import Payments from './Payments'
import {
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap'
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        // don't show anything when the promise hasn't resolved
        return;
      case false:
        return (
          <NavDropdown.Item href="/auth/google">Login</NavDropdown.Item>
        )
      default:
        if (this.props.auth.admin) {
          return [
            <NavDropdown.Item key='1' href="/api/users">View Current Tenants</NavDropdown.Item>,
            <NavDropdown.Item key='2' href="/api/locations">View Facilities</NavDropdown.Item>,
            <NavDropdown.Item key='3' href="/locations/new">Add New Facilities</NavDropdown.Item>,
            <NavDropdown.Item key='6' href="/api/logout">Logout</NavDropdown.Item>
          ]
        } else {
          return [
            <NavDropdown.Item key='4' href="/reservations">View Reservations</NavDropdown.Item>,
            <NavDropdown.Item key='5' href="/api/bill"><Payments /></NavDropdown.Item>,
            <NavDropdown.Item key='6' href="/api/logout">Logout</NavDropdown.Item>
          ]
        }
    }
  }

  render() {
    return (
      <Navbar expand="lg" fixed="top" className='color-nav'>
        <Navbar.Brand as={Link} to='/' className='white-text'>Big Ern's Storage Emporium</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to='/units'>Browse Units</Nav.Link>
            <NavDropdown title="Your Account" id="basic-nav-dropdown">
              {this.renderContent()}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);
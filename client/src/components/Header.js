import React, { Component } from 'react';
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
        return [
        <NavDropdown.Item href="/api/reservations">View Reservations</NavDropdown.Item>,
        <NavDropdown.Item href="/api/bill">Pay Your Bill</NavDropdown.Item>,
        <NavDropdown.Item href="/api/logout">Logout</NavDropdown.Item>
      ]
    }
  }

  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand as={Link} to='/'>Big Ern's Storage Emporium</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to='/units'>Browse Units</Nav.Link>
            <NavDropdown title="Your Account" id="basic-nav-dropdown">
              {this.renderContent(0)}
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
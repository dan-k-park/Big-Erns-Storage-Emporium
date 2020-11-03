import React, { Component } from 'react';
import {
    Container,
    Dropdown,
    Menu
} from 'semantic-ui-react'
import { connect } from 'react-redux';

import { Link, withRouter } from "react-router-dom";
import './Navbar.css'

class Navbar extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        // don't show anything when the promise hasn't resolved
        return;
      case false:
        return (
          <li><a href='/auth/google'>Login with Google</a></li>
        )
      default:
        return <li><a href='/api/logout'>Logout</a></li>
    }
  }

  render() {
    return (
      <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={Link} to='/' header position='left'>
          Big Ern's Storage Emporium
        </Menu.Item>

        <Dropdown item simple text='My Account'>
          <Dropdown.Menu>
            <Dropdown.Item>{this.renderContent()}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Navbar);
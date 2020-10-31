import React from 'react';
import {
    Container,
    Dropdown,
    Menu
} from 'semantic-ui-react'
import { Link, withRouter } from "react-router-dom";
import './Navbar.css'

const Navbar = props => {

    return (
      <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={Link} to='/' header position='left'>
          Big Ern's Storage Emporium
        </Menu.Item>

        <Dropdown item simple text='My Account'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/login'>Login</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
    )
}

export default Navbar;
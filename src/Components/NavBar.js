import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Grid , Col , Row } from 'react-bootstrap';
import './NavBar.css';

class NavBar extends Component {
    render() {
    return (
<Navbar inverse fixedTop collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand className='image'>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Home
      </NavItem>
      <NavDropdown eventKey={3} title="" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      )
    }
}

export default NavBar;

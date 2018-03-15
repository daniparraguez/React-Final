import React, { Component } from 'react';

import logo from './logo.svg';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Grid , Col , Row } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (

<Navbar inverse fixedTop collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <Image src="./Film-icon.png" rounded />
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Grid>
  <Row>
    <Col xs={6} md={4}>
      <Image src="Film-icon.png" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="/thumbnail.png" circle />
    </Col>
    <Col xs={6} md={4}>
      <Image src="/thumbnail.png" thumbnail />
    </Col>
  </Row>
</Grid>

    );
  }
}

export default App;

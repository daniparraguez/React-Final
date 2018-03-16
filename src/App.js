import React, { Component } from 'react';
import firebase from 'firebase';
import Header from './Components/Header';
import Search from './Components/Search';
import logo from './logo.svg';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  state = {
    user: null
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/plus.login')

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(result => console.log('Te has desconectado correctamente'))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  render() {
    return (
<Navbar  className='este' inverse collapseOnSelect>
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
        <div>
          <Header
            appName='React-Final'
            user={this.state.user}
            onAuth={this.handleAuth}
            onLogout={this.handleLogout}
          />
        </div>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default App;

import React, { Component } from 'react';
import firebase from 'firebase';
import Search from './Components/Search';
import { Thumbnail, Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Grid , Col , Row } from 'react-bootstrap';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import NewMovies from './Components/NewMovies';
import Footer from './Components/Footer.js';
import './Film-icon.png';
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
<div className="back">
<NavBar />
<Grid>
  <Row className='first' >
    <Col xs={12}>
              <Header
            user={this.state.user}
            onAuth={this.handleAuth}
            onLogout={this.handleLogout}
          />
    </Col>
  </Row>
  <Row className='second' >
    <Col xs={12}>
      <Search />
    </Col>
  </Row>
  <Row className='third'>
    <Col xs={12}>
      <NewMovies />
    </Col>
  </Row>
  <Row>
    <Col xs={12}>
    <Footer />
    </Col>
  </Row>
</Grid>
</div>
    );
  }
}

export default App;

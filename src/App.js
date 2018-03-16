import React, { Component } from 'react';
import firebase from 'firebase';
import Search from './Components/Search';
import Footer from './Components/Footer';
import { Thumbnail, Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Grid , Col , Row } from 'react-bootstrap';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import NewMovies from './Components/NewMovies';
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
<div>
<NavBar />
<Grid>
  <Row className='first' >
    <Col xs={12}>
              <Header
            user={this.state.user}
            onAuth={this.handleAuth}
            onLogout={this.handleLogout}
          />
      <Image src="Film-icon.png" rounded />
    </Col>
  </Row>
  <Row>
    <Col xs={12}>
      <Search />
    </Col>
    <Col xs={12}>
      <Image src="/thumbnail.png" thumbnail />
      <Footer />
      <NewMovies />
    </Col>
  </Row>
</Grid>
</div>
    );
  }
}

export default App;

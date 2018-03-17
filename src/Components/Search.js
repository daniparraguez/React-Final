import React, { Component } from 'react';
import { Navbar, Nav, FormControl, FormGroup, Button } from 'react-bootstrap';
import './Search.css';

class Search extends Component {
  render() {
    return(
    <div className='Search'>
      <Navbar inverse>
   <Navbar.Header>
     <Navbar.Brand>
       <a href="#home"></a>
     </Navbar.Brand>
     <Navbar.Toggle />
   </Navbar.Header>
   <Navbar.Collapse>
     <Navbar.Form pullRigth>
       <FormGroup>
         <FormControl type="text" placeholder="Search" />
       </FormGroup>{' '}
       <Button type="submit">Search</Button>
     </Navbar.Form>
   </Navbar.Collapse>
 </Navbar>
    </div>
    );
  }
}

export default Search;

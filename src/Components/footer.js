import React, { Component } from 'react';
import { Button, ButtonToolbar, ButtonGroup, Glyphicon } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return(
    <div className='Footer'>
    <ul className="changeone">
      <li><a><Glyphicon glyph="globe" /> HDC</a></li>
      <li><a href="_blank">Terms of Use</a> </li>
      <li><a href="_blank">Legal Notices</a> </li>
      <li><a href="_blank">Privacy Policy</a> </li>
    </ul>
    <ul className="changeone">
      <li><a><Glyphicon glyph="globe" /> HDC </a></li>
      <li><a href="_blank">Privacy Policy</a> </li>
      <li><a href="_blank">Legal Notices</a> </li>
      <li><a href="_blank">Terms of Use</a> </li>
    </ul>
    <ul className="changeone">
      <li><a><Glyphicon glyph="globe" /> HDC</a></li>
      <li><a href="_blank">Legal Notices</a> </li>
      <li><a href="_blank">Privacy Policy</a> </li>
      <li><a href="_blank">Terms of Use</a> </li>
    </ul>
<div className="change">
  <Glyphicon glyph="thumbs-up" /> Me Gusta
    <Glyphicon glyph="bell" /> Notificación
    <Glyphicon glyph="heart-empty" /> Me Encanta

<p>HDC & © Ltd. All Rights Reserved</p>
</div>
</div>
    );
  }
}
 export default Footer;


import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { NavLink } from'react-router-dom';

// class Nav extends Component {
//
// }



var Navigation = (props) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">React Weather App</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem href="/">Get Weather</NavItem>
        <NavItem href="about">About</NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;

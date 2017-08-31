import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { IndexLink, Link } from'react-router';

// class Nav extends Component {
//
// }



var Navigation = (props) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/">React Weather App</IndexLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem>
          <IndexLink to="/">Get Weather</IndexLink>
        </NavItem>
        <NavItem>
          <Link to="about">About</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;

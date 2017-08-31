import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';
import { Row, Column } from 'react-bootstrap';

import Weather from 'Weather';
import About from 'About';
import Navigation from 'Navigation'

var Main = (props) => {
  return (
    <div>
      <Navigation/>
        <div className="md-3">
          <Route className=""  path="/" component={Weather}/>

          <Route path="/about" component={About}/>

      </div>
    </div>
  );
}

module.exports = Main;

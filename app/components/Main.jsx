import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';
import { Grid, Row, Column } from 'react-bootstrap';

import Weather from 'Weather';
import About from 'About';
import Navigation from 'Navigation'

var Main = (props) => {
  return (
    <div>
      <Navigation/>
        <Grid>
          <Row>
            <Route path="/" component={Weather}/>
          </Row>
          <Row>
            <Route path="about" component={About}/>
          </Row>
        </Grid>
      </div>
  );
}

export default Main;

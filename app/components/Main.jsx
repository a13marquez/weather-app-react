import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router';
import { Grid, Row, Column } from 'react-bootstrap';


import Navigation from 'Navigation'

var Main = (props) => {
  return (
    <div>
      <Navigation/>
        <Grid>
          <Row>
            {props.children}
          </Row>
        </Grid>
      </div>
  );
}

export default Main;

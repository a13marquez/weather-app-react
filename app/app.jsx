import React from 'react' ;
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'



import Main from 'Main';
import Weather from 'Weather';
import About from 'About';

import $ from  'jquery';

//App css
import 'style-loader!css-loader!sass-loader!./styles/app.scss';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

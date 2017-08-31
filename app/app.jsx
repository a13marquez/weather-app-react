import React from 'react' ;
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'


import Main from 'Main';

import $ from  'jquery';

//App css
import 'style-loader!css-loader!sass-loader!./styles/app.scss';

const customHistory = createBrowserHistory();
ReactDOM.render(
  <Router history={customHistory}>
      <Main/>
  </Router>,
  document.getElementById('app')
);

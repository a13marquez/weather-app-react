import React from 'react' ;
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'



import Main from 'Main';

import $ from  'jquery';

//App css
import 'style-loader!css-loader!sass-loader!./styles/app.scss';


ReactDOM.render(
  <BrowserRouter>
      <Main/>
  </BrowserRouter>,
  document.getElementById('app')
);

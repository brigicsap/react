import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main/Main';

import { normalize } from 'glamor/reset';
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Main} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

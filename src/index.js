import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main/Main';
import Album from './components/Album/Album';

import { normalize } from 'glamor/reset';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/album' component={Album} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

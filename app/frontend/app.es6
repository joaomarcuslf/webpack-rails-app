/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App.jsx';
import TodoPage from './components/TodoPage/TodoPage.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TodoPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);

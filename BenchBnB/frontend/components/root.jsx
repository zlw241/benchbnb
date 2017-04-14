import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } />
      </Router>
    </Provider>
  );
};

export default Root;


// <Route path="/signup" component={ SessionFormContainer } />
// <Route path="/login" component={ SessionFormContainer } />

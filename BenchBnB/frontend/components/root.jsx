import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import GreetingContainer from './greeting/greeting';
import SessionFormContainer from './session/session_form_container';


const Root = ({ store }) => {

  function _redirectIfLoggedIn(nextState, replace) {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  }

  function _ensureLoggedIn(nextState, replace) {
    console.log(store.getState().session.currentUser);
    if (store.getState().session.currentUser) {
      replace('/login');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="signup" onEnter={_redirectIfLoggedIn} component={ SessionFormContainer }/>
          <Route path="login" onEnter={_redirectIfLoggedIn} component={ SessionFormContainer }/>
        </Route>

      </Router>
    </Provider>
  );
};

export default Root;


// <Route path="/signup" component={ SessionFormContainer } />
// <Route path="/login" component={ SessionFormContainer } />

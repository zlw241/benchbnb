import React from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {

  const userLoggedIn = (user) => {
    if (user) {
      return true
    }
    return false
  }
  
  return {
    loggedIn: userLoggedIn(state.session.currentUser),
    errors: state.session.errors,
    formType: ownProps.location.pathname
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (formType, data) => {
      if (formType === '/login') {
        return dispatch(login(data));
      } else if (formType === '/signup') {
        return dispatch(signup(data));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

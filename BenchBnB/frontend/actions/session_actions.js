export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => (dispatch) => {
  return APIUtil.login(user).then(
    res => dispatch(receiveCurrentUser(res)),
    err => console.log(err));
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user).then(
    res => dispatch(receiveCurrentUser(res)),
    err => console.log(err));
};

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null))
  );
};

window.login = login;
window.signup = signup;

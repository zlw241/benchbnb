import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const default_state = {
  current_user: null,
  errors: []
};

const SessionReducer = (state = default_state, action) => {
  Object.freeze();
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      const newState = Object.assign({}, default_state);
      newState.current_user = action.user;
      return newState;
    }
    case RECEIVE_ERRORS: {
      const newState = Object.assign({}, default_state);
      newState.errors = action.errors;
      return newState;
    }
    default:
      return state;
  }
};

export default SessionReducer;

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const default_state = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = default_state, action) => {
  Object.freeze();
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      const newState = Object.assign({}, default_state);
      newState.currentUser = action.currentUser;
      return newState;
    }
    case RECEIVE_ERRORS: {
      debugger
      const newState = Object.assign({}, default_state);
      newState.errors = action.errors;

      return newState;
    }
    default:
      return state;
  }
};

export default SessionReducer;

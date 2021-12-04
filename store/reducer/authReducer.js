import {
  LOGIN,
  LOGOUT,
  REGISTER,
  ANSWER_PROCESSING_START,
} from '../actions/types';

const INIT_STATE = {
  user: null,
  register: false,
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, user: action.payload, register: true };
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    case ANSWER_PROCESSING_START:
      return { ...state, register: false };
    default:
      return state;
  }
};

export default authReducer;

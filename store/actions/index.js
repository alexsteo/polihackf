import {
  LOGIN,
  LOGOUT,
  REGISTER,
  ANSWER_PROCESSING_START,
  ANSWER_PROCESSING_DONE,
} from './types';

export const register = user => {
  return {
    type: REGISTER,
    payload: user,
  };
};

export const login = user => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const answerProcessing = () => {
  return {
    type: ANSWER_PROCESSING_START,
  };
};

export const answerProcessingDone = () => {
  return {
    type: ANSWER_PROCESSING_DONE,
  };
};

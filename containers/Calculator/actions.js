import {
  ADD_DIGIT,
  REMOVE_DIGIT,
  INVERT_SIGN,
  CLEAR,
  CLEAR_EVERYTHING,
  SET_OPERATOR,
  CALCULATE,
  SET_ERROR,
} from './constants';

export const addDigit = digit => ({
  type: ADD_DIGIT,
  payload: digit,
});

export const removeDigit = () => ({
  type: REMOVE_DIGIT,
});

export const invertSign = () => ({
  type: INVERT_SIGN,
});

export const clear = () => ({
  type: CLEAR,
});

export const clearEverything = () => ({
  type: CLEAR_EVERYTHING,
});

export const setOperator = operator => ({
  type: SET_OPERATOR,
  payload: operator,
});

export const setError = () => ({
  type: SET_ERROR,
});

export const calculate = () => ({
  type: CALCULATE,
});

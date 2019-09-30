// @flow

import {
  ADD_DIGIT,
  REMOVE_DIGIT,
  INVERT_SIGN,
  CLEAR,
  CLEAR_EVERYTHING,
  SET_OPERATOR,
  CALCULATE,
  SET_ERROR,
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  DIVISION,
} from './constants';
import {
  formatDisplayedValue,
  getValueFromDisplay,
} from './utils';

export const initialState = {
  displayValue: '0',
  minus: false,
  dotIsSet: false,
  operator: null,
  result: 0,
  error: false,
};

const emptyDisplay = {
  displayValue: '0',
  minus: false,
  dotIsSet: false,
};

export type State = {
  displayValue: string,
  minus: bool,
  dotIsSet: bool,
  operator: ?string,
  result: number,
  error: bool,
};

const reducer = (state: State = initialState, action: {type: string, payload: any}): State => {
  switch (action.type) {
    case ADD_DIGIT: {
      let { displayValue, dotIsSet } = state;
      const digit = action.payload;

      if (digit === '.') {
        if (dotIsSet) {
          return state;
        }
        dotIsSet = true;
      }

      if (displayValue === '0' && digit !== '.') {
        displayValue = digit;
      } else {
        displayValue += digit;
      }

      displayValue = formatDisplayedValue(displayValue);
      if (displayValue) {
        return {
          ...state,
          displayValue,
          dotIsSet,
        };
      } else {
        return {
          ...state,
          error: true,
        };
      }
    }
    case INVERT_SIGN:
      return {
        ...state,
        minus: !state.minus,
      };
    case CLEAR:
      return {
        ...state,
        ...emptyDisplay,
      };
    case CLEAR_EVERYTHING:
      return initialState;
    case SET_OPERATOR: {
      const result = getValueFromDisplay(state);
      return {
        ...state,
        ...emptyDisplay,
        operator: action.payload,
        result,
      };
    }
    case SET_ERROR:
      return {
        ...state,
        error: true,
      };

    case REMOVE_DIGIT: {
      let { displayValue, dotIsSet } = state;

      if (displayValue.slice(-1) === '.') {
        dotIsSet = false;
      }

      displayValue = displayValue.slice(0, -1);
      if (displayValue) {
        return {
          ...state,
          displayValue,
          dotIsSet,
        };
      } else {
        return {
          ...state,
          ...emptyDisplay,
        };
      }
    }
    case CALCULATE: {
      let { result, operator } = state;
      const arg = getValueFromDisplay(state);

      switch (operator) {
        case ADDITION: {
          result += arg;
          break;
        }
        case SUBTRACTION: {
          result -= arg;
          break;
        }
        case MULTIPLICATION: {
          result *= arg;
          break;
        }
        case DIVISION: {
          if (!arg) {
            return {
              ...state,
              error: true,
            };
          }
          result /= arg;
          break;
        }
        default: {
          result = arg;
        }
      }

      operator = null;
      const minus = result < 0;
      let displayValue = (result > 0) ? result.toString() : (-result).toString();
      displayValue = formatDisplayedValue(displayValue);

      if (displayValue) {
        return {
          ...state,
          operator,
          result,
          minus,
          displayValue,
        };
      } else {
        return {
          ...state,
          error: true,
        };
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;

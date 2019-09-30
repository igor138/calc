// @flow

import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Keyboard from '../Keyboard';
import Display from '../Display';
import s from './styles';
import {
  addDigit,
  removeDigit,
  invertSign,
  clear,
  setOperator,
  calculate,
  clearEverything,
} from './actions';
import {
  selectDisplayValue,
  selectMinus,
  selectError,
  selectResult,
} from './selectors';
import type State from './reducers';

type Props = {
  displayValue: string,
  minus: bool,
  error: bool,
  result: string,
  handleAddDigit: (digit: string) => void,
  handleRemoveDigit: () => void,
  handleInvertSign: () => void,
  handleClear: () => void,
  handleSetOperator: (operator: string) => void,
  handleCalculate: () => void,
  handleClearEverything: () => void,
};

const Calculator = ({
  displayValue,
  minus,
  error,
  result,
  handleAddDigit,
  handleRemoveDigit,
  handleInvertSign,
  handleClear,
  handleSetOperator,
  handleCalculate,
  handleClearEverything,
}: Props) => (
  <View style={s.calculator}>
    <Display
      displayValue={displayValue}
      minus={minus}
      error={error}
      result={result}
    />
    <Keyboard
      handleAddDigit={handleAddDigit}
      handleRemoveDigit={handleRemoveDigit}
      handleInvertSign={handleInvertSign}
      handleClear={handleClear}
      handleSetOperator={handleSetOperator}
      handleCalculate={handleCalculate}
      handleClearEverything={handleClearEverything}
    />
  </View>
);

type StateToProps = {
  displayValue: (state: State) => string,
  minus: (state: State) => string,
  error: (state: State) => string,
  result: (state: State) => number,
};

const mapStateToProps = (state: State): StateToProps => ({
  displayValue: selectDisplayValue(state),
  minus: selectMinus(state),
  error: selectError(state),
  result: selectResult(state),
});

const mapDispatchToProps = {
  handleAddDigit: addDigit,
  handleRemoveDigit: removeDigit,
  handleInvertSign: invertSign,
  handleClear: clear,
  handleSetOperator: setOperator,
  handleCalculate: calculate,
  handleClearEverything: clearEverything,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

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
  onAddDigit: (digit: string) => void,
  onRemoveDigit: () => void,
  onInvertSign: () => void,
  onClear: () => void,
  onSetOperator: (operator: string) => void,
  onCalculate: () => void,
  onClearEverything: () => void,
};

const Calculator = ({
  displayValue,
  minus,
  error,
  result,
  onAddDigit,
  onRemoveDigit,
  onInvertSign,
  onClear,
  onSetOperator,
  onCalculate,
  onClearEverything,
}: Props) => (
  <View style={s.calculator}>
    <Display
      displayValue={displayValue}
      minus={minus}
      error={error}
      result={result}
    />
    <Keyboard
      onAddDigit={onAddDigit}
      onRemoveDigit={onRemoveDigit}
      onInvertSign={onInvertSign}
      onClear={onClear}
      onSetOperator={onSetOperator}
      onCalculate={onCalculate}
      onClearEverything={onClearEverything}
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
  onAddDigit: addDigit,
  onRemoveDigit: removeDigit,
  onInvertSign: invertSign,
  onClear: clear,
  onSetOperator: setOperator,
  onCalculate: calculate,
  onClearEverything: clearEverything,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

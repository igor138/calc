// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import Keyboard from '../Keyboard';
import Display from '../Display';
import s from './styles';
import * as actions from './actions';

type Props = {
  displayValue: string,
  minus: bool,
  error: bool,
  addDigit: (digit: string) => void,
  removeDigit: () => void,
  invertSign: () => void,
  clear: () => void,
  setOperator: (operator: string) => void,
  calculate: () => void,
  clearEverything: () => void,
};

const Calculator = ({
  displayValue,
  minus,
  error,
  addDigit,
  removeDigit,
  invertSign,
  clear,
  setOperator,
  calculate,
  clearEverything,
}: Props) => (
  <View style={s.calculator}>
    <Display
      displayValue={displayValue}
      minus={minus}
      error={error}
    />
    <Keyboard
      addDigit={addDigit}
      removeDigit={removeDigit}
      invertSign={invertSign}
      clear={clear}
      setOperator={setOperator}
      calculate={calculate}
      clearEverything={clearEverything}
    />
  </View>
);

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

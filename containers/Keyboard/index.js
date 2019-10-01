// @flow
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Button from './components/Button';
import s from './styles';
import {
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  DIVISION,
} from '../Calculator/constants';

import {
  addDigit,
  removeDigit,
  invertSign,
  clear,
  setOperator,
  calculate,
  clearEverything,
} from './actions';

type Props = {
  onAddDigit: (digit: string) => void,
  onInvertSign: () => void,
  onClear: () => void,
  onRemoveDigit: () => void,
  onCalculate: () => void,
  onSetOperator: (operator: string) => void,
  onClearEverything: () => void,
};

const Keyboard = ({
  onAddDigit,
  onInvertSign,
  onClear,
  onRemoveDigit,
  onCalculate,
  onSetOperator,
  onClearEverything,
}: Props) => (
  <View style={s.keyboard}>
    <View style={s.column}>
      <Button label="C" clickHandler={onClear} />
      <Button label="7" clickHandler={() => onAddDigit('7')} />
      <Button label="4" clickHandler={() => onAddDigit('4')} />
      <Button label="1" clickHandler={() => onAddDigit('1')} />
      <Button label="0" clickHandler={() => onAddDigit('0')} />
    </View>
    <View style={s.column}>
      <Button label="<" clickHandler={onRemoveDigit} />
      <Button label="8" clickHandler={() => onAddDigit('8')} />
      <Button label="5" clickHandler={() => onAddDigit('5')} />
      <Button label="2" clickHandler={() => onAddDigit('2')} />
      <Button label="." clickHandler={() => onAddDigit('.')} />
    </View>
    <View style={s.column}>
      <Button label="CE" clickHandler={onClearEverything} />
      <Button label="9" clickHandler={() => onAddDigit('9')} />
      <Button label="6" clickHandler={() => onAddDigit('6')} />
      <Button label="3" clickHandler={() => onAddDigit('3')} />
      <Button label="+/-" clickHandler={onInvertSign} />
    </View>
    <View style={s.column}>
      <Button label="/" clickHandler={() => onSetOperator(DIVISION)} />
      <Button label="x" clickHandler={() => onSetOperator(MULTIPLICATION)} />
      <Button label="-" clickHandler={() => onSetOperator(SUBTRACTION)} />
      <Button label="+" clickHandler={() => onSetOperator(ADDITION)} />
      <Button label="=" clickHandler={onCalculate} />
    </View>
  </View>
);

const mapDispatchToProps = {
  onAddDigit: addDigit,
  onRemoveDigit: removeDigit,
  onInvertSign: invertSign,
  onClear: clear,
  onSetOperator: setOperator,
  onCalculate: calculate,
  onClearEverything: clearEverything,
};

export default connect(null, mapDispatchToProps)(Keyboard);

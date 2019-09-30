// @flow
import React from 'react';
import { View } from 'react-native';
import Button from './components/Button';
import s from './styles';
import {
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  DIVISION,
} from '../Calculator/constants';

type Props = {
  handleAddDigit: (digit: string) => void,
  handleInvertSign: () => void,
  handleClear: () => void,
  handleRemoveDigit: () => void,
  handleCalculate: () => void,
  handleSetOperator: (operator: string) => void,
  handleClearEverything: () => void,
};

const Keyboard = ({
  handleAddDigit,
  handleInvertSign,
  handleClear,
  handleRemoveDigit,
  handleCalculate,
  handleSetOperator,
  handleClearEverything,
}: Props) => (
  <View style={s.keyboard}>
    <View style={s.column}>
      <Button label="C" clickHandler={handleClear} />
      <Button label="7" clickHandler={() => handleAddDigit('7')} />
      <Button label="4" clickHandler={() => handleAddDigit('4')} />
      <Button label="1" clickHandler={() => handleAddDigit('1')} />
      <Button label="0" clickHandler={() => handleAddDigit('0')} />
    </View>
    <View style={s.column}>
      <Button label="<" clickHandler={handleRemoveDigit} />
      <Button label="8" clickHandler={() => handleAddDigit('8')} />
      <Button label="5" clickHandler={() => handleAddDigit('5')} />
      <Button label="2" clickHandler={() => handleAddDigit('2')} />
      <Button label="." clickHandler={() => handleAddDigit('.')} />
    </View>
    <View style={s.column}>
      <Button label="CE" clickHandler={handleClearEverything} />
      <Button label="9" clickHandler={() => handleAddDigit('9')} />
      <Button label="6" clickHandler={() => handleAddDigit('6')} />
      <Button label="3" clickHandler={() => handleAddDigit('3')} />
      <Button label="+/-" clickHandler={handleInvertSign} />
    </View>
    <View style={s.column}>
      <Button label="/" clickHandler={() => handleSetOperator(DIVISION)} />
      <Button label="x" clickHandler={() => handleSetOperator(MULTIPLICATION)} />
      <Button label="-" clickHandler={() => handleSetOperator(SUBTRACTION)} />
      <Button label="+" clickHandler={() => handleSetOperator(ADDITION)} />
      <Button label="=" clickHandler={handleCalculate} />
    </View>
  </View>
);

export default Keyboard;

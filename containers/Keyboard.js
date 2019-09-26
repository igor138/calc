import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/Button';

type Props = {
  addDigit: (digit :string) => void,
  invertSign: () => void,
  clear: () => void,
  removeDigit: () => void,
  calculate: () => void,
  setOperator: () => void,
  clearEverything: () => void,
};

const style = StyleSheet.create({
  keyboard: {
    flex: 3,
    backgroundColor: '#777',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  column: {
    flex: 1,
  },
});

const Keyboard = ({ addDigit, invertSign, clear, removeDigit, calculate, setOperator, clearEverything }: Props) => (
  <View style={style.keyboard}>
    <View style={style.column}>
      <Button label="C" clickHandler={clear} />
      <Button label="7" clickHandler={() => addDigit('7')} />
      <Button label="4" clickHandler={() => addDigit('4')} />
      <Button label="1" clickHandler={() => addDigit('1')} />
      <Button label="0" clickHandler={() => addDigit('0')} />
    </View>
    <View style={style.column}>
      <Button label="<" clickHandler={removeDigit} />
      <Button label="8" clickHandler={() => addDigit('8')} />
      <Button label="5" clickHandler={() => addDigit('5')} />
      <Button label="2" clickHandler={() => addDigit('2')} />
      <Button label="." clickHandler={() => addDigit('.')} />
    </View>
    <View style={style.column}>
      <Button label="CE" clickHandler={clearEverything} />
      <Button label="9" clickHandler={() => addDigit('9')} />
      <Button label="6" clickHandler={() => addDigit('6')} />
      <Button label="3" clickHandler={() => addDigit('3')} />
      <Button label="+/-" clickHandler={invertSign} />
    </View>
    <View style={style.column}>
      <Button label="/" clickHandler={() => setOperator('DIVISION')} />
      <Button label="x" clickHandler={() => setOperator('MULTIPLICATION')} />
      <Button label="-" clickHandler={() => setOperator('SUBTRACTION')} />
      <Button label="+" clickHandler={() => setOperator('ADDITION')} />
      <Button label="=" clickHandler={calculate} />
    </View>
  </View>
);

export default Keyboard;

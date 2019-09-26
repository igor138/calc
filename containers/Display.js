// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Digit from '../components/Digit';
import ServiceSymbols from '../components/ServiceSymbols';

const style = StyleSheet.create({
  display: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#aaa',
  },
});

type Props = {
  displayValue: string,
  minus: bool,
  error: bool,
};

const Display = ({ displayValue, minus, error }: Props) => {
  const justDigits = displayValue.replace('.', '');
  const dotPosition = displayValue.indexOf('.');
  const length = justDigits.length;

  const digits = [];
  for (let i = 1; i <= 8; i += 1) {
    let digit = '';
    let dot = false;
    if (i <= length) {
      digit = justDigits[length - i];
      dot = (dotPosition + i) === (length + 1);
    }
    digits.unshift(<Digit key={i} digit={digit} dot={dot} />);
  }
  return (
    <View style={style.display}>
      <ServiceSymbols error={error} minus={minus} />
      {digits}
    </View>
  );
};

export default Display;

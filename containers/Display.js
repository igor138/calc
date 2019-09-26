// @flow
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Digit from '../components/Digit';
import ServiceSymbols from '../components/ServiceSymbols';

const style = StyleSheet.create({
  display: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#aaa',
  },
  debugDisplay: {
    textAlign: 'center',
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
    <View style={style.container}>
      <Text style={style.debugDisplay}>
        {displayValue}
      </Text>
      <View style={style.display}>
        <ServiceSymbols error={error} minus={minus} />
        {digits}
      </View>
    </View>
  );
};

export default Display;

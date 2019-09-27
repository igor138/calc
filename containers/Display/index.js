// @flow
import React from 'react';
import { View, Text } from 'react-native';
import Digit from '../../components/Digit';
import ServiceSymbols from '../../components/ServiceSymbols';
import s from './styles';

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
    <View style={s.container}>
      <Text style={s.debugDisplay}>
        {displayValue}
      </Text>
      <View style={s.display}>
        <ServiceSymbols error={error} minus={minus} />
        {digits}
      </View>
    </View>
  );
};

export default Display;

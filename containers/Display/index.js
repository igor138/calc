// @flow
import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Digit from './components/Digit';
import ServiceSymbols from './components/ServiceSymbols';
import s from './styles';
import {
  selectDisplayValue,
  selectMinus,
  selectError,
  selectResult,
} from './selectors';
import type State from '../Keyboard/reducers';

type Props = {
  displayValue: string,
  minus: bool,
  error: bool,
  result: string,
};

const Display = ({ displayValue, minus, error, result }: Props) => {
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
      <View style={s.debugContainer}>
        <View style={s.debugTopMargin} />
        <Text style={s.debugDisplay}>
          {result}{'  '}
        </Text>
      </View>
      <View style={s.display}>
        <ServiceSymbols error={error} minus={minus} />
        {digits}
      </View>
    </View>
  );
};

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
export default connect(mapStateToProps)(Display);

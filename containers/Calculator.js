// @flow
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Keyboard from './Keyboard';
import Display from './Display';

const style = StyleSheet.create({
  calculator: {
    flex: 1,
    flexDirection: 'column',
  },
});

type Props = {};

type State = {
  displayValue: string,
  minus: bool,
  dotIsSet: bool,
  operator: ?string,
  result: number,
  error: bool
};

class Calculator extends Component <Props, State> {
  constructor() {
    super();
    this.state = {
      displayValue: '0',
      minus: false,
      dotIsSet: false,
      operator: null,
      result: 0,
      error: false,
    };
  }

  formatDisplayedValue = (displayValue: string) => {
    const maxDigits = 8;
    const dotPosition = displayValue.indexOf('.');

    if (dotPosition === -1) {
      if (displayValue.length > maxDigits) {
        return null;
      }
      return displayValue;
    } else if (dotPosition > maxDigits) {
      return null;
    } else if (displayValue.length > maxDigits + 1) {
      return displayValue.slice(0, maxDigits + 1);
    }
    return displayValue;
  }

  addDigit = (digit: string): ?string => {
    let { displayValue, dotIsSet } = this.state;

    if (digit === '.') {
      if (dotIsSet) {
        return;
      }
      dotIsSet = true;
    }
    if (displayValue === '0' && digit !== '.') {
      displayValue = digit;
    } else {
      displayValue += digit;
    }

    displayValue = this.formatDisplayedValue(displayValue);
    if (displayValue) {
      this.setState({ displayValue, dotIsSet });
    } else {
      this.setError();
    }
  }

  invertSign = () => {
    const { minus } = this.state;
    this.setState({ minus: !minus });
  }

  clear = () => {
    this.setState({
      displayValue: '0',
      minus: false,
      dotIsSet: false,
    });
  }

  clearEverything = () => {
    this.setState({
      displayValue: '0',
      minus: false,
      dotIsSet: false,
      operator: null,
      result: 0,
      error: false,
    });
  }

  removeDigit = () => {
    let { displayValue, dotIsSet } = this.state;

    if (displayValue.slice(-1) === '.') {
      dotIsSet = false;
    }

    displayValue = displayValue.slice(0, -1);
    if (displayValue) {
      this.setState({ displayValue, dotIsSet });
    } else {
      this.clear();
    }
  }

  setOperator = (operator: string) => {
    const result = this.getValueFromDisplay();
    this.setState({ operator, result });
    this.clear();
  }

  getValueFromDisplay = (): number => {
    const { displayValue, minus } = this.state;
    return parseFloat(displayValue) * (minus ? -1 : 1);
  }

  calculate = () => {
    let { result, operator } = this.state;
    const arg = this.getValueFromDisplay();

    switch (operator) {
      case 'ADDITION': {
        result += arg;
        break;
      }
      case 'SUBTRACTION': {
        result -= arg;
        break;
      }
      case 'MULTIPLICATION': {
        result *= arg;
        break;
      }
      case 'DIVISION': {
        if (!arg) {
          this.setError();
          return;
        }
        result /= arg;
        break;
      }
      default: {
        result = arg;
      }
    }

    operator = null;
    const minus = result < 0;
    let displayValue = (result > 0) ? result.toString() : (-result).toString();
    displayValue = this.formatDisplayedValue(displayValue);

    if (displayValue) {
      this.setState({ operator, result, minus, displayValue });
    } else {
      this.setError();
    }
  }

  setError = () => {
    this.setState({ error: true });
  }

  render() {
    const { displayValue, minus, error } = this.state;
    return (
      <View style={style.calculator}>
        <Display displayValue={displayValue} minus={minus} error={error} />
        <Keyboard
          addDigit={this.addDigit}
          removeDigit={this.removeDigit}
          invertSign={this.invertSign}
          clear={this.clear}
          setOperator={this.setOperator}
          calculate={this.calculate}
          clearEverything={this.clearEverything}
        />
      </View>
    );
  }
}

export default Calculator;

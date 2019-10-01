// @flow

import React from 'react';
import { View } from 'react-native';
import Keyboard from '../Keyboard';
import Display from '../Display';
import s from './styles';

const Calculator = () => (
  <View style={s.calculator}>
    <Display />
    <Keyboard />
  </View>
);

export default Calculator;

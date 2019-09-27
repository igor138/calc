// @flow
import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

type Props = {
  digit: string,
  dot: bool,
};

const Digit = ({ digit, dot }: Props) => (
  <View style={s.digit}>
    <Text style={s.text}>
      {digit}
    </Text>
    {dot && <Text style={s.text}>.</Text>}
  </View>
);

export default Digit;

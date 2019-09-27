// @flow
import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

type Props = {
  minus: bool,
  error: bool,
};

const ServiceSymbols = ({ minus, error }: Props) => (
  <View style={s.container}>
    <Text style={s.minus}>
      {minus && '-'}
    </Text>
    <Text style={s.error}>
      {error && 'E'}
    </Text>
  </View>
);

export default ServiceSymbols;

// @flow
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  minus: {
    flex: 2,
    fontSize: 50,
    textAlignVertical: 'bottom',
  },
  error: {
    flex: 1,
    fontSize: 50,
  },
});

type Props = {
  minus: bool,
  error: bool,
};

const ServiceSymbols = ({ minus, error }: Props) => (
  <View style={style.container}>
    <Text style={style.minus}>
      {minus && '-'}
    </Text>
    <Text style={style.error}>
      {error && 'E'}
    </Text>
  </View>
);

export default ServiceSymbols;

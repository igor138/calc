// @flow
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  digit: string,
  dot: bool,
};

const style = StyleSheet.create({
  digit: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 50,
  },
});

const Digit = ({ digit, dot }: Props) => (
  <View style={style.digit}>
    <Text style={style.text}>
      {digit}
    </Text>
    {dot && <Text style={style.text}>.</Text>}
  </View>
);

export default Digit;

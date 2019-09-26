import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

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

const Digit = ({ digit, dot }) => (
  <View style={style.digit}>
    <Text style={style.text}>
      {digit}
    </Text>
    {dot && <Text style={style.text}>.</Text>}
  </View>
);

Digit.propTypes = {
  digit: PropTypes.string,
  dot: PropTypes.bool,
};

export default Digit;

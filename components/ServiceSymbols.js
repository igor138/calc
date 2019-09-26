import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

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

const ServiceSymbols = ({ minus, error }) => (
  <View style={style.container}>
    <Text style={style.minus}>
      {minus && '-'}
    </Text>
    <Text style={style.error}>
      {error && 'E'}
    </Text>
  </View>
);

ServiceSymbols.propTypes = {
  minus: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default ServiceSymbols;

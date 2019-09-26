// @flow
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  label: string,
  clickHandler: () => void,
};

const style = StyleSheet.create({
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: '#a93',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  label: {
    fontSize: 20,
  },
});

const ButtonComponent = ({ label, clickHandler }: Props) => (
  <TouchableOpacity onPress={clickHandler} style={[style.button]}>
    <Text style={style.label}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default ButtonComponent;

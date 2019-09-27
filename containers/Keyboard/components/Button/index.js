// @flow
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import s from './styles';

type Props = {
  label: string,
  clickHandler: () => void,
};

const ButtonComponent = ({ label, clickHandler }: Props) => (
  <TouchableOpacity onPress={clickHandler} style={[s.button]}>
    <Text style={s.label}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default ButtonComponent;

import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

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

const ButtonComponent = ({ label, size, clickHandler }) => {
  const customStyle = size && {
    flex: size,
  };

  return (
    <TouchableOpacity onPress={clickHandler} style={[style.button, customStyle]}>
      <Text style={style.label}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

ButtonComponent.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.number,
  clickHandler: PropTypes.func,
};

export default ButtonComponent;

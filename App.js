import React from 'react';
import { StyleSheet, View } from 'react-native';
import Calculator from './containers/Calculator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
}

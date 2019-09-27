import React from 'react';
import { Provider } from 'react-redux';
import Calculator from './containers/Calculator';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}

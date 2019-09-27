import React from 'react';
import { Provider } from 'react-redux';
import Calculator from './containers/Calculator';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Calculator />
  </Provider>
);

export default App;

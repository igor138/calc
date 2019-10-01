import { createStore } from 'redux';
import reducer, { initialState } from './containers/Keyboard/reducers';

export default createStore(reducer, initialState);

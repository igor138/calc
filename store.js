import { createStore } from 'redux';
import reducer, { initialState } from './containers/Calculator/reducers';

export default createStore(reducer, initialState);

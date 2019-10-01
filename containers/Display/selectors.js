// @flow
import type { State } from '../Keyboard/reducers';

export const selectDisplayValue = (state: State): string => state.displayValue;
export const selectMinus = (state: State): bool => state.minus;
export const selectError = (state: State): bool => state.error;
export const selectResult = (state: State): number => state.result;

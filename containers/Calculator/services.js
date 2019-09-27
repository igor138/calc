// @flow

export const formatDisplayedValue = (displayValue: string) :?string => {
  const maxDigits = 8;
  const dotPosition = displayValue.indexOf('.');

  if (dotPosition === -1) {
    if (displayValue.length > maxDigits) {
      return null;
    }
    return displayValue;
  } else if (dotPosition > maxDigits) {
    return null;
  } else if (displayValue.length > maxDigits + 1) {
    return displayValue.slice(0, maxDigits + 1);
  }
  return displayValue;
};

export const getValueFromDisplay = (state :{displayValue :string, minus :bool}) :number => {
  const { displayValue, minus } = state;
  return parseFloat(displayValue) * (minus ? -1 : 1);
};

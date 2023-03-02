const isStringPassLengthLimit = (string, lengthLimit) => string.length <= lengthLimit;
isStringPassLengthLimit('проверяемая строка', 18);

const isPalindrome = (string) => {
  const clearString = string.toLowerCase().replaceAll(' ', '');
  return clearString === clearString.split('').reverse().join('');
};
isPalindrome('Лёша на полке клопа нашёл');

const getNumbers = (string) => {
  if (typeof string !== 'number') {
    string = string.replaceAll(' ', '');
  }
  let numbers = '';
  let numbersTemp = '';
  for (let i = 0; i <= string.length - 1; i++) {
    const stringToNumber = Number(string[i], 10);
    numbers = (!isNaN(stringToNumber)) ? (numbersTemp += string[i]) : NaN;
  }
  return numbers;
};
getNumbers('ECMAScript 2022');

const addStringPad = (string, lengthMin, pad) => {
  let stringWithPad = string;
  while (stringWithPad.length < lengthMin) {
    const stringWithPadLength = pad.length + stringWithPad.length;
    const addedPad = (stringWithPadLength <= lengthMin) ? pad : pad.slice(0, lengthMin - stringWithPadLength);
    stringWithPad = addedPad + stringWithPad;
  }
  return stringWithPad;
};
addStringPad('q', 4, 'we');

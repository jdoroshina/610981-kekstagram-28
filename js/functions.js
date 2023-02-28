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
  let numbersTemp = ''; // без доп переменной не работала перваея ветка if , но выглядит плохо. Как улучшить?
  for (let i = 0; i <= string.length - 1; i++) {
    const stringToNumber = Number(string[i], 10); // ИСпользовать .at()?
    numbers = (!isNaN(stringToNumber)) ? (numbersTemp += string[i]) : NaN;
  }
  return numbers;
};
getNumbers('ECMAScript 2022'); // Не получилось убрать знаки в примерах (-1), (1.5), но надо ли?;

const addStringPad = (string, lengthMin, pad) => {
  let stringWithPad = string;
  while (stringWithPad.length < lengthMin) {//1<4
    const stringWithPadLength = pad.length + stringWithPad.length;
    const addedPad = (stringWithPadLength <= lengthMin) ? pad : pad.slice(0, lengthMin - stringWithPadLength);
    stringWithPad = addedPad + stringWithPad;
  }
  return stringWithPad;
};
addStringPad('q', 4, 'we');

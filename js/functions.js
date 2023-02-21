const checkStringLength = (string, lengthLimit) => {
  // let isLimitExceeded = true;
  // if (string.length > lengthLimit) {
  //     isLimitExceeded = false;
  //   }
  let isLimitExceeded;
  isLimitExceeded = (string.length <= lengthLimit);
  return isLimitExceeded;
};
checkStringLength('проверяемая строка', 18);

const isPalindrome = (string) => {
  let isPalindromeResult = false;
  string = string.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i <= string.length - 1; i++) {
    const j = string.length - 1 - i;
    if (string[i] === string[j]) {
      isPalindromeResult = true;
    } else {
      return false;
    }
  }
  console.log(isPalindromeResult);
  return isPalindromeResult;
};
isPalindrome('Лёша на полке клопа нашё ');

const getNumbers = (string) => {
  if (typeof string !== 'number') {
    string = string.replaceAll(' ', '');
  }
  console.log(string);
  let numbers = '';
  let numbersTemp = ''; // без доп переменной не работала перваея ветка if , но выглядит плохо. Как улучшить?
  for (let i = 0; i <= string.length - 1; i++) {
    const stringToNumber = Number(string[i], 10); // ИСпользовать .at()?
    numbers = (!isNaN(stringToNumber)) ? (numbersTemp += string[i]) : NaN;
  }
  console.log(numbers);
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

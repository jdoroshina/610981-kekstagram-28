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
  for (let i = 0; i <= string.length - 1; i++) {
    const stringToNumber = Number(string[i], 10); // ИСпользовать .at()?
    console.log(stringToNumber);
    numbers = (!isNaN(stringToNumber)) ? (numbers += string[i]) : NaN ;
  }
  console.log(numbers); // Не понимаю почему выводит плюсует NaN к numbers,  если условие говорит "Запиши символ в numbers если это не NaN"
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

// Добавочный символ использован один раз
// имя_функции('1', 2, '0');      // '01'

// Добавочный символ использован три раза
// имя_функции('1', 4, '0');      // '0001'

// Добавочные символы обрезаны с конца
// имя_функции('q', 4, 'werty');  // 'werq'

// Добавочные символы использованы полтора раза
// имя_функции('q', 4, 'we');     // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
// имя_функции('qwerty', 4, '0'); // 'qwerty'

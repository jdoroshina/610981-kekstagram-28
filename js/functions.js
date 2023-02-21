const checkStringLength = (string, lengthLimit) => {
  // let isLimitExceeded = true;
  // if (string.length > lengthLimit) {
  //     isLimitExceeded = false;
  //   }
  let isLimitExceeded;
  isLimitExceeded = (string.length <= lengthLimit) ? true : false;
  return isLimitExceeded;
};
checkStringLength('проверяемая строка', 18);

const isPalindrome = (string) => {
  let isPalindromeResult = false;
  string = string.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i <= string.length - 1; i++) {
    let j = string.length - 1 - i;
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
    let stringToNumber = Number(string[i], 10); // ИСпользовать .at()?
    console.log(stringToNumber);
    numbers = (!isNaN(stringToNumber)) ? (numbers += string[i]) : NaN ;
  }
  console.log(numbers); // Не понимаю почему выводит плюсует NaN к numbers,  если условие говорит "Запиши символ в numbers если это не NaN"
};
getNumbers('ECMAScript 2022'); // Не получилось убрать знаки в примерах (-1), (1.5), но надо ли?;


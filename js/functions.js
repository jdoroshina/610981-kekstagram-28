const checkStringLength = (string, lengthLimit) => {
  // let isLimitExceeded = true;
  // if (string.length > lengthLimit) {
  //     isLimitExceeded = false;
  //   }
  let isLimitExceeded;
  isLimitExceeded = (string.length <= lengthLimit) ? true : false;
  console.log(isLimitExceeded);
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

checkStringLength ('проверяемая строка', 18);


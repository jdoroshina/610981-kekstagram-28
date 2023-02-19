const checkStringLength = (string, lengthLimit) => {
  // let isLimitExceeded = true;
  // if (string.length > lengthLimit) {
  //     isLimitExceeded = false;
  //   }
  let isLimitExceeded;
  isLimitExceeded = (string.length <= lengthLimit) ? true : false;
  console.log(isLimitExceeded);
  return isLimitExceeded;
}

checkStringLength ('проверяемая строка', 18);


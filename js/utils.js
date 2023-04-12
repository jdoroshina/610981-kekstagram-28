const getRandomArrValues = (arr, valuesQuantity) => {
  const result = arr.slice(); // Создаем копию исходного arr
  result.sort(() => Math.random() - 0.5); // Сортируем массив случайным образом
  return result.slice(0, valuesQuantity); // Возвращаем первые valuesQuantity элементов
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export { isEscapeKey, getRandomArrValues, debounce };

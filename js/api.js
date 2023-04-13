const SERVER_URL_GET_DATA = 'https://28.javascript.pages.academy/kekstagram/data';
const SERVER_URL_POST = 'https://28.javascript.pages.academy/kekstagram';
const ERROR_TEXT = 'Не удалось загрузить данные. Попробуйте обновить страницу.';

const getData = () => fetch(SERVER_URL_GET_DATA)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  .catch(() => {
    throw new Error(ERROR_TEXT);
  });

const sendData = (body) => fetch(SERVER_URL_POST, {
  method: 'POST',
  body
})
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  .catch(() => {
    throw new Error(ERROR_TEXT);
  });

export { getData, sendData };

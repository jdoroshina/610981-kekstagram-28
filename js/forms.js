import { isEscapeKey } from './utils.js';

const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const fileField = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');


const showModal = () => {
  overlay.classlist.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeModal = () => {
  overlay.classList.add('hidden');
  body.classList.add('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

//можно ли тут использовать не стрелочную функцию? пробовала решить как-то только стрелочными, но у меня не вышло
function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeModal();
  }
};

const onFileInputChange = () => {
  showModal();
};

const onCancelButtonClick = () => {
  closeModal();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);

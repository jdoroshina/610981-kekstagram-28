import { isEscapeKey } from './utils.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';
import { sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './form-message.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яë0-9]{1,19}$/i;


const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const fileField = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',//указываем элемент, на который добалвяем служебные классы
  errorTextParent: 'img-upload__field-wrapper',//класс элемента, в который будет выводиться текст ошибки
  errorTextClass: 'img-upload__field-wrapper__error'//класс для стилизация текста ошибки
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const showForm = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeForm = () => {
  form.reset();
  pristine.reset();
  resetScale();
  resetEffects();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeForm();
  }
}

const onFileInputChange = () => {
  showForm();
};

const onCancelButtonClick = () => {
  closeForm();
};


const prepareTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return tags;
};

const hasValidCount = (tags) => {
  const arrayTags = prepareTags(tags);
  return arrayTags.length <= MAX_HASHTAG_COUNT;
};

const hasUniqueTags = (tags) => {
  const arrayTags = prepareTags(tags);
  const lowerCaseTags = arrayTags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const isValidTag = (tags) => {
  const arrayTags = prepareTags(tags);
  return arrayTags.every((tag) => VALID_SYMBOLS.test(tag));
};

pristine.addValidator(
  hashtagField,
  hasValidCount,
  'Не больше 5 хештегов'
);

pristine.addValidator(
  hashtagField,
  hasUniqueTags,
  'Хештеги не должны повторяться'
);

pristine.addValidator(
  hashtagField,
  isValidTag,
  'Хештег должен начинаться с #, содержать буквы или цифры, быть не длиннее 20 символов'
);

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(() => {
          onSuccess();
          showSuccessMessage();
        })
        .catch((err) => {
          showErrorMessage(err.message);
        })
        .finally(unblockSubmitButton);
    }
  });
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);

export { setUserFormSubmit, closeForm };

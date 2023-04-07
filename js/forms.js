import { isEscapeKey } from './utils.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яë0-9]{1,19}$/i;

const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const fileField = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

//есть ли разница на что накладывать пристин ( у меня на div, но может лучше на fieldset)?
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',//указываем элемент, на который добалвяем служебные классы
  errorTextParent: 'img-upload__field-wrapper',//класс элемента, в который будет выводиться текст ошибки
  errorTextClass: 'img-upload__field-wrapper__error'//класс для стилизация текста ошибки

});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeModal = () => {
  form.reset();
  pristine.reset();
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
    closeModal();
  }
}

const onFileInputChange = () => {
  showModal();
};

const onCancelButtonClick = () => {
  closeModal();
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

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);

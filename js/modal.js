import { isEscapeKey } from './utils.js';

const thumbnailContainer = document.querySelector('.pictures');
const modal = document.querySelector('.big-picture');
const CloseElement = document.querySelector('.big-picture__cancel');
const CommentsCount = document.querySelector('.social__comment-count');
const CommentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modal.classList.add('hidden');
  }
};

const openPopup = () => {
  modal.classList.remove('hidden');
  CommentsCount.classList.add('hidden');
  CommentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closePopup = () => {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);

};

thumbnailContainer.addEventListener('click', () => {
  openPopup();
});

CloseElement.addEventListener('click', () => {
  closePopup();
});

import { isEscapeKey } from './utils.js';

const thumbnailContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture'); //section
const closeElement = document.querySelector('.big-picture__cancel');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const commentTemplate = document
  .querySelector('#comments')
  .content
  .querySelector('.social__comment');
const commentsContainer = document.querySelector('.social__comments');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modal.classList.add('hidden');
  }
};

const openPopup = () => {
  bigPicture.classList.remove('hidden');
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closePopup = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);

};

thumbnailContainer.addEventListener('click', () => {
  openPopup();
});

closeElement.addEventListener('click', () => {
  closePopup();
});

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
/**
 * функция генерирует комментарии по темплейту и вставляет их в ul
 * @param {*} comments комментарии описания одной фотографии
 */
const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((commentItem) => {
    const comment = commentTemplate.cloneNode(true); ///кладем клоны темплейтов в переменную

    comment.querySelector('.social__picture').src = commentItem.avatar;
    comment.querySelector('.social__picture').alt = commentItem.name;
    comment.querySelector('.social__text').textContent = commentItem.message;

    fragment.append(comment);
  });

  commentsContainer.append(fragment);
};
  openPopup();
});

closeElement.addEventListener('click', () => {
  closePopup();
});

import { isEscapeKey } from './utils.js';

const COMMENTS_SHOWN_FRACTION = 5;
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
const commentsContainer = document.querySelector('.social__comments'); //ul

let commentsShown = 0;
let comments = [];

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  commentsShown = 0;
};

/**
 * функция генерирует комментарии по темплейту и вставляет их в ul
 * @param {*} currentComments комментарии описания одной фотографии
 */
const renderComments = () => {
  commentsShown += COMMENTS_SHOWN_FRACTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < commentsShown; i++) {
    const commentItem = commentTemplate.cloneNode(true);
    commentItem.querySelector('.social__picture').src = comments[i].avatar;
    commentItem.querySelector('.social__picture').alt = comments[i].name;
    commentItem.querySelector('.social__text').textContent = comments[i].message;
    fragment.append(commentItem);
  }

  commentsContainer.innerHTML = '';
  commentsCount.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}</span> комментариев`;
  commentsContainer.append(fragment);
};

const onCommentsLoaderClick = () => renderComments();

const createContainerListener = (photoDescriptions) => {
  thumbnailContainer.addEventListener('click', (evt) => {
    if (evt.target.closest('.picture')) {
      const thumbnail = evt.target.closest('.picture');
      const currentDescription = photoDescriptions.find((item) => item.id === Number(thumbnail.dataset.thumbnailId));
      bigPicture.querySelector('.big-picture__img img').src = currentDescription.url;
      bigPicture.querySelector('.big-picture__img img').alt = currentDescription.description;
      bigPicture.querySelector('.likes-count').textContent = currentDescription.likes;
      bigPicture.querySelector('.comments-count').textContent = currentDescription.comments.length;
      comments = currentDescription.comments;
      if (comments.length > 0) {
        renderComments();
      }
      openModal();
    }
  });
};

closeElement.addEventListener('click', () => {
  closeModal();
});

commentsLoader.addEventListener('click', onCommentsLoaderClick);

export { createContainerListener };

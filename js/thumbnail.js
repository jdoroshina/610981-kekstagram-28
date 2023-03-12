import { getPhotoCards } from './data.js';

const thumbnailTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture'); //Находим контент темплейта в разметке

const thumbnailContainer = document.querySelector('.pictures'); //находим место куда будем вставлять темплейт

const thumbnails = getPhotoCards(); //сохраняем сгенерированные обхекты

const thumbnailFragment = document.createDocumentFragment();
thumbnails.forEach(({url, description, likes, comments}) => {
  const thumbnailItem = thumbnailTemplate.cloneNode(true); //кладем клоны темплейтов в переменную
  thumbnailItem.querySelector('.picture__img').src = url;
  thumbnailItem.querySelector('.picture__img').alt = description;
  thumbnailItem.querySelector('.picture__likes').textContent = likes;
  thumbnailItem.querySelector('.picture__comments').textContent = comments.length;
  thumbnailFragment.appendChild(thumbnailItem);
});

thumbnailContainer.appendChild(thumbnailFragment);

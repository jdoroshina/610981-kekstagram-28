const thumbnailTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture'); //Находим контент темплейта в разметке

const thumbnails = getPhotoCards(); //сохраняем сгенерированные обхекты

const thumbnailFragment = document.createDocumentFragment();
thumbnails.forEach(({url, description, likes, comments}) => {
  const thumbnailItem = thumbnailTemplate.cloneNode(true); //кладем клоны темплейтов в переменную
  thumbnailItem.querySelector('.picture__img').src = url;
  thumbnailItem.querySelector('.picture__img').alt = description;
  thumbnailItem.querySelector('.picture__likes').textContent = likes;
  thumbnailItem.querySelector('.picture__comments').textContent = comments;
  thumbnailFragment.appendChild(thumbnailItem);
});

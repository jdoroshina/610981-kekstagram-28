const thumbnailTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture'); //Находим контент темплейта в разметке
const container = document.querySelector('.pictures'); //находим место куда будем вставлять темплейт

/**
 * функция генерирования миниатюр
 * @param {*} param0 объект описания
 * @returns заполненный шаблон в виде html разметки
 */
const createThumbnail = ({ id, url, description, likes, comments }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true); ///кладем клоны темплейтов в переменную

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.dataset.thumbnailId = id;

  return thumbnail;
};

const renderThumbnails = (thumbnails) => {
  const fragment = document.createDocumentFragment();
  thumbnails.forEach((thumbnail) => {
    const pictureItem = createThumbnail(thumbnail);
    fragment.append(pictureItem);
  });

  container.append(fragment);
};

export { renderThumbnails };

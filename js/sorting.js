import { getRandomArrValues, debounce } from './utils.js';
import { renderThumbnails } from './thumbnail.js';

const SORTING_RESPONSE_DELAY = 500;
const RANDOM_FILTER_PHOTOS_QUANTITY = 10;

const photoFiltersContainer = document.querySelector('.img-filters');
const sortingButtonsContainer = photoFiltersContainer.querySelector('.img-filters__form');

const clearPhotoList = () => {
  document.querySelectorAll('.picture').forEach((photo) => photo.remove());
};

const showSortingFilters = () => {
  photoFiltersContainer.classList.remove('img-filters--inactive');
};

const setButtonActive = (button) => {
  const buttonActive = document.querySelector('.img-filters__button--active');
  buttonActive.classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const sortByRandom = (photos) => renderThumbnails(getRandomArrValues(photos, RANDOM_FILTER_PHOTOS_QUANTITY));
const sortByComments = (photos) => renderThumbnails(photos.slice().sort((a, b) => b.comments.length - a.comments.length));


const sortPicturesList = debounce((photos, filterId) => {
  clearPhotoList();
  const sortedPhotos = photos.slice();
  if (filterId === 'filter-random') {
    sortByRandom(photos);
  } else if (filterId === 'filter-discussed') {
    sortByComments(photos);
  } else if (filterId === 'filter-default') {
    renderThumbnails(sortedPhotos);
  }
}, SORTING_RESPONSE_DELAY);


const getPicturesSorting = (photos) => {
  showSortingFilters();

  sortingButtonsContainer.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('img-filters__button')) {
      setButtonActive(evt.target);
      sortPicturesList(photos, evt.target.id);
    }
  });
};

export { getPicturesSorting };

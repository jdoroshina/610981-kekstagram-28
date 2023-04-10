import { getPhotoCards } from './data.js';
import { renderThumbnails } from './thumbnail.js';
import { createContainerListener } from './modal.js';
import { closeModal } from './modal.js';
import { setUserFormSubmit } from './forms.js';
import './modal.js';
import './forms.js';
import './scale.js';
import './effect.js';

const photoDescriptions = getPhotoCards();

fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((thumbnails) => {
    renderThumbnails(thumbnails);
  });

createContainerListener(photoDescriptions);
setUserFormSubmit(closeModal);

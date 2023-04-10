import { getPhotoCards } from './data.js';
import { renderThumbnails } from './thumbnail.js';
import { createContainerListener } from './modal.js';
import { setUserFormSubmit, closeForm } from './forms.js';
import { getData } from './api.js';
import './modal.js';
import './forms.js';
import './scale.js';
import './effect.js';

const photoDescriptions = getPhotoCards();

getData()
  .then((thumbnails) => {
    renderThumbnails(thumbnails);
  });

createContainerListener(photoDescriptions);
setUserFormSubmit(closeForm);

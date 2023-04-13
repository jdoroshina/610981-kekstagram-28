import { getData } from './api.js';
import { renderThumbnails } from './thumbnail.js';
import { getPicturesSorting } from './sorting.js';
import { createContainerListener } from './big-picture.js';
import { setUserFormSubmit, closeForm } from './forms.js';
import { showAlert } from './utils.js';
import './big-picture.js';
import './photo-upload.js';
import './forms.js';
import './scale.js';
import './effect.js';

getData()
  .then((thumbnails) => {
    renderThumbnails(thumbnails);
    getPicturesSorting(thumbnails);
    createContainerListener(thumbnails);
  })
  .catch((err) => {
    showAlert(err.message);
  });

setUserFormSubmit(closeForm);

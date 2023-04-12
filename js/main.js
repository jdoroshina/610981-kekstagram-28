import { renderThumbnails } from './thumbnail.js';
import { getPicturesSorting } from './sorting.js';
import { createContainerListener } from './modal.js';
import { setUserFormSubmit, closeForm } from './forms.js';
import { getData } from './api.js';
import './modal.js';
import './forms.js';
import './scale.js';
import './effect.js';

getData()
  .then((thumbnails) => {
    renderThumbnails(thumbnails);
    getPicturesSorting(thumbnails);
    createContainerListener(thumbnails);
  });

setUserFormSubmit(closeForm);

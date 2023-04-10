import { isEscapeKey } from './utils.js';
import { onPopupEscKeydown } from './modal.js';

const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;
const successModal = document.querySelector('.success');
const errorModal = document.querySelector('.error');

const onErrorsModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    errorModal.remove();
    document.removeEventListener('keydown', onErrorsModalEscKeydown);
    document.addEventListener('keydown', onPopupEscKeydown);
  }
};

const onOutMessageModalClick = (evt) => {
  if (!(evt.target.closest('.success'))) {
    successModal.remove();
  } else if (!(evt.target.closest('.error'))) {
    errorModal.remove();
    document.removeEventListener('keydown', onErrorsModalEscKeydown);
    document.addEventListener('keydown', onPopupEscKeydown);
  }
};

const onSuccessButtonClick = () => {
  successModal.remove();
};

const onErrorButtonClick = () => {
  errorModal.remove();
  document.removeEventListener('keydown', onErrorsModalEscKeydown);
  document.addEventListener('keydown', onPopupEscKeydown);
};

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.body.append(successMessage);
  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', onSuccessButtonClick);
  successModal.addEventListener('click', onOutMessageModalClick);
};

const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessage);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', onErrorButtonClick);
  errorModal.addEventListener('click', onOutMessageModalClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('keydown', onErrorsModalEscKeydown);
};

export { showSuccessMessage, showErrorMessage };

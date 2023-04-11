import { isEscapeKey } from './utils.js';
import { onPopupEscKeydown } from './modal.js';

const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;

const onSuccessModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    const successModal = document.querySelector('.success');
    successModal.remove();
    document.removeEventListener('keydown', onSuccessModalEscKeydown);
  }
};

const onErrorModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    const errorModal = document.querySelector('.error');
    errorModal.remove();
    document.removeEventListener('keydown', onErrorModalEscKeydown);
    document.addEventListener('keydown', onPopupEscKeydown);
  }
};

const onOutMessageModalClick = (evt) => {
  if (!(evt.target.closest('.success__inner'))) {
    const successModal = document.querySelector('.success');
    successModal.remove();
    document.removeEventListener('keydown', onSuccessModalEscKeydown);
  } else if (!(evt.target.closest('.error'))) {
    const errorModal = document.querySelector('.error__inner');
    errorModal.remove();
    document.removeEventListener('keydown', onErrorModalEscKeydown);
    document.addEventListener('keydown', onPopupEscKeydown);
  }
};

const onSuccessButtonClick = () => {
  const successModal = document.querySelector('.success');
  successModal.remove();
  document.removeEventListener('keydown', onSuccessModalEscKeydown);
};

const onErrorButtonClick = () => {
  const errorModal = document.querySelector('.error');
  errorModal.remove();
  document.removeEventListener('keydown', onErrorModalEscKeydown);
  document.addEventListener('keydown', onPopupEscKeydown);
};

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.body.append(successMessage);
  const successButton = document.querySelector('.success__button');
  const successModal = document.querySelector('.success');
  successButton.addEventListener('click', onSuccessButtonClick);
  successModal.addEventListener('click', onOutMessageModalClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('keydown', onSuccessModalEscKeydown);
};

const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessage);
  const errorButton = document.querySelector('.error__button');
  const errorModal = document.querySelector('.error');
  errorButton.addEventListener('click', onErrorButtonClick);
  errorModal.addEventListener('click', onOutMessageModalClick);
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('keydown', onErrorModalEscKeydown);
};

export { showSuccessMessage, showErrorMessage };

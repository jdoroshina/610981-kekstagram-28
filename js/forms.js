const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const fileField = document.querySelector('#upload-file');


const showModal = () => {
  overlay.classlist.remove('hidden');
  body.classList.add('modal-open');
};

const onFileInputChange = () => {
  showModal();
};

fileField.addEventListener('change', onFileInputChange);

const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 0,
    unit: ''
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
];

const imageElement = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const sliderInput = document.querySelector('.effect-level__value');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');

const defaultEffect = EFFECTS[0];
let currentEffect = defaultEffect;

const isDefault = () => currentEffect === defaultEffect;

const showSlider = () => {
  sliderContainerElement.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainerElement.classList.add('hidden');
};

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      max: currentEffect.max,
      min: currentEffect.min
    },
    start: currentEffect.max,
    step: currentEffect.step
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  if(evt.target.classList.contains('effects__radio')) {
    const effectName = evt.target.value;
    imageElement.className = `effects__preview--${effectName}`;
    currentEffect = EFFECTS.find((item) => item.name === effectName);
  }
  updateSlider();
};

const onSliderUpdate = () => {
  sliderInput.value = sliderElement.noUiSlider.get();
  if (isDefault()) {
    imageElement.style.filter = defaultEffect.style;
  } else {
    imageElement.style.filter = `${currentEffect.style}(${sliderInput.value}${currentEffect.unit})`;
  }
};

const resetEffects = () => {
  currentEffect = defaultEffect;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    max: currentEffect.max,
    min: currentEffect.min
  },
  start: currentEffect.max,
  step: currentEffect.step,
  connect: 'lower'
});
hideSlider();

effectsList.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };

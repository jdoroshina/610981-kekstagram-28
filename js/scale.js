// 1. редактирование масштаба изображения
//  1.1 визуальное применение фильтрв
const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const reducerScaleElement = document.querySelector('.scale__control--smaller');
const increaserScaleElement = document.querySelector('.scale__control--bigger');
const inputScaleElement = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.image-upload__preview img');

const changeImageScale = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  inputScaleElement.value = `${value}%`;
};

const onReduceScaleElementClick = () => {
  let currentInputScaleValue = parseInt(inputScaleElement.value, 10);
  if (currentInputScaleValue > MIN_SCALE) {
    currentInputScaleValue -= STEP_SCALE;
  }
  changeImageScale(currentInputScaleValue);
};

const onIncreaseScaleElementClick = () => {
  let currentInputScaleValue = parseInt(inputScaleElement.value, 10);
  if (currentInputScaleValue <= MAX_SCALE) {
    currentInputScaleValue -= STEP_SCALE;
  }
  changeImageScale(currentInputScaleValue);
};

const resetScale = () => changeImageScale(DEFAULT_SCALE);

reducerScaleElement.addEventListener('click', onReduceScaleElementClick);
increaserScaleElement.addEventListener('click', onIncreaseScaleElementClick);

export { resetScale };

//2. Реализуй применение фильтра для изображения
//  2.1 Настрой правила использования фильтров
//      2.1.1 Установи по умолчанию фильтр .effects__preview--none
//      2.1.2 Установи ограничение 1 изображение = 1 фильтр (ф-ция делегирования на радиокнопках переписывает класс className)
//      2.1.3 Добавь для .img-upload__preview img класс effects__preview--х при выборе .effect-х через радиокнопоки .effects__radio (делегирование. + )
//  2.2 Настрой слайдер
//      2.2.1 Подключи noUiSlider
//      2.2.2 Интенсивность фильтра регулируется перемещением ползунка в слайдере.
//      2.2.3 Уровень фильтра записывается в поле .effect-level__value.
//      2.2.4 Пропиши изменений CSS-стилей для .img-upload__preview img:
//          - effects__preview--chrome — filter: grayscale(0..1) с шагом 0.1;
//          - effects__preview--sepia — filter: sepia(0..1) с шагом 0.1;
//          - effects__preview--marvin — filter: invert(0..100%) с шагом 1%;
//          - effects__preview--phobos — filter: blur(0..3px) с шагом 0.1px;
//          - effects__preview--heat — filter: brightness(1..3) с шагом 0.1;
//          - effects__preview--none - CSS-стили filter удаляются.
//      2.2.5 Скрой слайдер и его контейнер (.img-upload__effect-level) при выборе (effects__preview--none)
//      2.2.6 Настрой сброс уровня фильтра до начального при:
//          - перемещении слайдера
//          - переключении фильтров
//  2.3 Запиши значение эффекта в скрытое поле

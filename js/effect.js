//2. Реализуй применение фильтра для изображения
//  2.1 Настрой правила использования фильтров
//      2.1.1 Установи по умолчанию фильтр .effects__preview--none

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
//      2.1.2 Установи ограничение 1 изображение = 1 фильтр (ф-ция делегирования на радиокнопках переписывает класс className)
//      2.1.3 Добавь для .img-upload__preview img класс effects__preview--х при выборе .effect-х через радиокнопоки .effects__radio (делегирование. + )
//  2.2 Настрой слайдер
//      2.2.1 Подключи noUiSlider
//      2.2.2 Интенсивность фильтра регулируется перемещением ползунка в слайдере.
//      2.2.3 Уровень фильтра записывается в поле .effect-level__value.

//      2.2.5 Скрой слайдер и его контейнер (.img-upload__effect-level) при выборе (effects__preview--none)
//      2.2.6 Настрой сброс уровня фильтра до начального при:
//          - перемещении слайдера
//          - переключении фильтров
//  2.3 Запиши значение эффекта в скрытое поле

import { getRandomInt, getRandomArrayElement, createIdGenerator } from './utils.js';

const PICTURE_COUNT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MAX = 200;
const AVATAR_COUNT = 6;
const DESCRIPTIONS = [
  'Самое веселое из моего дня.',
  'История одного фиаско.',
  'Кулинарный краш.'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Николай',
  'Юлия',
  'Леопольд',
  'Зоя',
  'Алексей',
  'Екатерина',
  'Кирилл'
];

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from({ length: getRandomInt(1, 2)}, () => getRandomArrayElement(MESSAGES)).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInt(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createPhotoCard = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(LIKES_MIN, LIKES_MAX),
  comments: Array.from({length: getRandomInt(1, COMMENTS_MAX)}, createComment)
});

const getPhotoCards = () => Array.from({ length: PICTURE_COUNT}, (_, pictureIndex) => createPhotoCard(pictureIndex + 1));

export { getPhotoCards };

import { months } from '../constants/time';

export const getJoinedDate = (date) => {
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

export const getTweetDate = (date) => {
  return `${months[date.getMonth()]}, ${date.getDate()} ${date.getFullYear()}`;
};

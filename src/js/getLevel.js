import fetchData from './http';

export default function getLevel(userId) {
  const response = fetchData(userId);

  if (response.status === 'ok') {
    return `Your current level is: ${response.level}`;
  }

  return 'The level information is currently unavailable';
}
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = query => {
  const key = '54455311-030751af506b74e799c74bea1';
  return axios
    .get(BASE_URL, {
      params: {
        key: key,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(response => response.data);
};

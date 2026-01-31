import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  const input = form.querySelector("input[name='search-text']");
  const query = input.value.trim();
  if (!query) {
    return;
  }
  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      const result = data.hits;
      hideLoader();
      if (!Array.isArray(result) || !result.length) {
        iziToast.error({
          title: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
          iconColor: '#fff',
          messageColor: '#fafafb',
          titleColor: '#FFFFFF',
          backgroundColor: '#EF4040',
          progressBarColor: '#B51B1B',
        });
        return;
      }
      createGallery(result);
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: `Unknown error`,
        message: error.message,
        position: 'topRight',
        iconColor: '#fff',
        messageColor: '#fafafb',
        titleColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        progressBarColor: '#B51B1B',
      });
    });
});

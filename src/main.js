

import { getPictures } from './js/pixabay-api';
import { renderPictures, gallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  gallery.innerHTML = '';

  const searchValue = event.target.elements.searchquery.value.trim();

  if (searchValue === '') {
    iziToast.error({ title: 'Error', message: 'Please enter a search query' });
    return;
  }

  loader.style.display = 'block';  // Показуємо лоадер

  try {
    const data = await getPictures(searchValue);
    loader.style.display = 'none';  // Ховаємо лоадер

    if (data.hits.length === 0) {
      iziToast.info({ message: 'Sorry, there are no images matching your search query. Please try again!' });
    } else {
      renderPictures(data.hits);  // Виводимо зображення
    }
  } catch (error) {
    loader.style.display = 'none';  // Ховаємо лоадер
    iziToast.error({ title: 'Error', message: error.message });
  }
});
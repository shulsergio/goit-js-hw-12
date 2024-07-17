import { onFetchError, onGetPhotoByText } from './js/pixabay-api';
import { onCreateGalleryPhoto } from './js/render-functions';
const LoaderText = document.querySelector('.loader');
const InputQuery = document.querySelector('.input-query');
const btnSbm = document.querySelector('#btn-submit');

const btnAddLoad = document.querySelector('.js-btn-addload');
btnSbm.addEventListener('click', onCreateMarckup);
btnAddLoad.addEventListener('click', onPlusPages);
let queryData = '';
let pages = 1;
let totalPhotoCreate = 0;
let flag = 0;

async function onCreateMarckup(evt) {
  if (evt) {
    evt.preventDefault();
    if (!InputQuery.value.trim()) {
      document.querySelector('.main-list').innerHTML = '';
      document.querySelector('.input-query').innerHTML = '';
      onFetchError();

      return;
    }
    queryData = InputQuery.value.replace(/\s+/g, '+').toLowerCase();
    document.querySelector('.main-list').innerHTML = '';
    document.querySelector('.js-text-addload').style.display = 'none';
    pages = 1;
    flag = 0;
    totalPhotoCreate = 0;
  }
  LoaderText.style.display = 'inline-block';
  try {
    const data = await onGetPhotoByText(queryData, pages);
    LoaderText.style.display = 'none';

    if (data.totalHits === 0) {
      onFetchError(data);
      btnAddLoad.style.display = 'none';
    } else if (totalPhotoCreate + 15 >= data.totalHits) {
      onCreateGalleryPhoto(data, flag);
      btnAddLoad.style.display = 'none';
      document.querySelector('.js-text-addload').style.display = 'block';
    } else {
      onCreateGalleryPhoto(data, flag);
      btnAddLoad.style.display = 'block';
    }

    totalPhotoCreate += data.hits.length;
  } catch (error) {
    onFetchError();
  } finally {
    InputQuery.value = '';
  }
}

async function onPlusPages() {
  pages += 1;
  flag = 1;
  await onCreateMarckup();
}

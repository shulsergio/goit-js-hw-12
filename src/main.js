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

function onCreateMarckup(evt) {
  if (evt) {
    evt.preventDefault();
    queryData = InputQuery.value.replace(/\s+/g, '+').toLowerCase();
    document.querySelector('.main-list').innerHTML = '';
    document.querySelector('.js-text-addload').style.display = 'none';
    pages = 1;
    totalPhotoCreate = 0;
  }
  LoaderText.style.display = 'inline-block';

  console.log('queryData- ', queryData);
  onGetPhotoByText(queryData, pages)
    .then(data => {
      LoaderText.style.display = 'none';
      if (!queryData.trim()) {
        onFetchError(data);
        document.querySelector('.main-list').innerHTML = '';
        return;
      }

      if (data.totalHits === 0) {
        onFetchError(data);
      } else if (totalPhotoCreate === data.totalHits) {
        btnAddLoad.style.display = 'none';
        document.querySelector('.js-text-addload').style.display = 'block';
      } else {
        onCreateGalleryPhoto(data);
        btnAddLoad.style.display = 'block';
      }
      totalPhotoCreate += data.hits.length;
    })
    .catch(onFetchError)
    .finally(() => {
      InputQuery.value = '';
    });
}

function onPlusPages() {
  console.log('pages before =,', pages);
  pages += 1;
  console.log('pages after +1 =,', pages);
  console.log('queryData,', queryData);

  onCreateMarckup();
}

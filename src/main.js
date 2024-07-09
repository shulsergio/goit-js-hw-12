import { onFetchError, onGetPhotoByText } from './js/pixabay-api';
import { onCreateGalleryPhoto } from './js/render-functions';
const LoaderText = document.querySelector('.loader');
const InputQuery = document.querySelector('.input-query');
const btnSbm = document.querySelector('#btn-submit');

btnSbm.addEventListener('click', onCreateMarckup);

function onCreateMarckup(evt) {
  LoaderText.style.display = 'inline-block';
  evt.preventDefault();

  let queryData = InputQuery.value.replace(/\s+/g, '+').toLowerCase();

  onGetPhotoByText(queryData)
    .then(data => {
      LoaderText.style.display = 'none';
      data.totalHits === 0 ? onFetchError(data) : onCreateGalleryPhoto(data);
    })
    .catch(onFetchError)
    .finally(() => {
      InputQuery.value = '';
    });
}

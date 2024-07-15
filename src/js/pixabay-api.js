// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
const paramsPix = {
  key: '36975970-2726c7257b1c2078714098d3d',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: '3',
};

export function onGetPhotoByText(query, pages) {
  console.log('query- ', query);
  console.log('pages in pixabay=', pages);

  const API_KEY = '36975970-2726c7257b1c2078714098d3d';
  const targetUrl = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=${paramsPix.image_type}&orientation=${paramsPix.orientation}&safesearch=${paramsPix.safesearch}&page=${pages}&per_page=${paramsPix.per_page}`;

  return axios
    .get(targetUrl)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw new Error(error.response ? error.response.status : error.message);
    });
}
export function onFetchError() {
  iziToast.show({
    backgroundColor: '#ef4040',
    message:
      'Sorry, there are no images matching </br> your search query. Please, try again!',
    messageColor: '#fff',
    messageSize: '16px',
    position: 'topRight',
  });
}

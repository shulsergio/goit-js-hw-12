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
  per_page: '15',
};

export async function onGetPhotoByText(query, pages) {
  const API_KEY = '36975970-2726c7257b1c2078714098d3d';
  const targetUrl = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=${paramsPix.image_type}&orientation=${paramsPix.orientation}&safesearch=${paramsPix.safesearch}&page=${pages}&per_page=${paramsPix.per_page}`;

  try {
    const response = await axios.get(targetUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error(error.response ? error.response.status : error.message);
  }
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

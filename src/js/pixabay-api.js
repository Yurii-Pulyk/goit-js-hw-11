const API_KEY = '46829470-2665f0a199f61e35def0ecb3b';
const BASE_URL = 'https://pixabay.com/api/';

export async function getPictures(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  try {
    const response = await fetch(`${BASE_URL}?${params.toString()}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
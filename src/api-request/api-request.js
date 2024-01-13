// Імпорт
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// Api ключ
const APIKEY = '4b655fbaa84bce2d18df6f2545b8c203';

// Отримання ІD фільму
const getMovieId = async id => {
  try {
    const { data } = await axios.get(
      `/movie/${id}?api_key=${APIKEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.error('Error fetching movie by ID:', error.message);
    throw error;
  }
};
// Отримання трендових фільмів
const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`/trending/all/day?api_key=${APIKEY}`);
    return data;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    throw error;
  }
};
// Пошук фільмів
const getSearch = async searchName => {
  try {
    const { data } = await axios.get(
      `/search/movie?query=${searchName}&api_key=${APIKEY}`
    );
    return data;
  } catch (error) {
    console.error('Error fetching search results:', error.message);
    throw error;
  }
};
// Отримання акторського складу
const getCast = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/credits?api_key=${APIKEY}`);
    return data;
  } catch (error) {
    console.error('Error fetching cast information:', error.message);
    throw error;
  }
};
// Отримання відгуків
const getReviews = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews?api_key=${APIKEY}`);
    return data;
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    throw error;
  }
};
// Експорт
export { getMovieId, getTrendingMovies, getSearch, getCast, getReviews };

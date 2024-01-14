// Імпорт бібліотек і компонентів
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Box, Container, Typography, CircularProgress } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import List from 'components/list-component/List';
import SearchForm from '../components/search-form-component/SearchForm';
// Імпорт логіки API запиту
import { getSearch } from '../components/api-request/api-request';

// Основна функція компоненту
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') || ''
  );
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  // Отримання пошукового запиту
  useEffect(() => {
    const query = searchParams.get('search');
    if (query) {
      getSearchQuery(query);
    } else {
      setMovies([]);
    }
  }, [searchParams]);

  const getSearchQuery = async name => {
    setIsLoading(true);
    try {
      const data = await getSearch(name);
      const { results } = data;
      if (results.length === 0) {
        toast.warning('No movies found');
      }
      setMovies(results);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setIsLoading(false);
    }
  };
  // Зміна поля для пошуку
  const handleInputChange = e => {
    setSearchQuery(e.currentTarget.value);
  };
  // Обробка пошуку
  const handleSubmit = e => {
    e.preventDefault();
    const notEmptySearchQuery = searchQuery.trim();
    if (!notEmptySearchQuery) {
      toast.error('Please enter your search query');
      return;
    }
    setSearchParams({ search: notEmptySearchQuery });
  };

  return (
    <Container>
      <Box
        mt={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" mb={2}>
          Search Movies
        </Typography>
        <SearchForm
          onSubmit={handleSubmit}
          searchQuery={searchQuery}
          handleInputChange={handleInputChange}
        />
        {isLoading && <CircularProgress sx={{ marginTop: 2 }} />}
        <List movies={movies} location={location} />
      </Box>
      <ToastContainer />
    </Container>
  );
};
// Експорт
export default Search;

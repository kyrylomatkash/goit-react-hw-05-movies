// Імпорт бібліотек і компонентів
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import List from 'components/list-component/List';
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
  const navigate = useNavigate();
  // Отримання пошукового запиту
  useEffect(() => {
    const query = searchParams.get('search');
    if (query) {
      getSearchQuery(query);
    } else {
      setMovies([]);
    }
  }, [searchParams]);
  // Пошукова форма
  const SearchForm = ({ onSubmit, searchQuery, handleInputChange }) => (
    <form onSubmit={onSubmit} style={{ width: '100%', maxWidth: '400px' }}>
      <TextField
        label="Search movies"
        variant="outlined"
        name="search"
        value={searchQuery}
        onChange={handleInputChange}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button type="submit" variant="outlined" fullWidth>
        Search
      </Button>
    </form>
  );
  // Запит на отримання фільмів за пошуковим запитом
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
  // Повернення назад
  const handleBackButtonClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleBackButtonClick}
        sx={{
          marginTop: 3,
        }}
      >
        Go back to home
      </Button>
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

// Імпорт бібліотек і компонентів
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../components/api-request/api-request';
import List from 'components/list-component/List';
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  CircularProgress,
} from '@mui/material';

// Основна функція компоненту
const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  // Отримання трендових фільмів
  const fetchTrendingMovies = async () => {
    try {
      const data = await getTrendingMovies();
      const { results } = data;
      setTrendingMovies(results);
    } catch (error) {
      console.error('Error fetching trending movies:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <Box>
      <CssBaseline />
      <Container>
        <Typography variant="h4" mt={3} mb={2}>
          Trending Movies
        </Typography>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <List movies={trendingMovies} location={location} />
        )}
      </Container>
    </Box>
  );
};
// Експорт
export default Home;

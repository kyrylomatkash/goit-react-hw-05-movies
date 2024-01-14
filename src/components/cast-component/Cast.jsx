// Імпорт бібліотек
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
// Імпорт логіки API запитів
import { getCast } from '../api-request/api-request';
// Імпорт стилів
import {
  StyledBox,
  CastCard,
  CastImage,
  CastName,
  CastPopularity,
  LoadingSpinner,
} from './cast.styles';
import imageUnavailable from './imageunavailable.png';
// Основна функція компоненту
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const defaultImgPath = imageUnavailable;
  // Отримування інформації про акторів
  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await getCast(movieId);
        const { cast } = data;
        setCast(cast);
      } catch (error) {
        console.error('Error fetching cast:', error.message);
        setError('Error fetching cast data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <StyledBox>
      {isLoading && <LoadingSpinner size={60} />}
      {!isLoading && !error && (
        <>
          {cast.length !== 0 ? (
            <Box display="flex" justifyContent="center" flexWrap="wrap">
              {cast.map(({ profile_path, id, original_name, popularity }) => (
                <CastCard key={id}>
                  {profile_path ? (
                    <CastImage
                      src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
                      alt={original_name}
                    />
                  ) : (
                    <img
                      src={defaultImgPath}
                      alt={original_name}
                      style={{ width: '200px', height: '200px' }}
                    />
                  )}
                  <CastName variant="subtitle1" fontWeight="bold" mt={2}>
                    {original_name}
                  </CastName>
                  <CastPopularity variant="subtitle1">
                    Popularity: {Math.round(popularity)}%
                  </CastPopularity>
                </CastCard>
              ))}
            </Box>
          ) : (
            <Typography>No information available</Typography>
          )}
        </>
      )}
      {error && <Typography color="error">{error}</Typography>}
    </StyledBox>
  );
};
// Експорт
export default Cast;

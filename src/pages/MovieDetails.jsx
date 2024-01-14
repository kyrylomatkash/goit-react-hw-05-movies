// Імпорт бібліотек
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import {
  CardContent,
  Typography,
  CardMedia,
  Button,
  Breadcrumbs,
  Grid,
  CircularProgress,
} from '@mui/material';
// Імпорт логіки API запитів
import { getMovieId } from '../components/api-request/api-request';
// Імпорт стилів
import {
  RoundedCard,
  ButtonsContainer,
  StyledButton,
} from './pages-styles/overview.styles';
// Основна функція компоненту
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // Отримання даних про фільм
  useEffect(() => {
    const fetchMovie = async id => {
      try {
        const data = await getMovieId(id);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie(movieId);
  }, [movieId]);

  const {
    overview,
    original_title,
    genres,
    vote_average,
    poster_path,
    release_date = [],
  } = movie;
  // Рейтинг фільму
  const rating = Math.round(vote_average * 10);

  return (
    <>
      {isLoading ? (
        <CircularProgress style={{ margin: 'auto' }} />
      ) : (
        !isLoading &&
        movie.original_title !== undefined && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Breadcrumbs>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ marginLeft: 2, marginTop: 3 }}
                  >
                    Go back to home
                  </Button>
                </Link>
              </Breadcrumbs>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={12} md={4}>
                {poster_path !== undefined && (
                  <CardMedia
                    component="img"
                    alt={original_title}
                    height="500"
                    image={`https://image.tmdb.org/t/p/w342/${poster_path}`}
                    style={{ width: '100%' }}
                  />
                )}
              </Grid>
              <Grid item xs={12} md={8}>
                <RoundedCard>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      {original_title}
                    </Typography>
                    <Typography variant="h5" color="textSecondary" gutterBottom>
                      {release_date}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Rating: {rating}%
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Overview
                    </Typography>
                    <Typography variant="body1">{overview}</Typography>
                    <Typography variant="h6" gutterBottom>
                      Genres
                    </Typography>
                    {genres.length !== 0 ? (
                      <Typography variant="body1">
                        {genres.map(element => element.name).join(', ')}
                      </Typography>
                    ) : (
                      <Typography variant="body1" color="textSecondary">
                        No information available
                      </Typography>
                    )}
                  </CardContent>
                </RoundedCard>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: '16px',
                }}
              >
                <ButtonsContainer>
                  <StyledButton
                    component={Link}
                    to={`/movies/${movieId}/cast`}
                    variant="outlined"
                  >
                    Cast
                  </StyledButton>
                  <StyledButton
                    component={Link}
                    to={`/movies/${movieId}/reviews`}
                    variant="outlined"
                  >
                    Reviews
                  </StyledButton>
                </ButtonsContainer>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Outlet />
            </Grid>
          </Grid>
        )
      )}
    </>
  );
};
// Експорт
export default MovieDetails;

// Імпорт бібліотек
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, CircularProgress } from '@mui/material'; // Додайте CircularProgress
// Імпорт логіки API запитів
import { getReviews } from '../api-request/api-request';
// Імпорт стилів
import {
  ReviewsContainer,
  StyledList,
  StyledListItem,
  AuthorText,
  ContentText,
} from './reviews.styles';
// Основна функція застосунку
const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Отримання відгуків
  useEffect(() => {
    const fetchReviews = async id => {
      try {
        const data = await getReviews(id);
        const { results } = data;
        setMovieReviews(results);
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews(movieId);
  }, [movieId]);

  return (
    <ReviewsContainer>
      {isLoading ? (
        <CircularProgress />
      ) : movieReviews.length !== 0 ? (
        <StyledList>
          {movieReviews.map(({ id, author, content }) => (
            <StyledListItem key={id}>
              <AuthorText variant="subtitle1">{author}:</AuthorText>
              <ContentText>{content}</ContentText>
            </StyledListItem>
          ))}
        </StyledList>
      ) : (
        <Typography>No reviews available</Typography>
      )}
    </ReviewsContainer>
  );
};
// Експорт
export default Reviews;

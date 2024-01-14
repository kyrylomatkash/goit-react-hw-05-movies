// Імпорт бібліотек
import React from 'react';
import { Typography, Container, Box } from '@mui/material';
// Основна функція компоненту
const Error = () => {
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4" color="error" align="center">
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body1" align="center">
          We apologize for the inconvenience. Please try again later.
        </Typography>
      </Box>
    </Container>
  );
};
// Експорт
export default Error;

// Імпорт бібліотек
import React from 'react';
import { TextField, Button } from '@mui/material';
// Основна функція компоненту
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
// Експорт
export default SearchForm;

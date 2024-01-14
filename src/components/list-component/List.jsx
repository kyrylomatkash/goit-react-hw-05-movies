// Імпорт бібліотек
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// Імпорт стилів
import {
  StyledBox,
  StyledList,
  StyledListItem,
  StyledLink,
  StyledTypography,
} from './list.styles';
// Основна функція компоненту
const List = ({ movies, location }) => {
  return (
    <StyledBox>
      <StyledList>
        {movies.map(
          ({ original_title, id }) =>
            original_title !== undefined && (
              <StyledListItem key={id}>
                <StyledLink
                  as={RouterLink}
                  to={{
                    pathname: `/movies/${id}`,
                    state: { from: location },
                  }}
                >
                  <StyledTypography variant="subtitle1" color="primary">
                    {original_title}
                  </StyledTypography>
                </StyledLink>
              </StyledListItem>
            )
        )}
      </StyledList>
    </StyledBox>
  );
};
// Експорт
export default List;

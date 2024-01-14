import styled from 'styled-components';
import { Box, Typography, List, ListItem } from '@mui/material';

export const ReviewsContainer = styled(Box)`
  margin-top: 20px;
`;

export const StyledList = styled(List)`
  margin-top: 10px;
`;

export const StyledListItem = styled(ListItem)`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const AuthorText = styled(Typography)`
  font-weight: bold;
`;

export const ContentText = styled(Typography)`
  margin-top: 8px;
`;

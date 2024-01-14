import styled from 'styled-components';
import { Box, List, ListItem, Typography } from '@mui/material';

export const StyledBox = styled(Box)`
  margin: 20px;
`;

export const StyledList = styled(List)`
  padding: 0;
`;

export const StyledListItem = styled(ListItem)`
  && {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export const StyledLink = styled.div`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledTypography = styled(Typography)`
  color: primary;
`;

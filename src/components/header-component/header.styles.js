import styled from 'styled-components';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  background-color: #2196f3;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

export const AppTitle = styled(Typography)`
  flex-grow: 1;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.5rem;
`;

export const NavigationBox = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationButton = styled(Button)`
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  margin-right: 1rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

// імпорт бібліотек
import React from 'react';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { ButtonGroup } from '@mui/material';
// Імпорт стилів
import {
  StyledAppBar,
  StyledToolbar,
  AppTitle,
  NavigationBox,
  NavigationButton,
} from './header.styles';

// Основна функція компоненту
const Header = () => {
  return (
    <>
      <StyledAppBar position="static">
        <StyledToolbar>
          <AppTitle variant="h6" component="div">
            Movies
          </AppTitle>
          <NavigationBox>
            <ButtonGroup variant="contained">
              <NavigationButton
                component={RouterLink}
                to="/"
                color="inherit"
                variant="text"
              >
                Home
              </NavigationButton>
              <NavigationButton
                component={RouterLink}
                to="/movies"
                color="inherit"
                variant="text"
              >
                Movies
              </NavigationButton>
            </ButtonGroup>
          </NavigationBox>
        </StyledToolbar>
      </StyledAppBar>
      <Outlet />
    </>
  );
};
// Експорт
export default Header;

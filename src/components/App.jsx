// Імпорт бібіліотек
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// Сторінки для маршрутизації
const Header = lazy(() => import('../components/header-component/Header'));
const Home = lazy(() => import('../pages/Home'));
const Search = lazy(() => import('../pages/Search'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../components/cast-component/Cast'));
const Reviews = lazy(() => import('../components/reviews-component/Reviews'));
const Error = lazy(() => import('../pages/Error'));

// Головна функція застосунку
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Search />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route
              path="reviews"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Reviews />
                </Suspense>
              }
            />
            <Route
              path="cast"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Cast />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
// Експорт
export default App;

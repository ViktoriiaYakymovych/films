import { createSelector } from "@reduxjs/toolkit";

export const selectMovies = (state) => state.movies.movies;
export const selectFavoritesMovies = (state) => state.movies.favorites;
export const selectIsLoading = (state) => state.movies.isLoading;
export const selectError = (state) => state.movies.error;
export const selectFilter = (state) => state.filter;

export const selectVisebleMovies = createSelector(
  [selectMovies, selectFilter],
  (movies, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(normalizedFilter)
    );
  }
);

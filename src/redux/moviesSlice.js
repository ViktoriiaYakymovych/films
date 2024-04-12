import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { fetchAllMovies, addMovie, editMovie, deleteMovie } from "./operations";

const initialState = {
  movies: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchAllMovies = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.movies = action.payload;
};

const handleAddMovie = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.movies.push(action.payload);
};

const handleEditMovie = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.movies = action.payload;
};

const handleDeleteMovie = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.movies = state.movies.filter((movie) => movie.id !== action.payload.id);
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter((item) => item.id !== payload);
    },
  },
  extraReducers: (bilder) =>
    bilder
      .addCase(fetchAllMovies.pending, handlePending)
      .addCase(addMovie.pending, handlePending)
      .addCase(editMovie.pending, handlePending)
      .addCase(deleteMovie.pending, handlePending)
      .addCase(fetchAllMovies.rejected, handleRejected)
      .addCase(addMovie.rejected, handleRejected)
      .addCase(editMovie.rejected, handleRejected)
      .addCase(deleteMovie.rejected, handleRejected)
      .addCase(fetchAllMovies.fulfilled, handleFetchAllMovies)
      .addCase(addMovie.fulfilled, handleAddMovie)
      .addCase(editMovie.fulfilled, handleEditMovie)
      .addCase(deleteMovie.fulfilled, handleDeleteMovie),
});

export const { addFavorites, removeFavorite } = moviesSlice.actions;

const moviesConfig = {
  key: "favorites-movies",
  storage,
  whitelist: ["favorites"],
};

export const moviesReducer = persistReducer(moviesConfig, moviesSlice.reducer);

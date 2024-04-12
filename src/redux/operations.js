import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = `http://localhost:8000/movies`;

export const fetchAllMovies = createAsyncThunk(
  "movies/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addMovie = createAsyncThunk(
  "movies/addMovie",
  async (newMovieData, thunkAPI) => {
    try {
      const { data } = await axios.post(newMovieData);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const editMovie = createAsyncThunk(
  "movies/editMovie",
  async (newMovieData, thunkAPI) => {
    try {
      const { data } = await axios.patch(newMovieData);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (movieId, thunkAPI) => {
    try {
      const { data } = await axios.delete(movieId);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

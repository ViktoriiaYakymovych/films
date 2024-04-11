import axios from "axios";

axios.defaults.baseURL = `http://localhost:8000/movies`;

const fetchAllMovies = async () => {
  try {
    const { data } = await axios.get();
    console.log(data);
    return data;
  } catch (err) {
    if (err.code !== "ERR_CANCELED") {
      console.log(err);
    }
  }
};

const fetchMovieDetails = async (movieId) => {
  try {
    const { data } = await axios.get(`${movieId}`);
    return data;
  } catch (err) {
    if (err.code !== "ERR_CANCELED") {
      console.log(err);
    }
  }
};

const addMovie = async (newMovieData) => {
  try {
    const { data } = await axios.post(newMovieData);
    console.log(data);
    return data;
  } catch (err) {
    if (err.code !== "ERR_CANCELED") {
      console.log(err);
    }
  }
};

const editMovie = async (newMovieData) => {
  try {
    const { data } = await axios.patch(newMovieData);
    console.log(data);
    return data;
  } catch (err) {
    if (err.code !== "ERR_CANCELED") {
      console.log(err);
    }
  }
};

const deleteMovie = async (movieId) => {
  try {
    const { data } = await axios.delete(movieId);
    console.log(data);
    return data;
  } catch (err) {
    if (err.code !== "ERR_CANCELED") {
      console.log(err);
    }
  }
};

const api = {
  fetchAllMovies,
  fetchMovieDetails,
  addMovie,
  editMovie,
  deleteMovie,
};

export default api;

import axios from "axios";

axios.defaults.baseURL = `http://localhost:8000/movies`;

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

const api = {
  fetchMovieDetails,
};

export default api;

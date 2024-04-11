import { useEffect, useState } from "react";
import api from "../../api";
import MoviesList from "../../components/MoviesList/MoviesList";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await api.fetchAllMovies();
        if (data === undefined) {
          return;
        }
        setMovies(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchMovies();
  }, []);
  return <>{movies.length > 0 && <MoviesList movies={movies} />}</>;
};

export default Movies;

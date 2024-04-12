import { useEffect, useState } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const id = movieId.slice(1);
    async function fetchMovieDetails() {
      try {
        const resp = await api.fetchMovieDetails(id);
        if (!resp) {
          return;
        }
        setMovieDetails(resp);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchMovieDetails(movieId);
  }, [movieId]);
  return (
    <div>
      <div>
        <span>Description: </span>
        <p>{movieDetails.description}</p>
      </div>
      <div>
        <span>Actors: </span>
        <p>{movieDetails.actors}</p>
      </div>
      <div>
        <span>Director: </span>
        <p>{movieDetails.director}</p>
      </div>
      <div>
        <span>Genre: </span>
        <p>{movieDetails.genre}</p>
      </div>
      {movieDetails.rating && <Rating value={movieDetails.rating} />}
    </div>
  );
};

export default MovieDetails;

import { useEffect, useState } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import { MovieDetailsSection } from "./MovieDetails.styled";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);

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
    <>
      {movieDetails && (
        <MovieDetailsSection>
          <div>
            <span>Description: </span>
            <p>{movieDetails.description}</p>
          </div>
          <div>
            <span>Actors: </span>
            <p>{movieDetails.actors.join(", ")}</p>
          </div>
          <div>
            <span>Director: </span>
            <p>{movieDetails.director}</p>
          </div>
          <div>
            <span>Genre: </span>
            <p>{movieDetails.genre.join(", ")}</p>
          </div>
          {movieDetails.rating && <Rating value={movieDetails.rating} />}
        </MovieDetailsSection>
      )}
    </>
  );
};

export default MovieDetails;

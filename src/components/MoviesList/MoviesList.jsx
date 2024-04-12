import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import { selectFavoritesMovies } from "../../redux/selectors";
import { addFavorites, removeFavorite } from "../../redux/moviesSlice";

const MoviesList = ({ movies }) => {
  const favorites = useSelector(selectFavoritesMovies);
  const dispatch = useDispatch();

  const isFavorite = (id) => favorites.some((item) => item?.id === id);
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={isFavorite(movie.id)}
          onAddFavorite={() => dispatch(addFavorites(movie))}
          onRemoveFavorite={() => dispatch(removeFavorite(movie.id))}
        />
      ))}
    </ul>
  );
};

export default MoviesList;

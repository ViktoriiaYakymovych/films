import React from "react";
import { useSelector } from "react-redux";
import { selectFavoritesMovies } from "../../redux/selectors";
import MoviesList from "../../components/MoviesList/MoviesList";
import { FavoriteTitle, StyledLink } from "./Favorites.styled";

const Favorites = () => {
  const movies = useSelector(selectFavoritesMovies);
  return (
    <>
      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <FavoriteTitle>
          You have not added favorites movies. Redirect to{" "}
          <StyledLink to={"/movies"}>all movies</StyledLink> to choose favorite
          one.
        </FavoriteTitle>
      )}
    </>
  );
};

export default Favorites;

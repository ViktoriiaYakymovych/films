import React from "react";
import { useSelector } from "react-redux";
import { selectFavoritesMovies } from "../../redux/selectors";
import MoviesList from "../../components/MoviesList/MoviesList";
import { NavLink } from "react-router-dom";

const Favorites = () => {
  const movies = useSelector(selectFavoritesMovies);
  return (
    <>
      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <div>
          You have not added favorites Movies. Redirect to{" "}
          <NavLink to={"/movies"}>All Movies</NavLink> to choose favorite one.
        </div>
      )}
    </>
  );
};

export default Favorites;

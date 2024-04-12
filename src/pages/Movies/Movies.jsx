import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectVisebleMovies } from "../../redux/selectors";
import { fetchAllMovies } from "../../redux/operations";
import MoviesList from "../../components/MoviesList/MoviesList";
import Filter from "../../components/Filter/Filter";
import { ModalWindow } from "../../components/Modal/Modal";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";

const Movies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector(selectVisebleMovies);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  return (
    <>
      <Filter />
      <button type="button" onClick={() => setIsModalOpen(true)}>
        Add Movie
      </button>
      {movies.length > 0 && <MoviesList movies={movies} />}
      <ModalWindow
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <AddMovieForm />
      </ModalWindow>
    </>
  );
};

export default Movies;

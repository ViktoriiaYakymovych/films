import { NavLink } from "react-router-dom";
import Rating from "../Rating/Rating";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/operations";
import { useState } from "react";
import { ModalWindow } from "../Modal/Modal";
import EditMovieForm from "../EditMovieForm/EditMovieForm";

const MovieCard = ({ movie, isFavorite, onAddFavorite, onRemoveFavorite }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const onFavoriteClick = () => {
    isFavorite ? onRemoveFavorite() : onAddFavorite();
  };

  return (
    <li>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.title}</p>
      <Rating value={movie.rating} />
      <p>{movie.release_date}</p>
      <NavLink to={`/movies/:${movie.id}`}>Show details</NavLink>
      <div>
        <button type="button" onClick={onFavoriteClick}>
          {isFavorite ? "Remove from" : "Add to"} favorite
        </button>
        <button type="button" onClick={() => setIsModalOpen(true)}>
          Edit Movie
        </button>
        <button type="button" onClick={() => dispatch(deleteMovie(movie.id))}>
          Delete Movie
        </button>
      </div>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <EditMovieForm />
      </ModalWindow>
    </li>
  );
};

export default MovieCard;

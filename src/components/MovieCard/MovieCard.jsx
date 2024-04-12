import Rating from "../Rating/Rating";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/operations";
import { useState } from "react";
import { ModalWindow } from "../Modal/Modal";
import EditMovieForm from "../EditMovieForm/EditMovieForm";
import { List, CardWrap, BtnWrap } from "./MovieCard.styled";
import { StyledLink } from "../../pages/Home/Home.styled";
import { Button } from "../../pages/Movies/Movies.styled";

const MovieCard = ({ movie, isFavorite, onAddFavorite, onRemoveFavorite }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const onFavoriteClick = () => {
    isFavorite ? onRemoveFavorite() : onAddFavorite();
  };

  return (
    <List>
      <img src={movie.image} alt={movie.title} width={210} height={310} />
      <CardWrap>
        <p>{movie.title}</p>
        <Rating value={movie.rating} />
        <p>{movie.release_date}</p>
        <StyledLink to={`/movies/:${movie.id}`}>Show details</StyledLink>
        <BtnWrap>
          <Button type="button" onClick={onFavoriteClick}>
            {isFavorite ? "Remove from" : "Add to"} favorite
          </Button>
          <Button type="button" onClick={() => setIsModalOpen(true)}>
            Edit Movie
          </Button>
          <Button type="button" onClick={() => dispatch(deleteMovie(movie.id))}>
            Delete Movie
          </Button>
        </BtnWrap>
      </CardWrap>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <EditMovieForm />
      </ModalWindow>
    </List>
  );
};

export default MovieCard;

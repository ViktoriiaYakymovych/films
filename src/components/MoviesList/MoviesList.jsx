import Rating from "../Rating/Rating";

const MoviesList = ({ movies }) => {
  console.log(movies);
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <p>{movie.title}</p>
          <Rating value={movie.rating} />
          <p>{movie.release_date}</p>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

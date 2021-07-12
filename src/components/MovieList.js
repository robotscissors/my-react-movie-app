import { MovieTitle } from "./MovieTitle";
import { MovieMoreButton } from "./MovieMoreButton";
import { MovieImage } from "./MovieImage";

export const MovieList = ({movies}) => {

const list = movies.map((movie, index) =>
  <div className = "movie-card" key={index}>
    <MovieImage       movie = {movie} />
    <MovieTitle       movie = {movie} />
    <MovieMoreButton  movie = {movie} />
  </div>
);

  return(
    <div className = "movie-list">
      {list}
    </div>
  )
}
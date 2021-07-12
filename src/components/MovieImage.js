export const MovieImage = ({movie}) => {

  return (
    <div className = "movie-image">
      <img src={movie.Poster} width="150px" alt= {movie.Title} />
    </div>
  )

}
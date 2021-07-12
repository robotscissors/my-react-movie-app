import {MovieDetails} from './MovieDetails'
import React, { useState, useEffect } from 'react'
import {Modal} from './Modal'


export const MovieMoreButton = ({movie}) => {
  const [show, setShow] = useState(false);
  const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
      .then(res => res.json())
      .then(data => setMovieDetail(data))
  }, [movie]);

  if (movie){
    return (
      <div id="button-div">
        <button className="movie-button"
          onClick={() => setShow(true)}>Movie</button>
          <Modal onClose={() => setShow(false)} show={show} children={<MovieDetails details={movieDetail} />} />
      </div>
    )
  } else {
    return null;
  }
}
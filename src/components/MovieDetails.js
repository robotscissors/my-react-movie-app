import React from "react"
import { useState, useEffect } from "react"
import MovieService from "../services/movie.service"

import './MovieDetails.css'
const movieService = new MovieService();

export const MovieDetails = ({movieID}) => {
  const [details, setDetails] = useState();

  const getMovieDetails = async (movieID) => {
    const details = await movieService.getMovieById(movieID);
    setDetails(details);
  };

  useEffect(() => {
    getMovieDetails(movieID);
  }, [movieID]);

  if (details){
    return (
      <div className="movie-details">
        <div className="movie-details-poster">
          <img alt="movie poster" src={details.Poster} />
        </div>
          <div className="movie-details-info">
            <div className="movie-details-title">
              {details.Title}
            </div>
            <div className="imdb-details-rating">
              {details.imdbRating}
            </div>
            <div style={{clear:'both'}}></div>
            <div className="movie-details-rated">
              <button className="rating-button">{details.Rated}</button>
              <button className="rating-button">{details.Runtime}</button>
              <button className="rating-button">{details.Genre}</button>

            </div>
            <div className="movie-details-text">
              <h1>Plot</h1>
              <p>{details.Plot}</p>
            </div>
            <div className="movie-details-text">
              <h1>Actors</h1>
              <p>{details.Actors}</p>
            </div>
          </div>
          <span style={{clear:'both'}}></span>
      </div>
    )
  } else {
    return(<h2>loading...</h2>)
  }
}
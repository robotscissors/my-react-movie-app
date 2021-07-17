import React from 'react';
import { useState, useEffect } from "react";
import { MovieTitle } from "./MovieTitle";
import { MovieMoreButton } from "./MovieMoreButton";
import { MovieImage } from "./MovieImage";
import MovieService from "../services/movie.service";

const movieService = new MovieService();

export const MovieList = () => {
  const [movies, setMovies] = useState();

  const getMovieList = async (title) => {
    const movies = await movieService.getMoviesByTitle(title);
    setMovies(movies.Search);
  };

  useEffect(() => {
    getMovieList('flintstones');
  }, []);

  if (movies){
    const list = movies.map((movie, index) =>
      <div className = "movie-card" key={index}>
        <MovieImage       movie = {movie} />
        <MovieTitle       movie = {movie} />
        <MovieMoreButton  movieID = {movie.imdbID} />
      </div>
    );

    return (
      <div className = "movie-list">
      {list}
      </div>
    )
  } else {
    return null;
  }
}
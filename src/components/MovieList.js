import React from 'react';
import { useState, useEffect } from "react";
import { MovieTitle } from "./MovieTitle";
import { MovieMoreButton } from "./MovieMoreButton";
import { MovieImage } from "./MovieImage";
import MovieService from "../services/movie.service";

const movieService = new MovieService();

export const MovieList = ({searchTerm, searchType}) => {
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const getMovieList = async (title, type, page) => {
    const movies = await movieService.getMoviesByTitle(title, type, page);
    setTotalPages(Math.ceil(movies.totalResults/10))
    setMovies(movies.Search);
  };
  const movePage = (e, increment) => {
    e.preventDefault();
    if ((page + increment) === 0){
      setPage(1)
    } else if ((page + increment) > totalPages) {
      setPage(totalPages)
    } else {
      setPage(page + increment);
    }

  }

  useEffect(() => {
    getMovieList(searchTerm, searchType, page);
  }, [searchTerm, searchType, page]);


  if (movies && searchTerm){
    const list = movies.map((movie, index) =>
      <div className = "movie-card" key={index}>
        <MovieImage       movie = {movie} />
        <MovieTitle       movie = {movie} />
        <MovieMoreButton  movieID = {movie.imdbID} />
      </div>
    );

    return (
      <div className = "results-container">
        <div className = "results-pagination">
          <button className="pagination" onClick={(e) => movePage(e ,-1)}> « </button>
          <button className="pagination" onClick={(e) => movePage(e, 1)}> » </button>
          <div className="page-number"> Page: {page} of {totalPages}</div>
        </div>
        <div style={{clear:'both'}}></div>
        <div className = "movie-list">
          {list}
        </div>
      </div>
    )
  } else {
    return (
      <div className = "results-container">
        No results found.
      </div>
    )
  }
}
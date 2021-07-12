import React from "react"
import './MovieDetails.css'

// const details = {"Title":"Batman Begins","Year":"2005","Rated":"PG-13","Released":"15 Jun 2005","Runtime":"140 min","Genre":"Action, Adventure","Director":"Christopher Nolan","Writer":"Bob Kane, David S. Goyer, Christopher Nolan","Actors":"Christian Bale, Michael Caine, Ken Watanabe","Plot":"After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.","Language":"English, Mandarin","Country":"United Kingdom, United States","Awards":"Nominated for 1 Oscar. 13 wins & 79 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"8.2","imdbVotes":"1,339,586","imdbID":"tt0372784","Type":"movie","DVD":"09 Sep 2009","BoxOffice":"$206,852,432","Production":"Warner Brothers, Di Bonaventura Pictures","Website":"N/A","Response":"True"}

export const MovieDetails = ({details}) => {
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
}
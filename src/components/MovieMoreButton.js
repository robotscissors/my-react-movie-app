import {MovieDetails} from './MovieDetails'
import React, { useState, useEffect } from 'react'
import {Modal} from './Modal'


export const MovieMoreButton = ({movieID}) => {
  const [show, setShow] = useState(false);

  if (movieID){
    return (
      <div id="button-div">
        <button className="movie-button"
          onClick={() => setShow(true)}>Movie</button>
          <Modal onClose={() => setShow(false)} show={show} children={<MovieDetails movieID={movieID} />} />
      </div>
    )
  } else {
    return null;
  }
}
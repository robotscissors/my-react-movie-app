import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { MovieList } from './components/MovieList';

const searchName = "Cutting Edge";

function App() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${searchName}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
      .then(res => res.json())
      .then(data => setMovies(data['Search']));
  }, []);

  if (movies){
    return (
      <div className="App">
        <header className="App-header">
          Movie List
        </header>
        <div className="App-body">
          <MovieList movies={movies}/>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default App;
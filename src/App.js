import React from 'react';
import './App.css';


import { MovieList } from './components/MovieList';


function App() {

    return (
      <div className="App">
        <header className="App-header">
          Movie List
        </header>
        <div className="App-body">
          <MovieList />
        </div>
      </div>
    )
}

export default App;
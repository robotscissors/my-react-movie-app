import React from 'react';
import './App.css';
import { useState } from "react";
import { SearchBar } from './components/SearchBar'
import { MovieList } from './components/MovieList';


function App() {
  const [searchTerm, setSearchTerm] = useState();
  const [searchType, setSearchType] = useState();

  const sendSearchData = (formData) => {
    if (formData.movieSearch) setSearchTerm(formData.movieSearch);
    if (formData.movieType) setSearchType(formData.movieType);
  }

    return (
      <div className="App">
        <header className="App-header">
          Movie List
          <SearchBar sendSearchData={sendSearchData} />
        </header>
        <div className="App-body">
          <MovieList searchTerm={searchTerm} searchType={searchType} />
        </div>
      </div>
    )

}

export default App;
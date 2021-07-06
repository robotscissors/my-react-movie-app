import logo from './logo.svg';
import './App.css';
import { MovieList } from './components/MovieList';

const movies = [{"Title":"Hello"}]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World
        <MovieList movies={movies}/>
      </header>
    </div>
  );
}

export default App;

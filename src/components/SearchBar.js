export const SearchBar = () => {
  return (
    <div className="App-search">
     <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="movie-search">Search Movies</span>
        </label>
        <input
            type="text"
            id="movie-search"
            placeholder="Search movie names"
            name="movie-search"
        />
        <button type="submit">Search</button>
    </form>
    </div>
  )
}
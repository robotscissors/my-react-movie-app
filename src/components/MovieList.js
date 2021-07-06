

export const MovieList = ({movies}) => {
const x = [1,2,3];

  const list = x.map((x) =>
      <li>Hello {x}</li>
  );

    return(
    <div className = "movie-card">
      <h1>Hello</h1>
      <p>Test</p>
      <ul>{list}</ul>
    </div>
    )



}
let myMovieList;
let myMovie;

const apiKey = "";

export async function getMoviesByName(searchName){
    const response = await fetch(`http://www.omdbapi.com/?s=${searchName}&apikey=${apiKey}`);
    myMovieList = await response.json();
};

export function getMovieDetailsById(movieId){
    const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`);
    myMovie = await response.json();
};

await getMoviesByName("Cutting Edge");
await getMovieDetailsById("tt0118884");

console.log( await myMovieList);
console.log( await myMovie);
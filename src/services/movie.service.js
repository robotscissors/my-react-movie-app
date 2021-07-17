import axios from "axios";

export default class MovieService{

  getMoviesByTitle(title){
    return axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  }

  getMovieById(id){
    return axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  }
}
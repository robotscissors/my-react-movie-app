import axios from "axios";

export default class MovieService{

  getMoviesByTitle(title, type, page){
    let optional = "";

    if (type){
      optional = `&type=${type}&`
    }

    return axios.get(`http://www.omdbapi.com/?s=${title}${optional}&page=${page}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  }

  getMovieById(id){
    return axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  }
}
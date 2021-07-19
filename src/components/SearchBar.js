import { useState, useEffect } from "react";

export const SearchBar = ({sendSearchData}) => {


  const [formData, setFormData] = useState({
    movieSearch: '',
    movieType: ''
  });


  const onFormSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({...formData, [name]: value })

    // sendSearchData(formData);
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value })
  }


  useEffect(() => {
    sendSearchData(formData);
  }, [formData]);


  return (
    <div className="App-search">
     <form onSubmit={(e) => onFormSubmit(e)}>
        <input
            onChange={(e) => onInputChange(e)}
            type="text"
            placeholder="Search movie names"
            name="movieSearch"
            id="movieSearch"
        />
        <select name="movieType" id="movieType" onChange={(e) => onInputChange(e)}>
          <option value="">Type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
        <button id="submit" type="submit">Search</button>
    </form>
    </div>
  )
}
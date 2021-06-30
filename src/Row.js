import React, { useState, useEffect } from 'react';
import axios from './axios';

// the link to get the imgs
const base_url = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // if [], then it runs only once when the row loads, and won't run again
  // if [fetchUrl], it runs every time we call the row, and in this case it necessary because I'm passing it for outside the useEffect
  // console.table(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-posters'>
        {movies &&
          movies.map((movie) => (
            <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
          ))}
      </div>
    </div>
  );
}

export default Row;

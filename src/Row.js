import React, { useEffect } from 'react';
import axios from './axios';



// const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl}) {
  // const [movies, setMovies] = useState([]);
  

  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(fetchUrl);
      // setMovies(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  
  

  return (
    <div className="row">
      <h2>{title}</h2>
      
    </div>
  );
}

export default Row;
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className='App'>
      <Row
        title='NETFLIX ORIGINALS'
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title='Trending' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;

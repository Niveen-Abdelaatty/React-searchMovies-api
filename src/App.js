import './App.css';
import { useState, useEffect } from 'react';

import { getMovie } from './services/omdbapi';

import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
  // state to hold movie data
  const [movie, setMovie] = useState(null);

  // function that is given the search term then does the fetch request for the movie data and stores it in state

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovie('Godfather');
      setMovie(data);
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <Form getMovie={getMovie} setMovie={setMovie} />
      {movie && <MovieDisplay movie={movie} />}
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
  // variable with your apiKey
  const apiKey = "98e3fb1f";

  // state to hold movie data
  const [ movies, setMovies ] = useState(null);

  // function that is given the search term then does the fetch request for the movie data and stores it in state
  const getMovie = async (searchTerm) => {
    e.preventDefault();
    const savedMovies = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);

    // parse JSON response into a javascript object
    const data = savedMovies.json();

    // set the Movie state to the movie
    setMovies(data);
  };

  return (
    <div className='App'>
      <Form getMovie={getMovie} />
      <MovieDisplay />
    </div>
  );
}

export default App;

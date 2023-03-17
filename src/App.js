import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
  const [ movies, setMovies ] = useState(null);

  const searchMovies = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className='App'>
      <Form searchMovies={searchMovies} />
      <MovieDisplay />
    </div>
  );
}

export default App;

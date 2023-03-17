function Form({ searchMovies }) {
  return (
    <div>
      <form  onClick={(e) => searchMovies(e)}>
        <input type='text' placeholder="search movies" />
        <input type='submit' />
      </form>
    </div>
  );
}

export default Form;

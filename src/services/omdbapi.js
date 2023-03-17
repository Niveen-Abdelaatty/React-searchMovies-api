export const getMovie = async (searchTerm) => {
  // variable with your apiKey
  const apiKey = '98e3fb1f';
  try {
    const savedMovies = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );

    // parse JSON response into a javascript object
    return await savedMovies.json();
  } catch (e) {
    console.error(e);
  }
};

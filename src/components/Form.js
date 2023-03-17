import { useState } from 'react';

// a component to get the search term from the user
function Form({ getMovie, setMovie }) {
  // creating state to track our form value
  const [formData, setFormData] = useState({ searchTerm: '' });

  // handleChange - updates formData when we type into form
  const handleChange = (e) => {
    // use the event object to detect key and value to update
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handleSubmit function that passes the formData to getMovie via the moviesearch prop
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData.searchTerm);

    const data = await getMovie(formData.searchTerm);
    setMovie(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='searchTerm'
          value={formData.searchTerm}
          onChange={handleChange}
          placeholder='search movies'
        />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
}

export default Form;

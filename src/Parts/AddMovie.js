import { useState } from 'react';
import '../CSS/AddMovie.css';

function AddMovie({ setNewData, data, addTheMovie }) {
  // State variables for controlling the visibility and storing the new movie data
  const [showaddfilm, setShowaddfilm] = useState(false);
  const [newfilm, setNewfilm] = useState({
    id: Math.random(),
    title: "",
    image: "",
    rate: 0,
    decr: "",
    stream: "",
    lang: "",
    genre: "",
    download: ""
  });

  // Handle changes in the input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    const rateValue = Math.min(Math.max(parseFloat(value), 0), 10);
    // Update the state with the new values
    setNewfilm(prevFilm => ({
      ...prevFilm,
      [name]: value
    }));
  };
  return (
    <>
      <div className="all">
        {/* Button to toggle the visibility of the form */}
        <button className='plus' onClick={() => setShowaddfilm(!showaddfilm)}>
          {showaddfilm ? <>-</> : <>+</>}
        </button>
        
        {showaddfilm ?
          <>
            {/* Form for adding a new movie */}
            <div className='input'>
              {/* Input field for image URL */}
              <input type='text' name='image' className='image' placeholder='URL link' onChange={(event) => handleChange(event)} value={newfilm.image} /> <br />
              {/* Input field for movie title */}
              <input type='text' name='title' className='title' placeholder='Name' onChange={(event) => handleChange(event)} value={newfilm.title} /> <br />
              {/* Textarea for movie description */}
              <textarea name='decr' cols='30' rows='10' placeholder='Description' onChange={(event) => handleChange(event)} value={newfilm.decr}></textarea> <br />
              {/* Input field for movie rating */}
              <input type='number' name='rate' className='rate' placeholder='Rate' onChange={(event) => handleChange(event)} value={newfilm.rate} min="0" max="10" step="0.1" /> <br /> <br />
              {/* Input field for streaming link */}
              <input type='text' name='stream' className='stream' placeholder='Link to watch' onChange={(event) => handleChange(event)} value={newfilm.stream} /> <br />
              {/* Input field for download link */}
              <input type='text' name='download' className='download' placeholder='Link to Download' onChange={(event) => handleChange(event)} value={newfilm.download} /> <br />
              {/* Dropdown for selecting movie genre */}
              <select id='genre' name='genre' onChange={(event) => handleChange(event)} value={newfilm.genre}>
                <option value='genre'>Select Genre</option>
                <option value='AR'>AR</option>
                <option value='FR'>FR</option>
                <option value='EN'>EN</option>
              </select>
              
              {/* Button to add the movie */}
              <button
                className="AddBtn"
                onClick={() => {
                  addTheMovie(newfilm);
                  // Reset the form after adding the movie
                  setNewfilm({
                    id: Math.random(),
                    title: "",
                    image: "",
                    rate: 0,
                    decr: "",
                    stream: "",
                    lang: "",
                    genre: "",
                    download: ""
                  });
                }}
              >
                Add Movie
              </button>
            </div>
          </> : null}
      </div>
    </>
  );
}

export default AddMovie;

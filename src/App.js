// Importing necessary components and styles
import './App.css';
import AddMovie from './Parts/AddMovie';
import MovieList from './Parts/MovieList';
import MyNav from './Parts/MyNav';
import data from './DB.json'; // Importing data from JSON file
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import FilmIntroducing from './Parts/FilmIntroducing';

// Main App component
function App() {
  // State to manage movie data
  const [newData, setNewData] = useState(data);
  // Function to add a new movie to the data
  const addTheMovie = (theNewMovie) => {
    return setNewData([...newData, theNewMovie]);
  }
  // State to manage range filter value
  const [rangeValue, setRangeValue] = useState(5);
  // State to manage title filter value
  const [titleValue, setTitleValue] = useState("");
  // Render the App component

  const [getDataJson,setGetDataJson] = useState([])
  return (
    <>
    {/* Navigation component with filtering options */}
    <MyNav setRangeValue={setRangeValue} setTitleValue={setTitleValue} rangeValue={rangeValue} />
    <Routes>
    <Route path='home' element={
      <div className="AllComponents">
        {/* MovieList component to display the list of movies */}
        <MovieList setGetDataJson={setGetDataJson} data={newData} rangeValue={rangeValue} titleValue={titleValue} setRangeValue={setRangeValue} setTitleValue={setTitleValue}/>
        {/* AddMovie component for adding new movies */}
        <AddMovie data={data} setNewData={setNewData} addTheMovie={addTheMovie} />
      </div>
    }/>
    <Route path='' element={
      <div className="AllComponents">
        {/* MovieList component to display the list of movies */}
        <MovieList setGetDataJson={setGetDataJson} data={newData} rangeValue={rangeValue} titleValue={titleValue} setRangeValue={setRangeValue} setTitleValue={setTitleValue}/>
        {/* AddMovie component for adding new movies */}
        <AddMovie data={data} setNewData={setNewData} addTheMovie={addTheMovie} />
      </div>
    }/>
    <Route path='/:id' element={<FilmIntroducing getDataJson={getDataJson}/>}/>
    </Routes>
      
    </>
  );
}

// Exporting the App component
export default App;

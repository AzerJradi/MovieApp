// Importing React library and MovieCard component
import React from 'react'
import MovieCard from './MovieCard'
import '../CSS/MovieList.css'

// MovieList functional component that receives data, rangeValue, and titleValue as props
function MovieList({data,rangeValue,titleValue,setGetDataJson }) {
  return (
    // Wrapping MovieCard component in a div with the class 'MovieCard'
    <div className='MovieCard'>
    <MovieCard setGetDataJson={setGetDataJson} titleValue={titleValue} rangeValue={rangeValue}  data ={data} />
    </div>
  )
}

// Exporting MovieList component as the default export
export default MovieList

import React from 'react'
import '../CSS/Card.css'

// MovieCard component takes data, rangeValue, and titleValue as props
function MovieCard({data,rangeValue,titleValue }) {
  // Extracting an array of rates from the data
  const rate=data.map(el => el.rate)
  // Finding the maximum rate in the array
  const maximumRate = Math.max(...rate)
  // Function to show an alert if the specified rangeValue is greater than the maximum rate
  function alertRate(x,y){
    if (x>y){alert("there is no film availble more than the rate " + x )}
  }
  // Calling the alertRate function with rangeValue and maximumRate
  alertRate(rangeValue,maximumRate)

  // Returning the JSX for rendering MovieCard component
  return (
    <>
    {data.filter((film)=> (film.title.toLocaleLowerCase().includes (titleValue.toLocaleLowerCase()) && film.rate >= rangeValue)).map((film)=>
            <div className='card'>
            <img src={film.image} className="image" alt='' />
            <div className="cardPart">
                <b><p className="title">{film.title}</p></b>
                <p className="decr">{film.decr}</p>
                <p className="genre"><b>Genre:</b> {film.genre}</p>
                <p className="rate"><b>Rate:</b> {film.rate}</p>
                <a href={film.download} className='btnn'>Download</a> <br />
                <a href={film.stream} className='btnn'>Watch Now</a>
                <p className="Lan"><b>LAnguage:</b> {film.lang}</p>
            </div>
        </div>
    )}
    </>
  )
}

export default MovieCard

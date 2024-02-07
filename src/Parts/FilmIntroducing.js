import React from 'react'
import '../CSS/FilmIntroducing.css'
import { useParams } from 'react-router-dom'
function FilmIntroducing({getDataJson}) {

  const para =useParams();
  const TheFilmByID = getDataJson.filter((film)=>film.id == para.id)[0];
  console.log(TheFilmByID.trailer)
  if (TheFilmByID) {
    return( 
        <div className='FilmIntroducing-content'>
        <iframe className='trailler'width="100%" height="500px" src={TheFilmByID.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p className="title-film">{TheFilmByID.title}</p>
        <p className="title-des"> {TheFilmByID.decr} </p>
        <div className='genre-rate-lan'> 
          <p className="title-genre"><b>{TheFilmByID.genre}</b></p>
          <p className="title-rate"><b>{TheFilmByID.rate}</b></p>
          <p className="title-Lan"><b>{TheFilmByID.lang}</b></p>
        </div>
        <a href={TheFilmByID.download}>
          <button class="Btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" class="svgIcon">
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
          </svg>
          <span class="icon2"></span>
          </button>
        </a>
        <iframe src={TheFilmByID.stream} width="100%" height="800px" frameborder="0" allowfullscreen className='to-watch_film'></iframe>
    </div>
  )
  }else{
      return(
          <div className="error-message">
            Movie Not Found
          </div>
      )
  }
  
}

export default FilmIntroducing

import React from 'react';
import { Link } from "react-router-dom"
import { dateFormat } from '../utilities/format';
import { ratingAverage } from '../utilities/format';


function truncateOverview(overview, maxLength) {
  if (overview.length > maxLength) {
    return overview.substring(0, maxLength) + "...";
  }
  return overview;
}

const Movie = ({ movieCard }) => {
  const truncatedOverview = truncateOverview(movieCard.overview, 90);

  return (
    <div className='popular-movie'>
      {/* <Link to={`/movie/${movieCard.id}`}> */}
        <div className='movie-image-wrap'>
          <img key={movieCard.id} src={`https://image.tmdb.org/t/p/original/${movieCard.poster_path}`} alt={movieCard.title} />
          <div className="overlay">
            <p className='movie-card-release-date'>{dateFormat(movieCard.release_date) }</p>
            <h2 className='movie-card-title'>{movieCard.title}</h2>
            <p className='movie-card-average'>{ratingAverage(movieCard.vote_average)}</p>
            <p className='movie-card-overv'>{truncatedOverview}</p>
            <div className="movie-button">
               <Link to={`/movie/${movieCard.id}`}>
              <button className='more-info' role='button'>More Info</button>
              </Link>
            </div>
           
          </div>
        </div>
      {/* // </Link> */}
    </div>
  );
}

export default Movie;
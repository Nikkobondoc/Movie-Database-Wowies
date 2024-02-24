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
  // limit overview to only 90 words
  const truncatedOverview = truncateOverview(movieCard.overview, 90);

  return (
    <div>

        <div className='movie-image-wrap'>
          <img key={movieCard.id} src={`https://image.tmdb.org/t/p/original/${movieCard.poster_path}`} alt={movieCard.title} />

          <div className="overlay">
            <h2 className='movie-card-title'>{movieCard.title}</h2>
            <p className='movie-card-release-date'>
              {movieCard.release_date === "" ? <p>Date Unavailable</p> : dateFormat(movieCard.release_date) }
            </p>
            <p className='movie-card-average'>
              {ratingAverage(movieCard.vote_average)}
            </p>
            <p className='movie-card-overv'>{truncatedOverview}</p>

            <div className="movie-button">
               <Link to={`/movie/${movieCard.id}`}>
              <button className='more-info' role='button'>More Info</button>
              </Link>
            </div>
           
          </div>

        </div>

    </div>
  );
}

export default Movie;
import React from 'react';
import { Link } from "react-router-dom"

function truncateOverview(overview, maxLength) {
  if (overview.length > maxLength) {
    return overview.substring(0, maxLength) + "...";
  }
  return overview;
}

const Movie = ({ movieCard }) => {
  const truncatedOverview = truncateOverview(movieCard.overview, 100);

  return (
    <div className='popular-movie'>
      {/* <Link to={`/movie/${movieCard.id}`}> */}
        <div className='movie-image-wrap'>
          <img key={movieCard.id} src={`https://image.tmdb.org/t/p/w200/${movieCard.poster_path}`} alt={movieCard.title} />
          <div className="overlay">
            <p className='movie-card-title'>{movieCard.title}</p>
            <p className='movie-card-release-date'>{movieCard.release_date}</p>
            <p className='movie-card-average'>{movieCard.vote_average}</p>
            <p className='movie-card-overv'>{truncatedOverview}</p>
            <Link to={`/movie/${movieCard.id}`}>
            <button className='more-info' role='button'>More Info</button>
            </Link>
          </div>
        </div>
      {/* // </Link> */}
    </div>
  );
}

export default Movie;
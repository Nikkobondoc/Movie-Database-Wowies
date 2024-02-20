import React, { useState } from 'react';
import useWindowDimensions from '../components/ScreenSize';
import { dateFormat, minToHrMin, ratingAverage } from '../utilities/format';
import AddFavourites from './AddFavourites';

function MovieDetail({ movie }) {
  const dimensions = useWindowDimensions();
  const desktopWidth = 1440;
  const [favourites, setFavourites] = useState([]);
  

  const isDesktop = dimensions.width > desktopWidth;

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  return (
    <div>
      <div className="movie-backdrop">
        {movie.backdrop_path === null ? (
          <img className="no-backdrop" src={noDisplay} alt="No Backdrop Poster" />
        ) : (
          <img className="backdrop-img" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} width="300" />
        )}
      </div>

      <div className="movie-info-single">
        <div className="release-runtime-vote">
          <p>{movie.release_date === "" ? <p>Date Unavailable</p> : dateFormat(movie.release_date)}</p>
          <p>{minToHrMin(movie.runtime)}</p>
          <p className="vote">{ratingAverage(movie.vote_average)}</p>
        </div>
        <h2>{movie.title}</h2>
        <p className="desc">{movie.overview}</p>
        <p>Genre: {movie.genres.map(genre => genre.name).join(", ")}</p>
        
        <div onClick={() => addFavouriteMovie(movie)}>
          <AddFavourites /> 
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;

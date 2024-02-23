
// import React, { useState, useEffect } from 'react';
// import useWindowDimensions from '../components/ScreenSize';
// import { dateFormat, minToHrMin, ratingAverage } from '../utilities/format';
// import AddFavourites from './AddFavourites';

// export default function MovieDetail({ movie }) {
//   const dimensions = useWindowDimensions();
//   const desktopWidth = 1440;
//   const [favourites, setFavourites] = useState([]);

//   const isDesktop = dimensions.width > desktopWidth;

//   const addFavouriteMovie = (movie) => {
//     const movieIndex = favourites.findIndex((item) => item.id === movie.id);
  
//     if (movieIndex === -1) {
//       const newFavouriteMovies = [...favourites, movie];
//       setFavourites(newFavouriteMovies);
//       localStorage.setItem('favourites-movies', JSON.stringify(newFavouriteMovies));
//     } else {
//       const newFavouriteMovies = [...favourites];
//       newFavouriteMovies.splice(movieIndex, 1);
//       setFavourites(newFavouriteMovies);
//       localStorage.setItem('favourites-movies', JSON.stringify(newFavouriteMovies));
//     }
//   };
  
//   useEffect(() => {
//     const storedFavourites = localStorage.getItem('favourites-movies');
//     console.log('Stored favorites:', storedFavourites);
//     if (storedFavourites) {
//       setFavourites(JSON.parse(storedFavourites));
//     }
//   }, []);

//   return (
//     <div>
//       <div className="movie-backdrop">
//         {movie.backdrop_path === null ? (
//           <img className="no-backdrop" src={noDisplay} alt="No Backdrop Poster" />
//         ) : (
//           <img className="backdrop-img" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} width="300" />
//         )}
//       </div>

//       <div className="movie-info-single">
//         <div className="release-runtime-vote">
//           <p>{movie.release_date === "" ? <p>Date Unavailable</p> : dateFormat(movie.release_date)}</p>
//           <p>{minToHrMin(movie.runtime)}</p>
//           <p className="vote">{ratingAverage(movie.vote_average)}</p>
//         </div>
//         <h2>{movie.title}</h2>
//         <p className="desc">{movie.overview}</p>
//         <p>Genre: {movie.genres.map(genre => genre.name).join(", ")}</p>
        
        
//         <button onClick={() => addFavouriteMovie(movie)}>
//         <AddFavourites isInFavorites={favourites.some(item => item.id === movie.id)} />
          
//         </button>
//       </div>
//     </div>
//   );
// }


import React, {useState,useEffect} from 'react'
import useWindowDimensions from '../components/ScreenSize'
import { dateFormat } from '../utilities/format';
import { minToHrMin } from '../utilities/format';
import { ratingAverage } from '../utilities/format';
import Trailer from './Trailer';
import AddFavourites from './AddFavourites';



function MovieDetail({movie}) {

  const dimensions = useWindowDimensions();
  const desktopWidth = 1440;
  const [favourites, setFavourites] = useState([]);

  const isDesktop = dimensions.width > desktopWidth;

  const addFavouriteMovie = (movie) => {
    const movieIndex = favourites.findIndex((item) => item.id === movie.id);
  
    if (movieIndex === -1) {
      const newFavouriteMovies = [...favourites, movie];
      setFavourites(newFavouriteMovies);
      localStorage.setItem('favourites-movies', JSON.stringify(newFavouriteMovies));
    } else {
      const newFavouriteMovies = [...favourites];
      newFavouriteMovies.splice(movieIndex, 1);
      setFavourites(newFavouriteMovies);
      localStorage.setItem('favourites-movies', JSON.stringify(newFavouriteMovies));
    }
  };
  
  useEffect(() => {
    const storedFavourites = localStorage.getItem('favourites-movies');
    // console.log('Stored favorites:', storedFavourites);
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

    return (
      <div className='movie-detail-wrapper'>
        {isDesktop ? (
          // if is desktop....
            <div className="movie-backdrop">
                {movie.backdrop_path === null ? 
                  <img className="no-backdrop" src={noDisplay} alt="No Backdrop Poster" /> : 
                  <img className="backdrop-img" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                }
            </div>  
        ) : ""}

                  
      <div className='movie-detail-container'>

        <div className="movie-poster-wrapper">
          {movie.poster_path === null ?
            <img className="no-poster" src={noPoster} alt="No poster available." /> :
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />}
        </div>  

        <div className="movie-info-single">
          <h2>{movie.title}</h2>
          <div className="release-runtime-vote">
              {/* <p>{movie.release_date === "" ? <p>Date Unavailable</p> : dateFormat(movie.release_date) }</p> */}
              <p>{movie.release_date === "" ? <p>Date Unavailable</p> : dateFormat(movie.release_date) }</p>
              {/* <p>{minToHrMin(movie.runtime)}</p> */}
              <p>{minToHrMin(movie.runtime)}</p>
              {/* format the release date and runtime */}
              <p className="vote">{ratingAverage(movie.vote_average)}</p>
              <p>Genre: {movie.genres.map(genres => genres.name).join(", ")}</p>
          </div>
          <p className="desc">{movie.overview}</p>
        </div>

        
        <button className='fav-btn' onClick={() => addFavouriteMovie(movie)}>
          <AddFavourites isInFavorites={favourites.some(item => item.id === movie.id)} />
        </button> 
        
        {movie.videos.results.length > 0 ? <Trailer movie={movie} /> : <div></div>}
      </div>
    </div>
    );
  }

export default MovieDetail;
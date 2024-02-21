import React, {render, useContext} from 'react'
import useWindowDimensions from '../components/ScreenSize'
import { dateFormat } from '../utilities/format';
import { minToHrMin } from '../utilities/format';
import { ratingAverage } from '../utilities/format';
import Trailer from './Trailer';


function MovieDetail({movie}) {

  // const { windowDimensions } = useContext(AppContext)
 const dimensions  = useWindowDimensions();
  const desktopWidth = 1440 
  let isDesktop = false; 
  if (dimensions.width > desktopWidth ) { 
    isDesktop = true; 
  } 
  console.log(dimensions.width)
  console.log(isDesktop)

    return (
      <div>
        {isDesktop ? (
          // if is desktop....
          <div>
            <div className="movie-backdrop">
                {movie.backdrop_path === null ? 
                  <img className="no-backdrop" src={noDisplay} alt="No Backdrop Poster" /> : 
                  <img className="backdrop-img" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                }
            </div>  
          </div>
        ) : ""}

                  
      <div className='movie-detail-wrapper'>

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

        <div className='fav-btn-wrapper'>
          <button className='fav-btn'>Add to Favourite</button>
        </div>
        {movie.videos.results.length > 0 ? <Trailer movie={movie} /> : <div></div>}
      </div>
    </div>
    );
  }

export default MovieDetail; 
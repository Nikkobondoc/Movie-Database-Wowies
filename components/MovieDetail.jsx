import {useEffect} from 'react'
import useWindowDimensions from './ScreenSize';

function MovieDetail({movie}) {

  const dimensions  = useWindowDimensions();
  console.log(dimensions.width)

  // console.log(movie) 

  return (
    <div>
      <h2>{movie.title}</h2>
      
      <p>{movie.overview}</p>
      <p>Genre: {movie.genres.map(genres => genres.name).join(", ")}</p>
      <p>width:{dimensions.width}</p>
      <p>Height:{dimensions.height}</p>
      <div className="movie-backdrop">

          {/* {movie.backdrop_path === null ? 
          <img className="no-backdrop" src={noDisplay} alt="No Backdrop Poster" /> : 
          <img className="backdrop-img" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
        } */}
        {/* make conditional check if the width is desktop or not, if it is then add backdrop poster  */}

          {/* Mobile Movie Poster */}
          {movie.poster_path === null ?
              <img className="no-poster" src={noPoster} alt="No poster available." /> :
              <img className="poster-mobile" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />}
      </div>
      
    </div>
  )
}

export default MovieDetail; 
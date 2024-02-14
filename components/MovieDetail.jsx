import {useEffect} from 'react'

function MovieDetail({movie}) {

  // console.log(movie) 
  // useEffect(() => {
	// 	document.title = `${movie.original_title}`;
	// }, [movie.original_title]);

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Genre: {movie.genres.map(genres => genres.name).join(", ")}</p>
      
    </div>
  )
}

export default MovieDetail;
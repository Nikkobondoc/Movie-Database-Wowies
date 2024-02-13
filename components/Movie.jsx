import React from 'react'

const Movie = ({movieCard}) => {
  return (
<div className='popular-movie'>
  <div className='movie-image-wrap'>
    <img key={movieCard.id} src={`https://image.tmdb.org/t/p/w200/${movieCard.poster_path}`} alt={movieCard.title} />
    <div className="overlay">
      <p>{movieCard.title}</p>
      <p>{movieCard.release_date}</p>
      <p>{movieCard.vote_average}</p>
    </div>
  </div>
</div>
  )
}

export default Movie
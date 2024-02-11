import React from 'react'

const Movie = ({movieCard}) => {
  return (
    <img key={movieCard.id} src={`https://image.tmdb.org/t/p/w200/${movieCard.poster_path}`} alt={movieCard.title} />
  )
}

export default Movie
import React, { useState } from 'react';
import AddFavourites from './AddFavourites';

function MovieDetail({ movie }) {
  const [favourites, setFavourites] = useState([]);

  const addFavouriteMovie = (movie) => {
    setFavourites(prevFavourites => [...prevFavourites, movie]);
  };

  return (
    <div>
      {/* Movie details */}
      <AddFavourites onClick={() => addFavouriteMovie(movie)} />
    </div>
  );
}

export default MovieDetail;
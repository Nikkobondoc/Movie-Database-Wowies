import React, { useState, useEffect } from 'react';
import Removefavourites from '../components/Removefavourites';
// import '/src/styles/favourites.scss'; 
import '../src/styles/favourites.scss'; 

const PageFavourite = () => {
  const [favouriteItems, setFavouriteItems] = useState([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem('favourites-movies');
    if (storedFavourites) {
      setFavouriteItems(JSON.parse(storedFavourites));
    }
  }, []);

  const removeFavouritesMovie = (movieId) => {
    const newFavouritesList = favouriteItems.filter((movie) => movie.id !== movieId);
    setFavouriteItems(newFavouritesList);
    localStorage.setItem('favourites-movies', JSON.stringify(newFavouritesList));
  };

  return (
    <section>
      <h2>Favourite Page</h2>
      <div className='favourite-grid'>
        {favouriteItems.length === 0 ? (
          <p>No Favourites. Please add some.</p>
        ) : (
          favouriteItems.map((movie, index) => (
            <div key={index} className='movie-card'>
              <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} width="200" />
              <button onClick={() => removeFavouritesMovie(movie.id)}><Removefavourites /></button>
              <div className="overlay">
                <h3>{movie.title}</h3>
                <h4>{movie.description}</h4>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default PageFavourite;

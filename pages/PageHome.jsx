import React, { useEffect, useState, useCallback } from 'react';
import Movie from '../components/Movie';

const PageHome = () => {
  const [moviesList, setMoviesList] = useState([]);

  const fetchMovies = useCallback(async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d616641b0feb479ee6b4cb90a886cb1f");
      if (response.ok) {
        const data = await response.json();
        const selectedMovies = data.results.slice(0, 12);
        setMoviesList(selectedMovies);
        console.log(selectedMovies);
      } else {
        console.error('Failed to fetch movies:', response.status);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);


  
  console.log(moviesList);
  return (
    <>
    <div>
      <h2>PUT FEATURE MOVIE HERE</h2>
    </div>
    <div className='movie-list'>
      <select name="movie" id="movie">
        <option value="now-playing">Now Playing</option>
        <option value="popular">Popular</option>
        <option value="top-rated">Top Rated</option>
        <option value="Upcoming">Upcoming</option>
      </select>
    </div>
      <div>Popular Movies</div>
    <div className='popular-home'>
      {moviesList.map(movie => (
        <Movie movieCard={movie} />
        ))}
    </div>
    
    </>
  );
};

export default PageHome;

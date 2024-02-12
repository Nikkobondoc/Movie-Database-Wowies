import React, { useEffect, useState, useCallback } from 'react';
import Movie from '../components/Movie';

const PageHome = () => {
  const [moviesList, setMoviesList] = useState([]);

  const fetchMovies = useCallback(async (query = "popular") => {
    try {
      console.log(query)
      const response = await fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=d616641b0feb479ee6b4cb90a886cb1f`);
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
      <select name="movie" id="movie" onChange={(e) => fetchMovies(e.target.value)}>
        {/* on change, call the fetch movie function and change the query according to the valu */}
        {/* add onclick listener -> call fetch movie function and call the respective filter of each option*/}
        <option value="popular" >Popular</option>
        <option value="now_playing" >Now Playing</option>
        <option value="top_rated" >Top Rated</option>
        <option value="upcoming" >Upcoming</option>
      </select>
    </div>
      <div>Popular Movies</div>
    <div className='home-grid'>
      {moviesList.map(movie => (
        <Movie key={movie.id} movieCard={movie} />
        ))}
    </div>
    
    </>
  );
};

export default PageHome;

import React, { useEffect, useState, useCallback } from 'react';
import Movie from '../components/Movie';
// import '../components/dropdown';
import FeatureMovie from '../components/featureMovie';
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";


const PageHome = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [query, setQuery] = useState("popular"); 
  // const dropdown = document.getElementById('movie-dropdown')
  // menuControl(dropdown); 
  // control.log(menuControl)

  // const fetchMovies = useCallback(async (query = "popular") => {
  //   try {
  //     console.log("query:", query)
  //     const response = await fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=d616641b0feb479ee6b4cb90a886cb1f`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       const selectedMovies = data.results.slice(0, 12);
  //       setMoviesList(selectedMovies);
  //       console.log("selectedMovies:", selectedMovies);
  //     } else {
  //       console.error('Failed to fetch movies:', response.status);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching movies:', error);
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchMovies();
  // }, [fetchMovies]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        console.log("query:", query)
        const response = await fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=d616641b0feb479ee6b4cb90a886cb1f`);
        if (response.ok) {
          const data = await response.json();
          const selectedMovies = data.results.slice(0, 12);
          setMoviesList(selectedMovies);
          console.log("selectedMovies:", selectedMovies);
        } else {
          console.error('Failed to fetch movies:', response.status);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies(query)
  }, [query]
  )


  return (
    <>
    <div>
      <FeatureMovie />
    </div>
    <div className='movie-list'>
      <select name="movie-dropdown" id="movie-dropdown" className='movie-dropdown' onChange={(e) => setQuery(e.target.value)}>
        {/* on change, call the fetch movie function and change the query according to the valu */}
        {/* add onclick listener -> call fetch movie function and call the respective filter of each option*/}   
        <label for="sort-popular">Popular</label>
        <option value="popular" >Popular</option>
        <option value="now_playing" >Now Playing</option>
        <option value="top_rated" >Top Rated</option>
        <option value="upcoming" >Upcoming</option>
      </select>
        {/* <input type="radio" name="sortType" value="Popular" checked="checked" id="sort-popular" onclick={(e) => setQuery(e.target.value)}/>
        <label for="sort-popular">Popular</label>

        <input type="radio" name="sortType" value="Now Playing" id="sort-now-playing" onclick={(e) => setQuery(e.target.value)}/>
        <label for="sort-now-playingr">Now Playing</label>

        <input type="radio" name="sortType" value="Top Rated" id="sort-top-rated" onclick={(e) => setQuery(e.target.value)}/>
        <label for="sort-top-rated">Top Rated</label>

        <input type="radio" name="sortType" value="Upcoming" id="sort-upcoming" onclick={(e) => setQuery(e.target.value)}/>
        <label for="sort-upcoming">Upcoming</label> */}

     

      {/* <div class="custom-select">
        <button class="select-button">
          <span class="selected-value">Open this select menu</span>
          <span class="arrow"></span>
        </button>
        <ul class="select-dropdown">
          <li>
            <input type="radio" id="github" name="social-account" />
            <label for="github">GitHub</label>
          </li>
          <li>
            <input type="radio" id="instagram" name="social-account" />
            <label for="instagram">Instagram</label>
          </li>
        </ul>
      </div> */}

    </div>
      <div><br /></div>
    <div className='home-grid'>
      {moviesList.map(movie => (
        <Movie key={movie.id} movieCard={movie} />
        ))}
    </div>
    
    </>
  );
};

export default PageHome;

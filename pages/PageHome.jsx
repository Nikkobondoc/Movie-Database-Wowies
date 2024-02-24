import React, { useEffect, useState, useCallback } from 'react';
import Movie from '../components/Movie';
// import '../components/dropdown';
import FeatureMovie from '/./components/FeatureMovie';
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";


const PageHome = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [query, setQuery] = useState("popular"); 

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

  const categories = [
    {
      id: 'popular',
      categoryName: 'Popular',
    },
    {
      id: 'top_rated',
      categoryName: 'Top Rated',
    },
    {
      id: 'now_playing',
      categoryName: 'Now Playing',
    },
    {
      id: 'upcoming',
      categoryName: 'Upcoming',
    },
  ]

  return (
    <>
    <div>
      <FeatureMovie />
    </div>

    <div className='movie-list'>
      <ul name="category-menu" id="category-menu" className='category-menu'>
        {/* on change, call the fetch movie function and change the query according to the valu */}
        {/* add onclick listener -> call fetch movie function and call the respective filter of each option*/}   
        {categories.map((category) => (
          <li key={category.id}>
            {/* create buttons for each category, check if query is equal to the category.id if it is then make the classname Active */}
            <button
              id={category.id}
              value={category.id}
              onClick={(e) => setQuery(e.target.value)}
              className={
                query === category.id
                  ? 'active category-buttons'
                  : 'category-buttons'
              }
            >{category.categoryName}</button>
          </li>
           ))}
      </ul>
    </div>

      <br />
    <div className='home-grid'>
      {moviesList.map(movie => (
        <Movie key={movie.id} movieCard={movie} />
        ))}
    </div>
    
    </>
  );
};

export default PageHome;

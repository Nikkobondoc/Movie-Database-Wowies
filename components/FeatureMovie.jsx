import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { dateFormat } from '../utilities/format';
import { ratingAverage } from '../utilities/format';
import useWindowDimensions from '../components/ScreenSize'

const FeatureMovie = () => {
    const [movies, setMovies] = useState([]);

    const dimensions = useWindowDimensions();
    const desktopWidth = 1440;
    const isDesktop = dimensions.width > desktopWidth;

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=d616641b0feb479ee6b4cb90a886cb1f')
            .then(response => response.json())
            .then(data => setMovies(data.results.slice(0, 4)))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleDragStart = (e) => e.preventDefault();


    const items = movies.map(movie => (
        <div className='feature-container'>
            
            <div className='feature-info'>
                <h2 className='movie-card-title'>{movie.title}</h2>
                <p className='movie-card-release-date'>{movie.release_date === "" ? <p>Date Unavailable</p> : dateFormat(movie.release_date) }</p>
                <p className='movie-card-average'>{ratingAverage(movie.vote_average)}</p>
                
                    {isDesktop? (
                        // if desktop then show all the overview
                        <p className='movie-card-overv'>
                        {movie.overview} 
                        </p> 
                        ): (
                        // if not desktop width, show only 120 characters... 
                        <p className='movie-card-overv'>
                         {movie.overview.length > 120 ?
                        `${movie.overview.substring(0, 120)}...` : movie.overview
                        }
                        </p> 
                        )
                    }
               
                <div className="movie-button">
                    <Link to={`/movie/${movie.id}`}>
                    <button className='more-info' role='button'>More Info</button>
                    </Link>
                </div> 

            </div>

            <img className='feature-img' key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} onDragStart={handleDragStart} role="presentation" alt={movie.title}/> 
        </div>
    ));

    return (
        <div>
            {movies && movies.length > 0 && <AliceCarousel mouseTracking autoPlay autoPlayInterval={3000} items={items} />} 
        </div>
    );
};

export default FeatureMovie;

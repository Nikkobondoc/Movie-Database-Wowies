import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { useState, useEffect } from 'react';

const FeatureMovie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=d616641b0feb479ee6b4cb90a886cb1f')
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleDragStart = (e) => e.preventDefault();

    const items = movies.map(movie => (
        <img key={movie.id} src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} onDragStart={handleDragStart} role="presentation" />
    ));

    return (
        <div>
            {movies && movies.length > 0 && <AliceCarousel mouseTracking items={items} />}
        </div>
    );
};

export default FeatureMovie;
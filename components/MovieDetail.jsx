import React, {render} from 'react'
import useWindowDimensions from './ScreenSize';

function MovieDetail({movie}) {

  const dimensions  = useWindowDimensions();

  const isDesktop = 1440 
  let desktop = false; 
  if (dimensions.width > isDesktop ) { 
    desktop = true; 
  } 
  console.log(dimensions.width)
  console.log(desktop)

//   const dimensions  = useWindowDimensions();
//   console.log(dimensions.width)

//   // console.log(movie) 


// class MovieDetail extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       isDesktop: false 
//     };

//     this.updatePredicate = this.updatePredicate.bind(this);
//   }
//   componentDidMount() {
//     this.updatePredicate();
//     window.addEventListener("resize", this.updatePredicate);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.updatePredicate);
//   }

//   updatePredicate() {
//     this.setState({ isDesktop: window.innerWidth > 1440 });
//   }


    return (
      <div>
        {desktop ? (
          // if is desktop....
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Genre: {movie.genres.map(genres => genres.name).join(", ")}</p>
            <div className="movie-backdrop">
                {movie.backdrop_path === null ? 
                  <img className="no-backdrop" src={noDisplay} alt="No Backdrop Poster" /> : 
                  <img className="backdrop-img" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} width="300"/>
                }

                {movie.poster_path === null ?
                  <img className="no-poster" src={noPoster} alt="No poster available." /> :
                  <img className="poster-mobile" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} width="145"/>}
            </div>  
          </div>
        ) : (
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Genre: {movie.genres.map(genres => genres.name).join(", ")}</p>
            <div className="movie-backdrop">
                {movie.poster_path === null ?
                  <img className="no-poster" src={noPoster} alt="No poster available." /> :
                  <img className="poster-mobile" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} width="145"/>}
            </div>  
          </div>
        )}
      </div>
    );
  }

export default MovieDetail; 
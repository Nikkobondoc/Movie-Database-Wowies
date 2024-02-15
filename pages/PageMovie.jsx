import React, {useState, useEffect, useCallback} from 'react'
import { useParams } from "react-router-dom"
import MovieDetail from "../components/MovieDetail"

const PageMovie =()=> {
  const [movie, setMovie] = useState(); 
  const { id } = useParams(); 

  // useEffect(()=>{ 
  //   getData()
  // },[])

  // const getData = () => { 
  //     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d616641b0feb479ee6b4cb90a886cb1f`)
  //     .then(res => res.json())
  //     .then(data => setMovie(data.results))
  // };

//   useEffect(() => {
//     const getData = async () => {
//         const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d616641b0feb479ee6b4cb90a886cb1f`)
//         setMovie(response);
//         console.log(response); 
//         window.scrollTo(0,0);
//     }
//     getData();
// }, []);

useEffect(() => {
  const getMovie = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d616641b0feb479ee6b4cb90a886cb1f`);
      const moviesDataFromAPI = await response.json();
      setMovie(moviesDataFromAPI);
  }

  getMovie();
}, [id])

console.log(movie); 
// console.log(setMovie); 
  return (
    <div>
       {movie ? <MovieDetail movie={movie} />: console.log("error")}
       
    </div>
 
  )
}

export default PageMovie; 
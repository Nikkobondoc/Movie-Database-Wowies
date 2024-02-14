import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import Movie from "../components/Movie"

const PageMovie =()=> {
  const [currentMoive, setMovie] = useState(); 
  const {id} = useParams(); 

  useEffect(()=>{ 
    getData()
  },[])

  const getData = () => { 
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d616641b0feb479ee6b4cb90a886cb1f`)
      .then(res =>res.json())
      .then(data => setMovie(data.results))
  };

  return (
    <div>
      <h1>Movie Detail Page </h1>
    </div>
 
  )
}

export default PageMovie
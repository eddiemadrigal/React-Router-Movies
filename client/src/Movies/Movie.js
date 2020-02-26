import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const Movie = (props) => {
  const params = useParams();
  const [movie, setMovie] = useState();
  const id = params.id;

  useEffect(() => {
    setMovie(props.movies.movies[id]);
  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <MovieCard movie={ movie } />
  )
  
}
export default Movie;
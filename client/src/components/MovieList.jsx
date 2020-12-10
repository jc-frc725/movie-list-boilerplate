import React from 'react';
import MovieListEntry from './MovieListEntry';

var MovieList = (props) => (
  <div className="movie-list">
    <MovieListEntry />
    <MovieListEntry />
  </div>
)

export default MovieList;
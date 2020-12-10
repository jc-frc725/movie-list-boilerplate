import React from 'react';
import MovieListEntry from './MovieListEntry';

var MovieList = ({movies}) => (
  <ul className="movie-list">
    {movies.map((movie, idx) => 
      <MovieListEntry
        key={movie.title + idx}
        title={movie.title}
      />
    )}
  </ul>
)

export default MovieList;
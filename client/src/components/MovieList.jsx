import React from 'react';
import MovieListEntry from './MovieListEntry';

const MovieList = ({movies, toggleWatched}) => (
  // render a 'to watch' and 'watched' list of movies
  <div>
    <ul className="to-be-watched">
      {movies.map((movie, idx) => 
        <MovieListEntry
          key={movie.title + idx}
          id={movie.title + idx}
          title={movie.title}
          toggleWatched={toggleWatched}
        />
      )}
   </ul>
   <ul className="watched">
   </ul>
  </div>
  
)

export default MovieList;
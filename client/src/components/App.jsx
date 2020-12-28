import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovieBar from './AddMovieBar.jsx';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'WarGames'},
  {title: 'Avengers Endgame'},
  {title: '007'},
  {title: 'Kiss of the Dragon'}
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: movies,
      currentMovies: [],
      watchedMovies: [],
      noMoviesFound: false
    }
    this.searchMovie = this.searchMovie.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
  }

  componentDidMount() {
    // mimic GET request
    setTimeout(() => this.setState({movies: []}), 1000);
  }

  searchMovie(query) {
    let searchedMovies = this.state.movies;
    // filter out based on user search 
    searchedMovies = searchedMovies.filter((movie) => {
      // case-insensitive filter
      query = query.toLowerCase();
      return (movie.title.toLowerCase().indexOf(query) !== -1)
    });
    
    // consider moving this block into a 'handleNoMovies' function
    if (searchedMovies.length === 0) {
      this.setState({currentMovies: searchedMovies, noMoviesFound: true});
    } else {
      this.setState({currentMovies: searchedMovies, noMoviesFound: false});
    }
  }

  addNewMovie(movie) {
    const currentMovies = this.state.movies;
    const newMovie = {title: movie, id: currentMovies.length};
   //this.state.movies.push(newMovie);
    currentMovies.push(newMovie);
    this.setState({currentMovies});
  }

  // when a movie item is toggled to 'watched', add to the watched list
  // if not, remove it from the watched list
  toggleWatched(movie) {
    // set array to current watchedMovies
    let watchedMovies = this.state.watchedMovies;
    // if this movie has been toggled to watched, add to watch list
    // if movie's id does not exist within watched list, add it
    if (watchedMovies.indexOf(movie.id) === -1) {
      watchedMovies.push(movie.id);
    } else {
      watchedMovies.splice(watchedMovies.indexOf(movie.id), 1);
    }
    // re-render
    this.setState({watchedMovies});
  }

  render() {
    // style conditional, updates on user interaction
    const noMoviesStyle = {
      // put css styles here, they will change by updating state
      display: this.state.noMoviesFound ? 'block' : 'none'
    }

    return (
      <div>
        <h1>Movie List</h1>
        <AddMovieBar addNewMovie={this.addNewMovie}/>
        <SearchBar searchMovie={this.searchMovie}/>
        <p style={noMoviesStyle}>No movie by that name found.</p>
        <MovieList movies={this.state.currentMovies} toggleWatched={this.toggleWatched}/>
      </div>
    );
  }
}

export default App;
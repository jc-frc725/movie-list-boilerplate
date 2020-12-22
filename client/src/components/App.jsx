import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

// const App = (props) => (
//   <div>Hello World!</div>
// );
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
      movies: [],
      searchedMovies: [],
      noMoviesFound: false
    }
    this.searchMovie = this.searchMovie.bind(this);
    //this.handleNoMovies = this.handleNoMovies.bind(this);
  }

  componentDidMount() {
    // initialize movie state and searched movie state
    setTimeout(() => this.setState({movies: movies, searchedMovies: movies}), 1000);
  }

  searchMovie(query) {
    // filter this.movies based on query but can't actually mutate it,
    // or else actual movies state is changed forever, movie objects can be lost
    // capture current searchedMovie state based on full data set
    var searchedMovies = this.state.movies;
    // filter out based on user search 
    searchedMovies = searchedMovies.filter((movie) => {
      // case-insensitive filter
      query = query.toLowerCase();
      return (movie.title.toLowerCase().indexOf(query) !== -1)
    });
    //this.setState({searchedMovies});
    
    if (searchedMovies.length === 0) {
      this.setState({searchedMovies, noMoviesFound: true});
    } else {
      this.setState({searchedMovies, noMoviesFound: false});
    }

  }

  // handle case where no movies are found after search
  // handleNoMovies() {
  //   if (this.state.searchedMovies.length === 0) {
  //     this.setState({noMoviesFound: true});
  //   }
  // }

  render() {
    // style conditional, updates on user interaction
    const style = {
      // put css styles here, they will change by updating state
      display: this.state.noMoviesFound ? 'block' : 'none'
    }

    return (
      <div>
        <h1>Movie List</h1>
        <SearchBar searchMovie={this.searchMovie}/>
        <p style={style}>No movie by that name found.</p>
        <MovieList movies={this.state.searchedMovies}/>
      </div>
    );
  }
}

export default App;
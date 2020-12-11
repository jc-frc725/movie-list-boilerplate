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
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchQuery: ''
    }
    this.searchMovie = this.searchMovie.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({movies}), 1000);
  }

  searchMovie(query) {
    //console.log(query);
    const searchedMovies = [];
    movies.forEach(movie => {
      if (movie.title.indexOf(query) !== -1) {
        searchedMovies.push(movie);
      }
    });
    this.setState({movies: searchedMovies});
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <SearchBar searchMovie={this.searchMovie}/>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
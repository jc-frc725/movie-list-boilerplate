import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

// const App = (props) => (
//   <div>Hello World!</div>
// );
var movies = [
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
      movies: movies
    }
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <SearchBar />
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
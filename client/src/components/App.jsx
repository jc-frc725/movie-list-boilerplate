import React from 'react';
import MovieList from './MovieList.jsx';

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
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
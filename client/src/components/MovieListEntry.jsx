import React from 'react';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props)
    // state
  }

  render() {
    return (
      <li id="movie-list-entry">{this.props.title}</li>
    );
  }
}

export default MovieListEntry;
import React, { useState, useEffect } from 'react';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props)
    // state
    this.state = {
      watched: false
    }
    this.handleClickOnWatched = this.handleClickOnWatched.bind(this);
    //this.handleToggleWatched = this.handleToggleWatched.bind(this);
  }

  // handleClickOnWatched: on click, switch this movie to watched/not watched
  handleClickOnWatched(event) {
    this.setState({watched: !this.state.watched});
    console.log(`${JSON.stringify(this.props)} switched to watched:${this.state.watched}`);
    this.props.toggleWatched(this.props);
  }

  // handleToggleWatched(e) {
  //   console.log(`${JSON.stringify(this.props)} watched is now:${this.state.watched}`);
  //   this.props.toggleWatched(this.props, this.state.watched);
  // }


  render() {
    return (
      <li className="movie-list-entry">
        {this.props.title}
        <button className="watch-toggle" onClick={this.handleClickOnWatched}>
          Watched
        </button>
      </li>
    );
  }
}

export default MovieListEntry;
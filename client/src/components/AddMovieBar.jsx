import React from 'react';

class AddMovieBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // hand over form input value to add function
    this.props.addMovie(this.state.value);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.value}
          onChange={this.handleChange}>
        </input>
        <button>
          Add Movie
        </button>
      </form>
    )
  }
}

export default AddMovieBar;
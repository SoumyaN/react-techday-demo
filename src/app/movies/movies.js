import React, {Component} from 'react';
import {Movie} from './movie';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  infoPane: {
    border: 'solid thin black',
    margin: '10px 10px',
    padding: '10px 10px'
  }
};

export class Movies extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: {}
    };
    this.handleClickTitle = this.handleClickTitle.bind(this);
  }

  handleClickTitle(movieTitle) {
    const movie = this.props.movies.filter(movie => {
      return movie.original_title === movieTitle;
    })[0];
    this.setState({selectedMovie: movie});
    window.scrollTo(0, document.body.scrollHeight);
  }

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          Which movies do you like?
        </h2>
        <div>
          {this.props.movies && this.props.movies.map((movie, i) => {
            return <Movie key={i} movie={movie} onClickTitle={this.handleClickTitle}/>;
          })}
        </div>
        <InfoPane selectedMovie={this.state.selectedMovie}>Show pane here</InfoPane>
      </div>
    );
  }
}

const InfoPane = props => {
  return (
    <div style={styles.infoPane}>
      <div>Original Title: {props.selectedMovie.original_title}</div>
      <div>Overview: {props.selectedMovie.overview}</div>
      <div>Popularity: {props.selectedMovie.popularity}</div>
    </div>
  );
};

InfoPane.propTypes = {
  selectedMovie: React.PropTypes.object
};

Movies.propTypes = {
  movies: React.PropTypes.array
};

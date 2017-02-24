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

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          Which movies do you like?
        </h2>
        <div>
          {this.props.movies && this.props.movies.map((movie, i) => {
            return <Movie key={i} movie={movie}/>;
          })}
        </div>
      </div>
    );
  }
}

Movies.propTypes = {
  movies: React.PropTypes.array
};

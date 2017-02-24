import React, {Component} from 'react';
import {Header} from './header';
import {Movies} from './movies/movies';
// import axios from 'axios';
import moviesJson from './movies/movies.json';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '60px'
  }
};

export class Main extends Component {

  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentWillMount() {
    // axios
    //  .get('http://localhost:5000/movies')
    //  .then(response => {
    //    this.setState({movies: response.data.movies});
    //  });
    this.setState({movies: moviesJson.movies});
  }

  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <Movies movies={this.state.movies} />
        </main>
      </div>
    );
  }
}


import React, {Component} from 'react';
import './movie.scss';

export class Movie extends Component {
  render() {
    return (
      <div className="row">
        <div className="movie">
          <a className="movieTitle">
            {this.props.movie.original_title}
          </a>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  movie: React.PropTypes.object.isRequired
};

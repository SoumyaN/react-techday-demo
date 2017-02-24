import React, {Component} from 'react';
import './movie.scss';

export class Movie extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <div className="movie">
          <a className="movieTitle" onClick={() => this.props.onClickTitle(this.props.movie.original_title)}>
            {this.props.movie.original_title}
          </a>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  movie: React.PropTypes.object.isRequired,
  onClickTitle: React.PropTypes.func
};

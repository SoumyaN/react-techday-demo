import React, {Component} from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    position: 'fixed',
    width: '100%'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem',
    color: '#fff'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <div style={styles.title}>
          Movies
        </div>
      </header>
    );
  }
}

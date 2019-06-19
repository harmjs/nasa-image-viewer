import './style.scss';
import NavBar from './NavBar/index.js';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

import React, { Component } from 'react';
import { render } from 'react-dom';

import './index.css';

class App extends Component {
  render() {
    return (
        <div>
          <p>Hello React Training!</p>
        </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/index.scss';

import logo from '../img/svg/logo.svg';

// ReactDOM.render(<h1>Mahesh</h1>, document.getElementById('main'));

const App = () => (
  <div className="App">
      <img className="App-Logo" src={logo} alt="React Logo" />
    <h1 className="App-Title">Hello Parcel x React</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('main'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}

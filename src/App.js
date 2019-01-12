import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import Counter from './Counter';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <header className="App-header">
            <p></p>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Redux-Increment-Decrement Project
            </p>
          </header>
          <Counter/>
        </Provider>
      </div>
    );
  }
}

export default App;

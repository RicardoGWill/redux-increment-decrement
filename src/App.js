import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// These were imported after the base app was created.
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Note that the Provider (with the store given as a prop) wraps the
        child components of the app, specifically the <Counter/>.*/}
        <Provider store={store}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
              Redux-Increment-Decrement Project
            </div>
          </header>
          <Counter/>
        </Provider>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './main'
import { Provider } from 'react-redux'
import { store } from './redux/store'
console.log(store.getState())
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;

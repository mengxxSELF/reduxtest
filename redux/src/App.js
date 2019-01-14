import React, { Component } from 'react';
import './App.css';
import Main from './main'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducer from './redux/reducer'
let store = createStore(allReducer)
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

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducers'
import App from './App'

const store = createStore(reducer)

export default class todoApp extends Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

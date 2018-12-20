import React, {Component} from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/todos'
import App from './App'

const store = createStore(todoApp)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}




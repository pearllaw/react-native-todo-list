import React, {Component} from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todos from './reducers/todos'
import App from './App'

const store = createStore(todos)

export default class Root extends Component {
  componentDidMount() {
    console.log(store.getState())
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}




import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import reducer from './reducers/reducers'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import App from './App'

const config = {
  key: 'root',
  storage
}

const reducers = persistCombineReducers(config, { reducer })

const store = createStore(
  reducers, 
  compose(applyMiddleware(thunk))
)

const persistor = persistStore(store)

export default class todoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: null,
      persistor: null
    }
  }

  async componentWillMount() {
    await this.setState({ store })
    await this.setState({ persistor: persistor })
  }

  render() {
    if (this.state.store === null) {
      return (
      <View>
        <Text>Loading...</Text>
      </View>
      )
    }
    return (
      <Provider store={this.state.store} persistor={this.state.persistor}>
          <App />
      </Provider>
    )
  }
}

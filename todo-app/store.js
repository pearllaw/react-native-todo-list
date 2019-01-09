import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import reducer from './reducers/reducers'
import App from './App'

const persistConfig = {
  key: 'todos',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducer)

let store = createStore(persistedReducer, {todos: []})
  
let persistor = persistStore(store, null, () => {
  store.getState()
})

export default class todoApp extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    )
  }
}

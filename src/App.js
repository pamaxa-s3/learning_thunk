import React from 'react'
import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import reducer from './reducers'
import Connected from './Connected'
import thunk from "redux-thunk"



function App() {
  const store = createStore(reducer, applyMiddleware(logger ,thunk))
  return (
    <Provider store={store}>
      <Connected />
    </Provider>
  )
}

export default App


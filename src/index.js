import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from "./reducers/rootReducer"
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
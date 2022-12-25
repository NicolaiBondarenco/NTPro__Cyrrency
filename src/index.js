import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import { store } from './Redux/Store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)

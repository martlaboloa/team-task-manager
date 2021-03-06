import { createStore, compose } from 'redux'

export default function configure(preloadedState, middlewares, rootReducer) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(rootReducer, preloadedState, composeEnhancers(middlewares))
}

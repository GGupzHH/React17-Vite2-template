import rootReducers from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(
  rootReducers,
  applyMiddleware(thunk)
)

export default store

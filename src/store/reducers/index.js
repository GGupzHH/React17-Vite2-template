import { combineReducers } from 'redux'
import demo from './demo'
import home from './home'
import user from './user'

export default combineReducers({
  demo,
  home,
  user
})

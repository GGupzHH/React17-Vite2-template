import { combineReducers } from 'redux'
import demo from '@/modules/TestDemo/store'
import home from '@/modules/HomeDemo/store'
import user from '@/modules/UserAccount/store'

export default combineReducers({
  demo,
  home,
  user
})

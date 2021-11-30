import {
  login
} from '@/modules/UserAccount/api'

import ACTIONS from './ACTIONS_TYPE'


const initialState = {
  userInfo: {
    name: '',
  }
}

export const actions = {
  setUserInfo (info) {
    return {
      type: ACTIONS.USERINFO,
      info
    }
  },
  asyncSetUserInfo (homeInfo) {
    console.log('homeInfo')
    // 异步更新数据需要返回函数  函数的返回结果会返回给模板
    return async (dispatch, getState) => {
      await login()
      // 这里可以获取所有的state
      const state = getState()
      // 数据更新继续使用dispatch
      dispatch(this.setUserInfo({
        userInfo: {
          name: '张三'
        }
      }))
      console.log('设置token')
      return {
        error: 0,
        data: {},
        msg: 1233
      }
    }
  }
}

export default function reducers (state = initialState, actions) {
  switch (actions.type) {
    case ACTIONS.USERINFO:
      console.log(actions)
      console.log('ACTIONS.USERINFO', ACTIONS.USERINFO)
      console.log(actions.info.name)
      return {
        ...state,
        userInfo: actions.info
      }
    default:
      return state
  }
}

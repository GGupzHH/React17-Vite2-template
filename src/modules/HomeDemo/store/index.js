import {
  demoHome
} from '@/modules/HomeDemo/api'

import { sleep } from '@/utils/request'

import ACTIONS from './ACTIONS_TYPE'

const initialState = {
  homeInfo: {
    mysqlVersion: '',
    currentSystemTime: Date.now(),
    freemem: 0,
    totalmem: 0,
    platform: '',
    type: '',
    hostname: '',
    arch: '',
    nodeVersion: '',
    cpus: []
  }
}

export const actions = {
  asyncSetHomeInfor (info) {
    return {
      type: ACTIONS.HOME_INFO,
      info
    }
  },
  setHomeInfo (homeInfo) {
    console.log('homeInfo')
    // 异步更新数据需要返回函数  函数的返回结果会返回给模板
    return async (dispatch, getState) => {
      await sleep(1000)
      // 这里可以获取所有的state
      const state = getState()
      // 数据更新继续使用dispatch
      dispatch(this.asyncSetHomeInfor('async type'))
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
    case ACTIONS.HOME_INFO:
      console.log('HOMEINFO reduces', ACTIONS.HOME_INFO)
      return {
        homeInfo: {
          ...state.homeInfo,
          type: actions.info
        },
      }
    default:
      return state
  }
}

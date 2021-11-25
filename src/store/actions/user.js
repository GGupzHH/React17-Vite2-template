import {
  login
} from '@/modules/UserAccount/api'

export function setUserInfo (info) {
  return {
    type: 'USERINFO',
    info
  }
}

export function asyncSetUserInfo (homeInfo) {
  console.log('homeInfo')
  // 异步更新数据需要返回函数  函数的返回结果会返回给模板
  return async (dispatch, getState) => {
    await login()
    // 这里可以获取所有的state
    const state = getState()
    // 数据更新继续使用dispatch
    dispatch(setUserInfo({
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

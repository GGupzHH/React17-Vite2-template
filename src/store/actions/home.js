export function sleep (time = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({})
    }, time)
  })
}

export function asyncSetHomeInfor (info) {
  return {
    type: 'HOMEINFO',
    info
  }
}

export function setHomeInfo (homeInfo) {
  console.log('homeInfo')
  // 异步更新数据需要返回函数  函数的返回结果会返回给模板
  return async (dispatch, getState) => {
    await sleep(1000)
    // 这里可以获取所有的state
    const state = getState()
    // 数据更新继续使用dispatch
    dispatch(asyncSetHomeInfor('async type'))
    return {
      error: 0,
      data: {},
      msg: 1233
    }
  }
}

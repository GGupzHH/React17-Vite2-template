
const initialState = {
  demoInfo: {
    mysqlVersion: '1234',
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

function demoSystem (state = initialState, actions) {
  switch (actions.type) {
    case 'LOGIN':
        console.log('LOGIN reduces')
        actions.data.demoInfo.mysqlVersion = Math.random()
        console.log(state)
        console.log(actions.data)
        console.log(Object.assign({}, state, actions.data))
        // 这里去改值
        return Object.assign({}, state, actions.data)
    default:
      return state
  }
}

export default demoSystem

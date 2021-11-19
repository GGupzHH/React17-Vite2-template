
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

function homeSystem (state = initialState, actions) {
  switch (actions.type) {
    case 'HOMEINFO':
      console.log('HOMEINFO reduces')
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

export default homeSystem

const initialState = {
  userInfo: {
    name: '',
  }
}

function setUserInfo (state = initialState, actions) {
  switch (actions.type) {
    case 'USERINFO':
      console.log(actions)
      console.log(actions.info.name)
      return {
        ...state,
        userInfo: actions.info
      }
    default:
      return state
  }
}

export default setUserInfo

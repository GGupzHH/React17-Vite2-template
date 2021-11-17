

export function setUser (userInfo) {
  console.log('setUser')

  return {
    type: 'LOGIN',
    userInfo
  }
}

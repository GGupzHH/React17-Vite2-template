import createActionsType from '@/utils/createActionsType'

export const moduleName = 'USER_ACCOUNT'

const ACTIONS_TYPE = {
  USERINFO: 'userInfo'
}

export default createActionsType(moduleName, ACTIONS_TYPE)

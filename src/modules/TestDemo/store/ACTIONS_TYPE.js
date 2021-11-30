import createActionsType from '@/utils/createActionsType'

export const moduleName = 'DEMOTEST'

const ACTIONS_TYPE = {
  DEMO_INFO: 'demoInfo'
}

export default createActionsType(moduleName, ACTIONS_TYPE)

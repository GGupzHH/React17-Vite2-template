export default function createActionsType (actionName, constants) {
  for (let key in constants) {
    constants[key] = actionName + '_' + constants[key]
  }
  return constants
}

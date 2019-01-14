import { ACTION_ADD, ACTION_REDUCER } from './action_type'

export default (state = {number: 0}, action) => {
  const { type} = action
  const { number } = state
  switch (type) {
    case ACTION_ADD:
      state = Object.assign({}, { number: number + 1})
      break;
    default:
      state = Object.assign({}, { number: number - 1 })
      break;
  }
  return state
}
import { ACTION_ADD, ACTION_REDUCER } from './action_type'

export default (state = {number: 0}, action) => {
  const { type, payload } = action
  console.log(payload, 'payload')
  const { number } = state
  switch (type) {
    case ACTION_ADD:
      state = Object.assign({}, { number: number + 1, payload })
      break;
    default:
      state = Object.assign({}, { number: number - 1, payload })
      break;
  }
  return state
}
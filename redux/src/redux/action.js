import { ACTION_ADD, ACTION_REDUCER } from './action_type'

export const valueAdd = () => {
  return {
    type: ACTION_ADD,
    msg: '增加值'
  }
}

export const valueReduce = () => {
  return {
    type: ACTION_REDUCER,
    msg: '减少值'
  }
}
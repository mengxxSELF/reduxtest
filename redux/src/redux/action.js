import { ACTION_ADD, ACTION_REDUCER } from './action_type'
import {getData} from './server'

export const valueAdd = (w) => {
  return {
    type: ACTION_ADD,
    msg: '增加值',
    payload: getData()
  }
}

export const valueReduce = () => {
  return {
    type: ACTION_REDUCER,
    msg: '减少值'
  }
}
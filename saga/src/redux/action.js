import { ACTION_ADD, ACTION_REDUCER, ACTION_ADD_SAGA , ACTION_REDUCER_SAGA} from './action_type'
import {getData} from './server'

export const valueAdd = () => {
  return {
    type: ACTION_ADD_SAGA,
    msg: '增加值'
  }
}

export const valueReduce = () => {
  return {
    type: ACTION_REDUCER_SAGA,
    msg: '减少值'
  }
}
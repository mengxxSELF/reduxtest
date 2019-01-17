const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  namespace: 'main',
  state: 0,
  reducers: {
    add(state) { 
      return state + 1
    },
    reduce(state) {
      return state - 1
    }
  },
  // 进行异步处理
  effects: {
    * asyncData (action, {call, put}) {
      yield call(delay, 2000)
      yield put({type: 'add'})
    }
  }
}
import { takeEvery, put, call } from "redux-saga/effects";
import { ACTION_ADD, ACTION_REDUCER } from "./action-types";


//takeEvery=>负责监听  put=>派发动作   call=>告诉saga，执行delay，并传入1000作为参数

const delay = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, ms)
})

//saga分为三类 1、rootsaga 2、监听saga 3、worker干活的saga

function * add () {
  yield call(delay,200)
  // 派发Action
  yield put({ type: ACTION_ADD })
}

function * watchAdd() {
 // 监听派发给仓库的动作，如果动作类型匹配的话，会执行对应的监听生成器
  yield takeEvery(ACTION_ADD, add)
}

export default function * rootSaga() {
  yield watchAdd()
}
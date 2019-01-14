
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga" //引入我们上面写好的rootSaga
import reducer from './reducer'
import {createLogger} from 'redux-logger';
const logger = createLogger();
let sagaMiddleware = createSagaMiddleware()

const middle = [sagaMiddleware, logger]

export const store = createStore(
  reducer,
  applyMiddleware(...middle),
);
sagaMiddleware.run(rootSaga); //开始执行rootSaga
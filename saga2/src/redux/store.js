
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga" //引入我们上面写好的rootSaga
import reducer from './reducer'
import createLogger from 'redux-logger';
const logger = createLogger();
let sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga); //开始执行rootSaga
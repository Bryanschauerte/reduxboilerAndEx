import { createStore, applyMiddleware, combineReducers } from 'redux'
import promise from "redux-promise-middleware"
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import counter from './reducers/counter'

import rootReducer from './reducers/index'
const loggerMiddleware = createLogger();
const promiseMiddleWare = promise();
// const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware, promiseMiddleWare)

  export default const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware, loggerMiddleware, promiseMiddleWare)
    );

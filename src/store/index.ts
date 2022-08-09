import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from 'redux-saga/effects';

import { IPostsState } from './types';
import { postReducer } from './reducer';
import { PostRootSaga } from "./root-saga";

export interface IRootState {
  PostStore: IPostsState;
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    PostStore: postReducer,
  }),
  undefined,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;

function* rootSaga() {
  yield all([
    PostRootSaga()
  ]);
}

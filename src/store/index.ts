import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from 'redux-saga/effects';

import { IPostsState } from './types';
import { postReducer } from './reducer';
import { PostRootSaga } from "./root-saga";
import { modalReducer, ModalStoreType } from "../ui-library/src/redux/modal/reducer";

export interface IRootState {
  PostStore: IPostsState;
  ModalStore: ModalStoreType
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    PostStore: postReducer,
    ModalStore: modalReducer
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

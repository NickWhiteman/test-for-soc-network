import { createAction } from "@reduxjs/toolkit";
import { put, call, select } from "redux-saga/effects";

import api from "../../api";
import { postAction } from "../reducer";
import { selectIdDeletePost, selectIdOpenPosts } from "../selectors";
// import { CreatePostType, Post } from "../types";

/*
 *   actions saga
 */
const GET_POSTS = "GET_POSTS";
const GET_POSTS_BY_ID = "GET_POSTS_BY_ID";
const CREATE_POST = "CREATE_POST";
const DELETE_POST = "DELETE_POST";

export const sagaActions = {
  getPosts: createAction(GET_POSTS),
  getPostById: createAction(GET_POSTS_BY_ID),
  createPost: createAction(CREATE_POST),
  deletePost: createAction(DELETE_POST)
};

/*
 *   workers saga
 */

export function* getPostsSaga() {
  try {
    const {data} = yield call(api.posts.getPosts);
  
    if ( data ) {
      yield put(postAction.getPosts(data));
    }
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

export function* getPostByIdSaga() {
  try {
    const idOpenPost: number = yield select(selectIdOpenPosts);  
    const {data} = yield call(api.posts.getPostsById, idOpenPost);
  
    if ( data ) {
      yield put(postAction.getOpenPost(data));
    }
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

export function* deletePostSaga() {
  try {
    const idDeletePost: number = yield select(selectIdDeletePost);  
    const {status} = yield call(api.posts.deletePostById, idDeletePost);
  
    if ( status === 200 ) {

      yield put(postAction.resetDeleteId);

      const {data} = yield call(api.posts.getPosts);
      yield put(postAction.getPosts(data));

    }
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

export function* createPostSaga() {
  try {
    // yield call(api.posts.createPost,);
    const {data} = yield call(api.posts.getPosts);
  
    if ( data ) {
      yield put(postAction.getPosts(data));
    }
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
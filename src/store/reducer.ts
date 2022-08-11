import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IPostsState, Post } from "./types";

const STORE_NAME = '@authorization';

const initialState: IPostsState = {
  posts: [],
  /*
  * ?? it need field or not ??
  */
  openPost: undefined,
  openIdPosts: undefined, 
  deleteIdPosts: undefined
};

export const PostReducer = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    getPosts(state: IPostsState, {payload}: PayloadAction<Post[]>) {
      state.posts = payload
    },
    openPost(state: IPostsState, {payload}: PayloadAction<number>) {
      state.openIdPosts = payload
    },
    resetOpenId(state: IPostsState) {
      state.openIdPosts = undefined
    },
    deletePost(state: IPostsState, {payload}: PayloadAction<number>) {
      state.deleteIdPosts = payload
    },
    resetDeleteId(state: IPostsState) {
      state.deleteIdPosts = undefined
    },
    getOpenPost(state: IPostsState, {payload}: PayloadAction<Post>) {
      state.openPost = payload
    }
  }
});

export const postAction = {
  ...PostReducer.actions
};

export const postReducer = PostReducer.reducer;
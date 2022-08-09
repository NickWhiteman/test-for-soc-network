import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IPostsState } from "./types";

const STORE_NAME = '@authorization';

const initialState: IPostsState = {
  posts: [],
  /*
  * ?? it need field or not ??
  */
  openPosts: undefined, 
  deletePosts: undefined
};

export const PostReducer = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    getPosts(state: IPostsState, {payload}: PayloadAction<string[]>) {
      state.posts = payload
    },
  }
});

export const postAction = {
  ...PostReducer.actions
};

export const postReducer = PostReducer.reducer;
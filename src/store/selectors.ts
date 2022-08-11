import { IPostsState } from "./types";

export const selectPosts = (state: IPostsState) => state.posts;
export const selectIdDeletePost = (state: IPostsState) => state.deleteIdPosts;
export const selectIdOpenPosts = (state: IPostsState) => state.openIdPosts;

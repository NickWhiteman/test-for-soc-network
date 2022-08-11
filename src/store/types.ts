export type Post = {
  id: number
  title: string
  description: string
}

export type CreatePostType = Omit<Post, 'id'>;

export interface IPostsState {
  posts: Post[]
  openPost?: Post
  openIdPosts?: number
  deleteIdPosts?: number
  deletePosts?: number
}
